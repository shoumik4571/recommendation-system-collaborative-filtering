# Project 2: Recommendation System using Collaborative Filtering (Talverin ReelPulse)

An end-to-end personalized movie recommendation engine implementing **Memory-Based Collaborative Filtering (User-User & Item-Item Cosine Similarity)** and **Model-Based Matrix Factorization (Singular Value Decomposition / SVD)** on the MovieLens dataset.

---

## Project Structure
```text
Project2_Talverin ReelPulse_Recommender/
├── Talverin_ReelPulse_Analysis_Notebook.ipynb   # Deliverable 1: Executed Analysis Notebook (EDA, Cosine Sim, SVD, recommendmovies)
├── EVALUATION_REPORT.md                # Deliverable 2: RMSE & Precision@K comparison report + Latent Space analysis
├── app.py                              # Interactive Streamlit Web App Demo
├── README.md                           # Reproducible setup and execution guide
├── data/
│   ├── users.csv                       # MovieLens-style Users table (400 users)
│   ├── movies.csv                      # MovieLens-style Movies table (350 movies across 5 taste clusters + long tail)
│   └── ratings.csv                     # 10,321 explicit ratings (92.63% Utility Matrix sparsity)
├── src/
│   └── cinematch_engine.py             # Complete implementation of Utility Matrix, NumPy Cosine Similarity, SVD, and evaluation
└── outputs/
    ├── demo_recommendations_log.txt    # Deliverable 3: Formatted log showing recommendations for User #101 (Toy Story fan)
    ├── cinematch_metrics.json          # Full JSON metrics (Sparsity, RMSE, Precision@5, Precision@10, SVD k-tuning)
    ├── eda_long_tail_and_ratings.png   # Long-Tail popularity & rating distribution plots
    ├── model_evaluation_rmse.png       # RMSE comparison & SVD latent factor (k) tuning plot
    └── latent_features_2d.png          # 2D scatter plot of SVD Item Embeddings (Q)
```

---

## Reproducible Commands

### 1. Run the Full Talverin ReelPulse Pipeline & Generate All Plots/Logs
```bash
python src/cinematch_engine.py
```

### 2. Launch the Interactive Talverin ReelPulse Web App (Streamlit)
```bash
streamlit run app.py
```
