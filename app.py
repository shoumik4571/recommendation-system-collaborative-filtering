"""
Interactive Talverin ReelPulse Movie Recommendation Engine Demo (Streamlit).
Run with:
    streamlit run app.py
"""

import json
import os
import sys
import numpy as np
import pandas as pd
import streamlit as st

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(BASE_DIR, "src"))

from cinematch_engine import MemoryBasedCF, SurpriseSVDModel, recommendmovies

DATA_DIR = os.path.join(BASE_DIR, "data")
OUTPUT_DIR = os.path.join(BASE_DIR, "outputs")

st.set_page_config(page_title="Talverin ReelPulse AI Recommender", page_icon="🎬", layout="wide")


@st.cache_resource
def load_cinematch_system():
    users_df = pd.read_csv(os.path.join(DATA_DIR, "users.csv"))
    movies_df = pd.read_csv(os.path.join(DATA_DIR, "movies.csv"))
    ratings_df = pd.read_csv(os.path.join(DATA_DIR, "ratings.csv"))
    with open(os.path.join(OUTPUT_DIR, "cinematch_metrics.json"), "r", encoding="utf-8") as f:
        metrics = json.load(f)

    utility_df = ratings_df.pivot(index="userId", columns="movieId", values="rating").reindex(
        index=users_df["userId"], columns=movies_df["movieId"]
    )
    user_cf = MemoryBasedCF(mode="user", k_neighbors=25).fit(utility_df)
    item_cf = MemoryBasedCF(mode="item", k_neighbors=25).fit(utility_df)
    svd_model = SurpriseSVDModel(n_factors=metrics["best_k"], n_epochs=40, lr=0.012, reg=0.04, random_state=42)
    svd_model.fit(ratings_df, all_user_ids=users_df["userId"], all_movie_ids=movies_df["movieId"])
    return users_df, movies_df, ratings_df, utility_df, user_cf, item_cf, svd_model, metrics


users_df, movies_df, ratings_df, utility_df, user_cf, item_cf, svd_model, metrics = load_cinematch_system()

st.title("🎬 Talverin ReelPulse: Personalized Movie Recommendation Engine")
st.markdown(
    "Implements **Memory-Based Collaborative Filtering (User-User & Item-Item Cosine Similarity)** and "
    "**Model-Based Matrix Factorization (SVD)** on the MovieLens dataset."
)

# Top KPI Cards
ds = metrics["dataset_stats"]
k1, k2, k3, k4 = st.columns(4)
k1.metric("Total Users", f"{ds['num_users']:,}")
k2.metric("Total Movies", f"{ds['num_movies']:,}")
k3.metric("Total Ratings", f"{ds['num_ratings']:,}")
k4.metric("Utility Matrix Sparsity", f"{ds['sparsity_ratio_pct']}% Empty")

tab1, tab2, tab3, tab4 = st.tabs([
    "👤 User Profile Top-N Recommendations",
    "🎞️ Item-Item ('People Who Liked This Also Liked...')",
    "❄️ Cold-Start New User Simulator",
    "📊 EDA, Latent Space & RMSE Report"
])

with tab1:
    st.subheader("Personalized Recommendations via SVD Matrix Factorization (`recommendmovies(userid)`)")
    col_u, col_r = st.columns([1.0, 1.3])

    with col_u:
        selected_uid = st.number_input(
            "Select User ID (1 to 400 — Default #101 is the Toy Story fan profile):",
            min_value=1, max_value=400, value=101, step=1
        )
        top_n = st.slider("Number of Recommendations (Top-N):", min_value=3, max_value=10, value=5)

        user_hist = ratings_df[ratings_df["userId"] == selected_uid].merge(movies_df, on="movieId").sort_values("rating", ascending=False)
        st.markdown(f"#### Watch History for User `#{selected_uid}` ({len(user_hist)} rated movies)")
        st.dataframe(user_hist[["title", "genres", "rating"]], use_container_width=True, height=290)

    with col_r:
        st.markdown(f"#### 🎯 Top {top_n} Recommended Movies for User `#{selected_uid}`")
        recs = recommendmovies(int(selected_uid), svd_model, movies_df, ratings_df, top_n=top_n)
        for r in recs:
            st.success(
                f"**#{r['rank']}: {r['title']}**  \n"
                f"🏷️ *Genres:* `{r['genres']}` | ⭐ *Predicted Rating:* **`{r['predicted_rating']:.2f} / 5.00`**"
            )

with tab2:
    st.subheader("Item-Item Collaborative Filtering (Manual NumPy Cosine Similarity)")
    st.caption("\"Alice liked 'Star Wars'; find movies that are similar to 'Star Wars' based on other users' ratings.\"")
    core_titles = movies_df.head(56)["title"].tolist()
    default_idx = next((i for i, t in enumerate(core_titles) if "Star Wars: Episode IV" in t), 0)
    chosen_movie = st.selectbox("Select a Movie You Liked:", core_titles, index=default_idx)

    sim_movies = item_cf.get_similar_movies(chosen_movie.split(" (")[0], movies_df, top_n=5)
    st.markdown(f"#### Because you liked **{chosen_movie}**, similar movies are:")
    st.table(pd.DataFrame(sim_movies))

with tab3:
    st.subheader("Cold-Start Problem: New User with Zero History")
    st.markdown(
        "When a brand-new user (`User #9999`) joins Talverin ReelPulse with **0 past ratings**, standard Collaborative Filtering "
        "cannot compute a user vector. Our hybrid fallback combines **Bayesian Popularity-Weighted Top Movies** with optional genre onboarding."
    )
    preferred_genre = st.selectbox(
        "Optional Onboarding Genre Filter:",
        ["All Genres (Bayesian Popularity Default)", "Animation", "Sci-Fi", "Action", "Crime", "Romance", "Comedy"]
    )
    cold_recs = recommendmovies(9999, svd_model, movies_df, ratings_df, top_n=15)
    if preferred_genre != "All Genres (Bayesian Popularity Default)":
        cold_recs = [r for r in cold_recs if preferred_genre in r["genres"]][:5]
    else:
        cold_recs = cold_recs[:5]
    st.table(pd.DataFrame(cold_recs))

with tab4:
    st.subheader("Model Evaluation Summary (RMSE & Precision@K)")
    st.table(pd.DataFrame(metrics["model_comparison"]))

    st.image(os.path.join(OUTPUT_DIR, "eda_long_tail_and_ratings.png"), caption="Phase 1: Long-Tail Popularity & Rating Distribution", use_container_width=True)
    st.image(os.path.join(OUTPUT_DIR, "model_evaluation_rmse.png"), caption="Phase 3 & 4: RMSE Comparison & SVD k-Factor Tuning", use_container_width=True)
    st.image(os.path.join(OUTPUT_DIR, "latent_features_2d.png"), caption="Phase 3: 2D SVD Latent Feature Space Interpretation", use_container_width=True)
