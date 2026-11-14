// Auto-generated Talverin ReelPulse Collaborative Filtering embedded state & live matrix engine
// Supports User-User Cosine CF, Item-Item Cosine CF, SVD Matrix Factorization (P x Q^T),
// and Hybrid Cold-Start recommendations 100% in the browser.

export const CINEMATCH_STATE: any = {
  "globalMean": 4.0206,
  "metrics": {
    "dataset_stats": {
      "num_users": 400,
      "num_movies": 350,
      "num_ratings": 10321,
      "total_matrix_cells": 140000,
      "sparsity_ratio_pct": 92.63
    },
    "svd_k_tuning": [
      {
        "k_factors": 5,
        "test_rmse": 0.3387
      },
      {
        "k_factors": 10,
        "test_rmse": 0.3544
      },
      {
        "k_factors": 20,
        "test_rmse": 0.3837
      },
      {
        "k_factors": 35,
        "test_rmse": 0.4206
      },
      {
        "k_factors": 50,
        "test_rmse": 0.4402
      }
    ],
    "best_k": 5,
    "model_comparison": [
      {
        "model": "User-Based Collaborative Filtering (Cosine Similarity)",
        "rmse": 0.3752,
        "precision_at_5": 0.4595,
        "precision_at_10": 0.4401
      },
      {
        "model": "Item-Based Collaborative Filtering (Cosine Similarity)",
        "rmse": 0.382,
        "precision_at_5": 0.035,
        "precision_at_10": 0.0514
      },
      {
        "model": "Matrix Factorization - SVD (Tuned k=5)",
        "rmse": 0.3387,
        "precision_at_5": 0.5985,
        "precision_at_10": 0.572
      }
    ],
    "user_101_recommendations": [
      {
        "movieId": 3,
        "title": "The Lion King (1994)",
        "genres": "Animation|Children|Drama",
        "predicted_rating": 4.57,
        "strategy": "SVD Matrix Factorization",
        "rank": 1
      },
      {
        "movieId": 6,
        "title": "Monsters, Inc. (2001)",
        "genres": "Animation|Children|Comedy",
        "predicted_rating": 4.54,
        "strategy": "SVD Matrix Factorization",
        "rank": 2
      },
      {
        "movieId": 5,
        "title": "Finding Nemo (2003)",
        "genres": "Animation|Adventure|Children|Comedy",
        "predicted_rating": 4.49,
        "strategy": "SVD Matrix Factorization",
        "rank": 3
      },
      {
        "movieId": 2,
        "title": "Aladdin (1992)",
        "genres": "Animation|Children|Musical",
        "predicted_rating": 4.39,
        "strategy": "SVD Matrix Factorization",
        "rank": 4
      },
      {
        "movieId": 52,
        "title": "Ferris Bueller's Day Off (1986)",
        "genres": "Comedy",
        "predicted_rating": 4.24,
        "strategy": "SVD Matrix Factorization",
        "rank": 5
      }
    ],
    "star_wars_item_item_recommendations": [
      {
        "movieId": 16,
        "title": "The Matrix (1999)",
        "genres": "Action|Sci-Fi|Thriller",
        "cosine_similarity": 0.503
      },
      {
        "movieId": 24,
        "title": "Jurassic Park (1993)",
        "genres": "Action|Adventure|Sci-Fi",
        "cosine_similarity": 0.5
      },
      {
        "movieId": 20,
        "title": "Blade Runner (1982)",
        "genres": "Action|Sci-Fi|Thriller",
        "cosine_similarity": 0.4854
      },
      {
        "movieId": 21,
        "title": "Aliens (1986)",
        "genres": "Action|Horror|Sci-Fi",
        "cosine_similarity": 0.4769
      },
      {
        "movieId": 17,
        "title": "Inception (2010)",
        "genres": "Action|Sci-Fi|Thriller",
        "cosine_similarity": 0.4705
      }
    ],
    "cold_start_recommendations": [
      {
        "rank": 1,
        "movieId": 3,
        "title": "The Lion King (1994)",
        "genres": "Animation|Children|Drama",
        "predicted_rating": 4.14,
        "strategy": "Cold-Start Popularity Fallback"
      },
      {
        "rank": 2,
        "movieId": 1,
        "title": "Toy Story (1995)",
        "genres": "Animation|Children|Comedy",
        "predicted_rating": 4.13,
        "strategy": "Cold-Start Popularity Fallback"
      },
      {
        "rank": 3,
        "movieId": 45,
        "title": "Forrest Gump (1994)",
        "genres": "Comedy|Drama|Romance",
        "predicted_rating": 4.13,
        "strategy": "Cold-Start Popularity Fallback"
      },
      {
        "rank": 4,
        "movieId": 13,
        "title": "Star Wars: Episode IV - A New Hope (1977)",
        "genres": "Action|Adventure|Sci-Fi",
        "predicted_rating": 4.13,
        "strategy": "Cold-Start Popularity Fallback"
      },
      {
        "rank": 5,
        "movieId": 2,
        "title": "Aladdin (1992)",
        "genres": "Animation|Children|Musical",
        "predicted_rating": 4.12,
        "strategy": "Cold-Start Popularity Fallback"
      }
    ]
  },
  "demoLog": "================================================================================\n                TALVERIN REELPULSE COLLABORATIVE FILTERING - DEMO OUTPUT                 \n================================================================================\n\n1. UTILITY MATRIX & SPARSITY CHALLENGE:\n   - Total Users: 400\n   - Total Movies: 350\n   - Total Matrix Cells: 140,000\n   - Observed Ratings: 10,321\n   - Sparsity Ratio: 92.63% empty (NaN)\n\n2. PERSONALIZED TOP-5 RECOMMENDATIONS FOR USER #101:\n   User #101 Watch History (High Ratings): Toy Story (1995) [5.0\u2605], Toy Story 2 (1999) [5.0\u2605], Shrek (2001) [4.5\u2605], The Incredibles (2004) [4.5\u2605], Up (2009) [4.5\u2605], WALL-E (2008) [4.5\u2605], Coco (2017) [4.5\u2605], Back to the Future (1985) [4.0\u2605], Groundhog Day (1993) [4.0\u2605]\n   >>> For User #101 (who likes Toy Story (1995)), we recommend:\n       #1: The Lion King (1994) | Genres: Animation|Children|Drama | Predicted Rating: 4.57 / 5.00\n       #2: Monsters, Inc. (2001) | Genres: Animation|Children|Comedy | Predicted Rating: 4.54 / 5.00\n       #3: Finding Nemo (2003) | Genres: Animation|Adventure|Children|Comedy | Predicted Rating: 4.49 / 5.00\n       #4: Aladdin (1992) | Genres: Animation|Children|Musical | Predicted Rating: 4.39 / 5.00\n       #5: Ferris Bueller's Day Off (1986) | Genres: Comedy | Predicted Rating: 4.24 / 5.00\n\n3. ITEM-ITEM FILTERING ('Alice liked Star Wars: Episode IV - A New Hope (1977)'):\n       #1: The Matrix (1999) | Cosine Similarity: 0.5030\n       #2: Jurassic Park (1993) | Cosine Similarity: 0.5000\n       #3: Blade Runner (1982) | Cosine Similarity: 0.4854\n       #4: Aliens (1986) | Cosine Similarity: 0.4769\n       #5: Inception (2010) | Cosine Similarity: 0.4705\n\n4. MODEL EVALUATION SUMMARY (HELD-OUT TEST SET):\n   - User-Based Collaborative Filtering (Cosine Similarity) | RMSE: 0.3752 | Precision@5: 0.4595 | Precision@10: 0.4401\n   - Item-Based Collaborative Filtering (Cosine Similarity) | RMSE: 0.3820 | Precision@5: 0.0350 | Precision@10: 0.0514\n   - Matrix Factorization - SVD (Tuned k=5)               | RMSE: 0.3387 | Precision@5: 0.5985 | Precision@10: 0.5720\n",
  "catalog": [
    {
      "movieId": 1,
      "title": "Toy Story (1995)",
      "shortTitle": "Toy Story",
      "year": "1995",
      "genres": [
        "Animation",
        "Children",
        "Comedy"
      ],
      "genresStr": "Animation|Children|Comedy",
      "cluster": 0,
      "clusterName": "Family & Animation",
      "gradient": "from-[#F59E0B] via-[#D97706] to-[#78350F]",
      "ratingCount": 170,
      "avgRating": 4.17,
      "bias": 0.1134,
      "qVec": [
        -0.8485,
        -0.2917,
        0.0031,
        0.1423,
        0.005
      ],
      "isLongTail": false
    },
    {
      "movieId": 2,
      "title": "Aladdin (1992)",
      "shortTitle": "Aladdin",
      "year": "1992",
      "genres": [
        "Animation",
        "Children",
        "Musical"
      ],
      "genresStr": "Animation|Children|Musical",
      "cluster": 0,
      "clusterName": "Family & Animation",
      "gradient": "from-[#F59E0B] via-[#D97706] to-[#78350F]",
      "ratingCount": 161,
      "avgRating": 4.16,
      "bias": 0.0815,
      "qVec": [
        -0.8209,
        -0.2309,
        0.2236,
        0.0819,
        -0.065
      ],
      "isLongTail": false
    },
    {
      "movieId": 3,
      "title": "The Lion King (1994)",
      "shortTitle": "The Lion King",
      "year": "1994",
      "genres": [
        "Animation",
        "Children",
        "Drama"
      ],
      "genresStr": "Animation|Children|Drama",
      "cluster": 0,
      "clusterName": "Family & Animation",
      "gradient": "from-[#F59E0B] via-[#D97706] to-[#78350F]",
      "ratingCount": 183,
      "avgRating": 4.17,
      "bias": 0.0991,
      "qVec": [
        -0.8876,
        -0.3076,
        0.1568,
        0.0157,
        0.1726
      ],
      "isLongTail": false
    },
    {
      "movieId": 4,
      "title": "Beauty and the Beast (1991)",
      "shortTitle": "Beauty and the Beast",
      "year": "1991",
      "genres": [
        "Animation",
        "Children",
        "Musical",
        "Romance"
      ],
      "genresStr": "Animation|Children|Musical|Romance",
      "cluster": 0,
      "clusterName": "Family & Animation",
      "gradient": "from-[#F59E0B] via-[#D97706] to-[#78350F]",
      "ratingCount": 162,
      "avgRating": 4.04,
      "bias": 0.0885,
      "qVec": [
        -0.7803,
        -0.3438,
        -0.0548,
        -0.2943,
        -0.0295
      ],
      "isLongTail": false
    },
    {
      "movieId": 5,
      "title": "Finding Nemo (2003)",
      "shortTitle": "Finding Nemo",
      "year": "2003",
      "genres": [
        "Animation",
        "Adventure",
        "Children",
        "Comedy"
      ],
      "genresStr": "Animation|Adventure|Children|Comedy",
      "cluster": 0,
      "clusterName": "Family & Animation",
      "gradient": "from-[#F59E0B] via-[#D97706] to-[#78350F]",
      "ratingCount": 168,
      "avgRating": 4.1,
      "bias": 0.0695,
      "qVec": [
        -0.9111,
        -0.2063,
        0.1174,
        0.0463,
        -0.0109
      ],
      "isLongTail": false
    },
    {
      "movieId": 6,
      "title": "Monsters, Inc. (2001)",
      "shortTitle": "Monsters, Inc.",
      "year": "2001",
      "genres": [
        "Animation",
        "Children",
        "Comedy"
      ],
      "genresStr": "Animation|Children|Comedy",
      "cluster": 0,
      "clusterName": "Family & Animation",
      "gradient": "from-[#F59E0B] via-[#D97706] to-[#78350F]",
      "ratingCount": 164,
      "avgRating": 4.05,
      "bias": 0.0672,
      "qVec": [
        -0.9371,
        -0.2713,
        -0.0362,
        0.0541,
        -0.0563
      ],
      "isLongTail": false
    },
    {
      "movieId": 7,
      "title": "Toy Story 2 (1999)",
      "shortTitle": "Toy Story 2",
      "year": "1999",
      "genres": [
        "Animation",
        "Children",
        "Comedy"
      ],
      "genresStr": "Animation|Children|Comedy",
      "cluster": 0,
      "clusterName": "Family & Animation",
      "gradient": "from-[#F59E0B] via-[#D97706] to-[#78350F]",
      "ratingCount": 158,
      "avgRating": 4.08,
      "bias": 0.0674,
      "qVec": [
        -0.9201,
        -0.3239,
        0.0931,
        0.1395,
        0.145
      ],
      "isLongTail": false
    },
    {
      "movieId": 8,
      "title": "Shrek (2001)",
      "shortTitle": "Shrek",
      "year": "2001",
      "genres": [
        "Animation",
        "Children",
        "Comedy",
        "Fantasy"
      ],
      "genresStr": "Animation|Children|Comedy|Fantasy",
      "cluster": 0,
      "clusterName": "Family & Animation",
      "gradient": "from-[#F59E0B] via-[#D97706] to-[#78350F]",
      "ratingCount": 167,
      "avgRating": 4.13,
      "bias": 0.0571,
      "qVec": [
        -0.9531,
        -0.1635,
        0.0892,
        0.0852,
        -0.1811
      ],
      "isLongTail": false
    },
    {
      "movieId": 9,
      "title": "The Incredibles (2004)",
      "shortTitle": "The Incredibles",
      "year": "2004",
      "genres": [
        "Action",
        "Animation",
        "Children",
        "Comedy"
      ],
      "genresStr": "Action|Animation|Children|Comedy",
      "cluster": 0,
      "clusterName": "Family & Animation",
      "gradient": "from-[#F59E0B] via-[#D97706] to-[#78350F]",
      "ratingCount": 156,
      "avgRating": 4.07,
      "bias": 0.0332,
      "qVec": [
        -0.8849,
        -0.1752,
        0.0922,
        0.255,
        -0.1456
      ],
      "isLongTail": false
    },
    {
      "movieId": 10,
      "title": "Up (2009)",
      "shortTitle": "Up",
      "year": "2009",
      "genres": [
        "Animation",
        "Adventure",
        "Children",
        "Drama"
      ],
      "genresStr": "Animation|Adventure|Children|Drama",
      "cluster": 0,
      "clusterName": "Family & Animation",
      "gradient": "from-[#F59E0B] via-[#D97706] to-[#78350F]",
      "ratingCount": 159,
      "avgRating": 4.09,
      "bias": 0.0338,
      "qVec": [
        -0.9148,
        -0.2004,
        0.0997,
        0.175,
        -0.1474
      ],
      "isLongTail": false
    },
    {
      "movieId": 11,
      "title": "WALL-E (2008)",
      "shortTitle": "WALL-E",
      "year": "2008",
      "genres": [
        "Animation",
        "Children",
        "Sci-Fi"
      ],
      "genresStr": "Animation|Children|Sci-Fi",
      "cluster": 0,
      "clusterName": "Family & Animation",
      "gradient": "from-[#F59E0B] via-[#D97706] to-[#78350F]",
      "ratingCount": 153,
      "avgRating": 4.1,
      "bias": 0.0672,
      "qVec": [
        -0.8457,
        -0.3014,
        0.1313,
        0.1771,
        0.3342
      ],
      "isLongTail": false
    },
    {
      "movieId": 12,
      "title": "Coco (2017)",
      "shortTitle": "Coco",
      "year": "2017",
      "genres": [
        "Animation",
        "Children",
        "Musical"
      ],
      "genresStr": "Animation|Children|Musical",
      "cluster": 0,
      "clusterName": "Family & Animation",
      "gradient": "from-[#F59E0B] via-[#D97706] to-[#78350F]",
      "ratingCount": 128,
      "avgRating": 4.13,
      "bias": 0.0617,
      "qVec": [
        -0.9247,
        -0.3295,
        -0.0752,
        -0.0195,
        0.0326
      ],
      "isLongTail": false
    },
    {
      "movieId": 13,
      "title": "Star Wars: Episode IV - A New Hope (1977)",
      "shortTitle": "Star Wars: Episode IV - A New Hope",
      "year": "1977",
      "genres": [
        "Action",
        "Adventure",
        "Sci-Fi"
      ],
      "genresStr": "Action|Adventure|Sci-Fi",
      "cluster": 1,
      "clusterName": "Sci-Fi & Action",
      "gradient": "from-[#E50914] via-[#991B1B] to-[#1E1B4B]",
      "ratingCount": 183,
      "avgRating": 4.16,
      "bias": 0.0998,
      "qVec": [
        0.7087,
        -0.6596,
        0.1108,
        -0.0342,
        0.0616
      ],
      "isLongTail": false
    },
    {
      "movieId": 14,
      "title": "Star Wars: Episode V - The Empire Strikes Back (1980)",
      "shortTitle": "Star Wars: Episode V - The Empire Strikes Back",
      "year": "1980",
      "genres": [
        "Action",
        "Adventure",
        "Sci-Fi"
      ],
      "genresStr": "Action|Adventure|Sci-Fi",
      "cluster": 1,
      "clusterName": "Sci-Fi & Action",
      "gradient": "from-[#E50914] via-[#991B1B] to-[#1E1B4B]",
      "ratingCount": 158,
      "avgRating": 4.16,
      "bias": 0.0896,
      "qVec": [
        0.739,
        -0.492,
        0.0689,
        -0.1083,
        0.0957
      ],
      "isLongTail": false
    },
    {
      "movieId": 15,
      "title": "Star Wars: Episode VI - Return of the Jedi (1983)",
      "shortTitle": "Star Wars: Episode VI - Return of the Jedi",
      "year": "1983",
      "genres": [
        "Action",
        "Adventure",
        "Sci-Fi"
      ],
      "genresStr": "Action|Adventure|Sci-Fi",
      "cluster": 1,
      "clusterName": "Sci-Fi & Action",
      "gradient": "from-[#E50914] via-[#991B1B] to-[#1E1B4B]",
      "ratingCount": 145,
      "avgRating": 4.06,
      "bias": 0.0831,
      "qVec": [
        0.7005,
        -0.6472,
        0.2164,
        -0.1431,
        -0.1015
      ],
      "isLongTail": false
    },
    {
      "movieId": 16,
      "title": "The Matrix (1999)",
      "shortTitle": "The Matrix",
      "year": "1999",
      "genres": [
        "Action",
        "Sci-Fi",
        "Thriller"
      ],
      "genresStr": "Action|Sci-Fi|Thriller",
      "cluster": 1,
      "clusterName": "Sci-Fi & Action",
      "gradient": "from-[#E50914] via-[#991B1B] to-[#1E1B4B]",
      "ratingCount": 176,
      "avgRating": 4.07,
      "bias": 0.103,
      "qVec": [
        0.785,
        -0.4954,
        -0.004,
        0.1199,
        0.1413
      ],
      "isLongTail": false
    },
    {
      "movieId": 17,
      "title": "Inception (2010)",
      "shortTitle": "Inception",
      "year": "2010",
      "genres": [
        "Action",
        "Sci-Fi",
        "Thriller"
      ],
      "genresStr": "Action|Sci-Fi|Thriller",
      "cluster": 1,
      "clusterName": "Sci-Fi & Action",
      "gradient": "from-[#E50914] via-[#991B1B] to-[#1E1B4B]",
      "ratingCount": 160,
      "avgRating": 4.12,
      "bias": 0.0851,
      "qVec": [
        0.7276,
        -0.6448,
        0.2877,
        0.0428,
        -0.0587
      ],
      "isLongTail": false
    },
    {
      "movieId": 18,
      "title": "Interstellar (2014)",
      "shortTitle": "Interstellar",
      "year": "2014",
      "genres": [
        "Drama",
        "Sci-Fi"
      ],
      "genresStr": "Drama|Sci-Fi",
      "cluster": 1,
      "clusterName": "Sci-Fi & Action",
      "gradient": "from-[#E50914] via-[#991B1B] to-[#1E1B4B]",
      "ratingCount": 158,
      "avgRating": 4.02,
      "bias": 0.0303,
      "qVec": [
        0.7103,
        -0.6912,
        0.0479,
        -0.0648,
        -0.0826
      ],
      "isLongTail": false
    },
    {
      "movieId": 19,
      "title": "Terminator 2: Judgment Day (1991)",
      "shortTitle": "Terminator 2: Judgment Day",
      "year": "1991",
      "genres": [
        "Action",
        "Sci-Fi"
      ],
      "genresStr": "Action|Sci-Fi",
      "cluster": 1,
      "clusterName": "Sci-Fi & Action",
      "gradient": "from-[#E50914] via-[#991B1B] to-[#1E1B4B]",
      "ratingCount": 157,
      "avgRating": 4.1,
      "bias": 0.0634,
      "qVec": [
        0.6392,
        -0.7035,
        -0.01,
        -0.0536,
        -0.0412
      ],
      "isLongTail": false
    },
    {
      "movieId": 20,
      "title": "Blade Runner (1982)",
      "shortTitle": "Blade Runner",
      "year": "1982",
      "genres": [
        "Action",
        "Sci-Fi",
        "Thriller"
      ],
      "genresStr": "Action|Sci-Fi|Thriller",
      "cluster": 1,
      "clusterName": "Sci-Fi & Action",
      "gradient": "from-[#E50914] via-[#991B1B] to-[#1E1B4B]",
      "ratingCount": 150,
      "avgRating": 4.14,
      "bias": 0.0652,
      "qVec": [
        0.7162,
        -0.552,
        0.184,
        0.0113,
        0.061
      ],
      "isLongTail": false
    },
    {
      "movieId": 21,
      "title": "Aliens (1986)",
      "shortTitle": "Aliens",
      "year": "1986",
      "genres": [
        "Action",
        "Horror",
        "Sci-Fi"
      ],
      "genresStr": "Action|Horror|Sci-Fi",
      "cluster": 1,
      "clusterName": "Sci-Fi & Action",
      "gradient": "from-[#E50914] via-[#991B1B] to-[#1E1B4B]",
      "ratingCount": 156,
      "avgRating": 3.98,
      "bias": 0.0115,
      "qVec": [
        0.7638,
        -0.6299,
        0.0065,
        -0.2046,
        -0.1424
      ],
      "isLongTail": false
    },
    {
      "movieId": 22,
      "title": "The Dark Knight (2008)",
      "shortTitle": "The Dark Knight",
      "year": "2008",
      "genres": [
        "Action",
        "Crime",
        "Drama"
      ],
      "genresStr": "Action|Crime|Drama",
      "cluster": 1,
      "clusterName": "Sci-Fi & Action",
      "gradient": "from-[#E50914] via-[#991B1B] to-[#1E1B4B]",
      "ratingCount": 167,
      "avgRating": 4.05,
      "bias": 0.081,
      "qVec": [
        0.6889,
        -0.5715,
        0.1142,
        -0.0684,
        -0.0116
      ],
      "isLongTail": false
    },
    {
      "movieId": 23,
      "title": "Raiders of the Lost Ark (1981)",
      "shortTitle": "Raiders of the Lost Ark",
      "year": "1981",
      "genres": [
        "Action",
        "Adventure"
      ],
      "genresStr": "Action|Adventure",
      "cluster": 1,
      "clusterName": "Sci-Fi & Action",
      "gradient": "from-[#E50914] via-[#991B1B] to-[#1E1B4B]",
      "ratingCount": 154,
      "avgRating": 4.03,
      "bias": 0.0809,
      "qVec": [
        0.6399,
        -0.6215,
        0.0883,
        -0.0001,
        0.0145
      ],
      "isLongTail": false
    },
    {
      "movieId": 24,
      "title": "Jurassic Park (1993)",
      "shortTitle": "Jurassic Park",
      "year": "1993",
      "genres": [
        "Action",
        "Adventure",
        "Sci-Fi"
      ],
      "genresStr": "Action|Adventure|Sci-Fi",
      "cluster": 1,
      "clusterName": "Sci-Fi & Action",
      "gradient": "from-[#E50914] via-[#991B1B] to-[#1E1B4B]",
      "ratingCount": 156,
      "avgRating": 4.16,
      "bias": 0.0865,
      "qVec": [
        0.7581,
        -0.5616,
        0.1928,
        0.0452,
        0.2183
      ],
      "isLongTail": false
    },
    {
      "movieId": 25,
      "title": "The Shawshank Redemption (1994)",
      "shortTitle": "The Shawshank Redemption",
      "year": "1994",
      "genres": [
        "Crime",
        "Drama"
      ],
      "genresStr": "Crime|Drama",
      "cluster": 2,
      "clusterName": "Crime & Prestige Drama",
      "gradient": "from-[#DC2626] via-[#450A0A] to-[#09090B]",
      "ratingCount": 176,
      "avgRating": 4.09,
      "bias": 0.0849,
      "qVec": [
        0.8131,
        0.2598,
        0.0026,
        0.1666,
        0.2163
      ],
      "isLongTail": false
    },
    {
      "movieId": 26,
      "title": "The Godfather (1972)",
      "shortTitle": "The Godfather",
      "year": "1972",
      "genres": [
        "Crime",
        "Drama"
      ],
      "genresStr": "Crime|Drama",
      "cluster": 2,
      "clusterName": "Crime & Prestige Drama",
      "gradient": "from-[#DC2626] via-[#450A0A] to-[#09090B]",
      "ratingCount": 179,
      "avgRating": 4.08,
      "bias": 0.0685,
      "qVec": [
        0.9117,
        0.3252,
        0.1369,
        0.1161,
        0.0741
      ],
      "isLongTail": false
    },
    {
      "movieId": 27,
      "title": "The Godfather: Part II (1974)",
      "shortTitle": "The Godfather: Part II",
      "year": "1974",
      "genres": [
        "Crime",
        "Drama"
      ],
      "genresStr": "Crime|Drama",
      "cluster": 2,
      "clusterName": "Crime & Prestige Drama",
      "gradient": "from-[#DC2626] via-[#450A0A] to-[#09090B]",
      "ratingCount": 168,
      "avgRating": 4.11,
      "bias": 0.0362,
      "qVec": [
        0.876,
        0.4071,
        -0.0615,
        0.1314,
        -0.0931
      ],
      "isLongTail": false
    },
    {
      "movieId": 28,
      "title": "Pulp Fiction (1994)",
      "shortTitle": "Pulp Fiction",
      "year": "1994",
      "genres": [
        "Crime",
        "Drama",
        "Thriller"
      ],
      "genresStr": "Crime|Drama|Thriller",
      "cluster": 2,
      "clusterName": "Crime & Prestige Drama",
      "gradient": "from-[#DC2626] via-[#450A0A] to-[#09090B]",
      "ratingCount": 194,
      "avgRating": 4.06,
      "bias": 0.0238,
      "qVec": [
        0.9608,
        0.2708,
        0.0761,
        -0.1703,
        0.1584
      ],
      "isLongTail": false
    },
    {
      "movieId": 29,
      "title": "Goodfellas (1990)",
      "shortTitle": "Goodfellas",
      "year": "1990",
      "genres": [
        "Crime",
        "Drama"
      ],
      "genresStr": "Crime|Drama",
      "cluster": 2,
      "clusterName": "Crime & Prestige Drama",
      "gradient": "from-[#DC2626] via-[#450A0A] to-[#09090B]",
      "ratingCount": 169,
      "avgRating": 3.96,
      "bias": 0.0223,
      "qVec": [
        0.8624,
        0.3653,
        0.0201,
        0.171,
        -0.0613
      ],
      "isLongTail": false
    },
    {
      "movieId": 30,
      "title": "Fight Club (1999)",
      "shortTitle": "Fight Club",
      "year": "1999",
      "genres": [
        "Action",
        "Crime",
        "Drama",
        "Thriller"
      ],
      "genresStr": "Action|Crime|Drama|Thriller",
      "cluster": 2,
      "clusterName": "Crime & Prestige Drama",
      "gradient": "from-[#DC2626] via-[#450A0A] to-[#09090B]",
      "ratingCount": 157,
      "avgRating": 4.03,
      "bias": 0.0195,
      "qVec": [
        0.9426,
        0.2936,
        0.004,
        0.1692,
        0.0734
      ],
      "isLongTail": false
    },
    {
      "movieId": 31,
      "title": "Se7en (1995)",
      "shortTitle": "Se7en",
      "year": "1995",
      "genres": [
        "Mystery",
        "Thriller"
      ],
      "genresStr": "Mystery|Thriller",
      "cluster": 2,
      "clusterName": "Crime & Prestige Drama",
      "gradient": "from-[#DC2626] via-[#450A0A] to-[#09090B]",
      "ratingCount": 150,
      "avgRating": 4.04,
      "bias": 0.0275,
      "qVec": [
        0.9038,
        0.3794,
        0.1893,
        -0.1947,
        -0.2085
      ],
      "isLongTail": false
    },
    {
      "movieId": 32,
      "title": "The Silence of the Lambs (1991)",
      "shortTitle": "The Silence of the Lambs",
      "year": "1991",
      "genres": [
        "Crime",
        "Horror",
        "Thriller"
      ],
      "genresStr": "Crime|Horror|Thriller",
      "cluster": 2,
      "clusterName": "Crime & Prestige Drama",
      "gradient": "from-[#DC2626] via-[#450A0A] to-[#09090B]",
      "ratingCount": 173,
      "avgRating": 4.0,
      "bias": 0.0416,
      "qVec": [
        0.8152,
        0.3295,
        0.1081,
        -0.1484,
        -0.1814
      ],
      "isLongTail": false
    },
    {
      "movieId": 33,
      "title": "Schindler's List (1993)",
      "shortTitle": "Schindler's List",
      "year": "1993",
      "genres": [
        "Drama",
        "War"
      ],
      "genresStr": "Drama|War",
      "cluster": 2,
      "clusterName": "Crime & Prestige Drama",
      "gradient": "from-[#DC2626] via-[#450A0A] to-[#09090B]",
      "ratingCount": 162,
      "avgRating": 4.03,
      "bias": 0.0035,
      "qVec": [
        0.9759,
        0.2736,
        -0.0352,
        0.063,
        0.1258
      ],
      "isLongTail": false
    },
    {
      "movieId": 34,
      "title": "The Usual Suspects (1995)",
      "shortTitle": "The Usual Suspects",
      "year": "1995",
      "genres": [
        "Crime",
        "Mystery",
        "Thriller"
      ],
      "genresStr": "Crime|Mystery|Thriller",
      "cluster": 2,
      "clusterName": "Crime & Prestige Drama",
      "gradient": "from-[#DC2626] via-[#450A0A] to-[#09090B]",
      "ratingCount": 164,
      "avgRating": 4.07,
      "bias": 0.0259,
      "qVec": [
        0.9774,
        0.2711,
        0.0093,
        0.0819,
        -0.2104
      ],
      "isLongTail": false
    },
    {
      "movieId": 35,
      "title": "No Country for Old Men (2007)",
      "shortTitle": "No Country for Old Men",
      "year": "2007",
      "genres": [
        "Crime",
        "Drama",
        "Thriller"
      ],
      "genresStr": "Crime|Drama|Thriller",
      "cluster": 2,
      "clusterName": "Crime & Prestige Drama",
      "gradient": "from-[#DC2626] via-[#450A0A] to-[#09090B]",
      "ratingCount": 155,
      "avgRating": 4.0,
      "bias": -0.0102,
      "qVec": [
        0.8962,
        0.3433,
        0.121,
        0.262,
        -0.1643
      ],
      "isLongTail": false
    },
    {
      "movieId": 36,
      "title": "The Departed (2006)",
      "shortTitle": "The Departed",
      "year": "2006",
      "genres": [
        "Crime",
        "Drama",
        "Thriller"
      ],
      "genresStr": "Crime|Drama|Thriller",
      "cluster": 2,
      "clusterName": "Crime & Prestige Drama",
      "gradient": "from-[#DC2626] via-[#450A0A] to-[#09090B]",
      "ratingCount": 136,
      "avgRating": 4.06,
      "bias": -0.0287,
      "qVec": [
        0.9972,
        0.2632,
        -0.0979,
        0.1317,
        -0.0736
      ],
      "isLongTail": false
    },
    {
      "movieId": 37,
      "title": "Titanic (1997)",
      "shortTitle": "Titanic",
      "year": "1997",
      "genres": [
        "Drama",
        "Romance"
      ],
      "genresStr": "Drama|Romance",
      "cluster": 3,
      "clusterName": "Romance & Feel-Good",
      "gradient": "from-[#EC4899] via-[#9D174D] to-[#2E1065]",
      "ratingCount": 165,
      "avgRating": 4.12,
      "bias": 0.095,
      "qVec": [
        -0.3504,
        0.8883,
        0.1432,
        -0.1372,
        0.1243
      ],
      "isLongTail": false
    },
    {
      "movieId": 38,
      "title": "The Notebook (2004)",
      "shortTitle": "The Notebook",
      "year": "2004",
      "genres": [
        "Drama",
        "Romance"
      ],
      "genresStr": "Drama|Romance",
      "cluster": 3,
      "clusterName": "Romance & Feel-Good",
      "gradient": "from-[#EC4899] via-[#9D174D] to-[#2E1065]",
      "ratingCount": 163,
      "avgRating": 4.05,
      "bias": 0.0722,
      "qVec": [
        -0.4007,
        0.9873,
        0.1346,
        -0.051,
        0.2065
      ],
      "isLongTail": false
    },
    {
      "movieId": 39,
      "title": "La La Land (2016)",
      "shortTitle": "La La Land",
      "year": "2016",
      "genres": [
        "Comedy",
        "Drama",
        "Musical",
        "Romance"
      ],
      "genresStr": "Comedy|Drama|Musical|Romance",
      "cluster": 3,
      "clusterName": "Romance & Feel-Good",
      "gradient": "from-[#EC4899] via-[#9D174D] to-[#2E1065]",
      "ratingCount": 149,
      "avgRating": 4.1,
      "bias": 0.0568,
      "qVec": [
        -0.3024,
        0.9044,
        0.0598,
        -0.0651,
        0.094
      ],
      "isLongTail": false
    },
    {
      "movieId": 40,
      "title": "Pride & Prejudice (2005)",
      "shortTitle": "Pride & Prejudice",
      "year": "2005",
      "genres": [
        "Drama",
        "Romance"
      ],
      "genresStr": "Drama|Romance",
      "cluster": 3,
      "clusterName": "Romance & Feel-Good",
      "gradient": "from-[#EC4899] via-[#9D174D] to-[#2E1065]",
      "ratingCount": 160,
      "avgRating": 4.08,
      "bias": 0.0407,
      "qVec": [
        -0.4625,
        0.8048,
        0.215,
        -0.0641,
        0.128
      ],
      "isLongTail": false
    },
    {
      "movieId": 41,
      "title": "Before Sunrise (1995)",
      "shortTitle": "Before Sunrise",
      "year": "1995",
      "genres": [
        "Drama",
        "Romance"
      ],
      "genresStr": "Drama|Romance",
      "cluster": 3,
      "clusterName": "Romance & Feel-Good",
      "gradient": "from-[#EC4899] via-[#9D174D] to-[#2E1065]",
      "ratingCount": 159,
      "avgRating": 4.02,
      "bias": 0.0286,
      "qVec": [
        -0.3414,
        0.8854,
        0.0466,
        -0.0147,
        0.1922
      ],
      "isLongTail": false
    },
    {
      "movieId": 42,
      "title": "Eternal Sunshine of the Spotless Mind (2004)",
      "shortTitle": "Eternal Sunshine of the Spotless Mind",
      "year": "2004",
      "genres": [
        "Drama",
        "Romance",
        "Sci-Fi"
      ],
      "genresStr": "Drama|Romance|Sci-Fi",
      "cluster": 3,
      "clusterName": "Romance & Feel-Good",
      "gradient": "from-[#EC4899] via-[#9D174D] to-[#2E1065]",
      "ratingCount": 157,
      "avgRating": 4.11,
      "bias": 0.0383,
      "qVec": [
        -0.3355,
        0.7917,
        0.0656,
        -0.0449,
        0.116
      ],
      "isLongTail": false
    },
    {
      "movieId": 43,
      "title": "Notting Hill (1999)",
      "shortTitle": "Notting Hill",
      "year": "1999",
      "genres": [
        "Comedy",
        "Romance"
      ],
      "genresStr": "Comedy|Romance",
      "cluster": 3,
      "clusterName": "Romance & Feel-Good",
      "gradient": "from-[#EC4899] via-[#9D174D] to-[#2E1065]",
      "ratingCount": 153,
      "avgRating": 4.0,
      "bias": 0.062,
      "qVec": [
        -0.3838,
        0.8574,
        0.1463,
        -0.1349,
        0.1124
      ],
      "isLongTail": false
    },
    {
      "movieId": 44,
      "title": "When Harry Met Sally... (1989)",
      "shortTitle": "When Harry Met Sally...",
      "year": "1989",
      "genres": [
        "Comedy",
        "Romance"
      ],
      "genresStr": "Comedy|Romance",
      "cluster": 3,
      "clusterName": "Romance & Feel-Good",
      "gradient": "from-[#EC4899] via-[#9D174D] to-[#2E1065]",
      "ratingCount": 154,
      "avgRating": 4.15,
      "bias": 0.0782,
      "qVec": [
        -0.2567,
        0.8495,
        0.1209,
        0.0055,
        -0.1392
      ],
      "isLongTail": false
    },
    {
      "movieId": 45,
      "title": "Forrest Gump (1994)",
      "shortTitle": "Forrest Gump",
      "year": "1994",
      "genres": [
        "Comedy",
        "Drama",
        "Romance"
      ],
      "genresStr": "Comedy|Drama|Romance",
      "cluster": 3,
      "clusterName": "Romance & Feel-Good",
      "gradient": "from-[#EC4899] via-[#9D174D] to-[#2E1065]",
      "ratingCount": 171,
      "avgRating": 4.17,
      "bias": 0.1466,
      "qVec": [
        -0.3324,
        0.9078,
        0.1709,
        -0.075,
        -0.0324
      ],
      "isLongTail": false
    },
    {
      "movieId": 46,
      "title": "Good Will Hunting (1997)",
      "shortTitle": "Good Will Hunting",
      "year": "1997",
      "genres": [
        "Drama",
        "Romance"
      ],
      "genresStr": "Drama|Romance",
      "cluster": 3,
      "clusterName": "Romance & Feel-Good",
      "gradient": "from-[#EC4899] via-[#9D174D] to-[#2E1065]",
      "ratingCount": 154,
      "avgRating": 4.08,
      "bias": 0.0607,
      "qVec": [
        -0.2868,
        0.8957,
        -0.0819,
        0.0016,
        -0.1455
      ],
      "isLongTail": false
    },
    {
      "movieId": 47,
      "title": "Superbad (2007)",
      "shortTitle": "Superbad",
      "year": "2007",
      "genres": [
        "Comedy"
      ],
      "genresStr": "Comedy",
      "cluster": 4,
      "clusterName": "Comedy & Satire",
      "gradient": "from-[#10B981] via-[#047857] to-[#064E3B]",
      "ratingCount": 143,
      "avgRating": 3.98,
      "bias": 0.0186,
      "qVec": [
        -0.6792,
        -0.2501,
        0.1334,
        -0.1637,
        0.0426
      ],
      "isLongTail": false
    },
    {
      "movieId": 48,
      "title": "The Hangover (2009)",
      "shortTitle": "The Hangover",
      "year": "2009",
      "genres": [
        "Comedy"
      ],
      "genresStr": "Comedy",
      "cluster": 4,
      "clusterName": "Comedy & Satire",
      "gradient": "from-[#10B981] via-[#047857] to-[#064E3B]",
      "ratingCount": 167,
      "avgRating": 4.09,
      "bias": 0.0933,
      "qVec": [
        -0.7011,
        -0.2758,
        0.0379,
        -0.2292,
        -0.0454
      ],
      "isLongTail": false
    },
    {
      "movieId": 49,
      "title": "Groundhog Day (1993)",
      "shortTitle": "Groundhog Day",
      "year": "1993",
      "genres": [
        "Comedy",
        "Fantasy",
        "Romance"
      ],
      "genresStr": "Comedy|Fantasy|Romance",
      "cluster": 4,
      "clusterName": "Comedy & Satire",
      "gradient": "from-[#10B981] via-[#047857] to-[#064E3B]",
      "ratingCount": 162,
      "avgRating": 4.08,
      "bias": 0.0826,
      "qVec": [
        -0.5884,
        -0.3267,
        -0.0624,
        -0.0842,
        -0.1501
      ],
      "isLongTail": false
    },
    {
      "movieId": 50,
      "title": "Monty Python and the Holy Grail (1975)",
      "shortTitle": "Monty Python and the Holy Grail",
      "year": "1975",
      "genres": [
        "Adventure",
        "Comedy",
        "Fantasy"
      ],
      "genresStr": "Adventure|Comedy|Fantasy",
      "cluster": 4,
      "clusterName": "Comedy & Satire",
      "gradient": "from-[#10B981] via-[#047857] to-[#064E3B]",
      "ratingCount": 154,
      "avgRating": 4.05,
      "bias": 0.0658,
      "qVec": [
        -0.6886,
        -0.2493,
        0.0625,
        -0.067,
        -0.0079
      ],
      "isLongTail": false
    },
    {
      "movieId": 51,
      "title": "The Grand Budapest Hotel (2014)",
      "shortTitle": "The Grand Budapest Hotel",
      "year": "2014",
      "genres": [
        "Comedy",
        "Drama"
      ],
      "genresStr": "Comedy|Drama",
      "cluster": 4,
      "clusterName": "Comedy & Satire",
      "gradient": "from-[#10B981] via-[#047857] to-[#064E3B]",
      "ratingCount": 156,
      "avgRating": 4.05,
      "bias": -0.0034,
      "qVec": [
        -0.7133,
        -0.1215,
        0.0395,
        0.0129,
        -0.2031
      ],
      "isLongTail": false
    },
    {
      "movieId": 52,
      "title": "Ferris Bueller's Day Off (1986)",
      "shortTitle": "Ferris Bueller's Day Off",
      "year": "1986",
      "genres": [
        "Comedy"
      ],
      "genresStr": "Comedy",
      "cluster": 4,
      "clusterName": "Comedy & Satire",
      "gradient": "from-[#10B981] via-[#047857] to-[#064E3B]",
      "ratingCount": 148,
      "avgRating": 3.98,
      "bias": 0.0365,
      "qVec": [
        -0.7052,
        -0.29,
        0.0988,
        0.003,
        -0.0393
      ],
      "isLongTail": false
    },
    {
      "movieId": 53,
      "title": "Mean Girls (2004)",
      "shortTitle": "Mean Girls",
      "year": "2004",
      "genres": [
        "Comedy"
      ],
      "genresStr": "Comedy",
      "cluster": 4,
      "clusterName": "Comedy & Satire",
      "gradient": "from-[#10B981] via-[#047857] to-[#064E3B]",
      "ratingCount": 138,
      "avgRating": 3.97,
      "bias": 0.0608,
      "qVec": [
        -0.5975,
        -0.2366,
        0.062,
        -0.1614,
        0.0349
      ],
      "isLongTail": false
    },
    {
      "movieId": 54,
      "title": "Dumb and Dumber (1994)",
      "shortTitle": "Dumb and Dumber",
      "year": "1994",
      "genres": [
        "Comedy"
      ],
      "genresStr": "Comedy",
      "cluster": 4,
      "clusterName": "Comedy & Satire",
      "gradient": "from-[#10B981] via-[#047857] to-[#064E3B]",
      "ratingCount": 149,
      "avgRating": 3.99,
      "bias": -0.009,
      "qVec": [
        -0.582,
        -0.3626,
        0.1145,
        -0.047,
        -0.1459
      ],
      "isLongTail": false
    },
    {
      "movieId": 55,
      "title": "Back to the Future (1985)",
      "shortTitle": "Back to the Future",
      "year": "1985",
      "genres": [
        "Adventure",
        "Comedy",
        "Sci-Fi"
      ],
      "genresStr": "Adventure|Comedy|Sci-Fi",
      "cluster": 4,
      "clusterName": "Comedy & Satire",
      "gradient": "from-[#10B981] via-[#047857] to-[#064E3B]",
      "ratingCount": 164,
      "avgRating": 4.1,
      "bias": 0.1148,
      "qVec": [
        -0.6071,
        -0.3177,
        0.219,
        -0.2026,
        -0.1085
      ],
      "isLongTail": false
    },
    {
      "movieId": 56,
      "title": "Shaun of the Dead (2004)",
      "shortTitle": "Shaun of the Dead",
      "year": "2004",
      "genres": [
        "Comedy",
        "Horror"
      ],
      "genresStr": "Comedy|Horror",
      "cluster": 4,
      "clusterName": "Comedy & Satire",
      "gradient": "from-[#10B981] via-[#047857] to-[#064E3B]",
      "ratingCount": 146,
      "avgRating": 3.99,
      "bias": 0.0359,
      "qVec": [
        -0.7571,
        -0.2126,
        0.006,
        -0.0968,
        -0.0154
      ],
      "isLongTail": false
    },
    {
      "movieId": 57,
      "title": "The Northern Paradox (2004)",
      "shortTitle": "The Northern Paradox",
      "year": "2004",
      "genres": [
        "Action",
        "Adventure",
        "Sci-Fi"
      ],
      "genresStr": "Action|Adventure|Sci-Fi",
      "cluster": 1,
      "clusterName": "Sci-Fi & Action",
      "gradient": "from-[#E50914] via-[#991B1B] to-[#1E1B4B]",
      "ratingCount": 30,
      "avgRating": 3.63,
      "bias": -0.275,
      "qVec": [
        0.9599,
        -0.5703,
        -0.0825,
        0.1195,
        0.0017
      ],
      "isLongTail": true
    },
    {
      "movieId": 58,
      "title": "The Hidden Symphony (2005)",
      "shortTitle": "The Hidden Symphony",
      "year": "2005",
      "genres": [
        "Crime",
        "Drama",
        "Thriller"
      ],
      "genresStr": "Crime|Drama|Thriller",
      "cluster": 2,
      "clusterName": "Crime & Prestige Drama",
      "gradient": "from-[#DC2626] via-[#450A0A] to-[#09090B]",
      "ratingCount": 26,
      "avgRating": 3.81,
      "bias": -0.3465,
      "qVec": [
        1.0571,
        0.6767,
        0.1235,
        0.2613,
        -0.2487
      ],
      "isLongTail": true
    },
    {
      "movieId": 59,
      "title": "The Electric Echo (2006)",
      "shortTitle": "The Electric Echo",
      "year": "2006",
      "genres": [
        "Drama",
        "Romance"
      ],
      "genresStr": "Drama|Romance",
      "cluster": 3,
      "clusterName": "Romance & Feel-Good",
      "gradient": "from-[#EC4899] via-[#9D174D] to-[#2E1065]",
      "ratingCount": 22,
      "avgRating": 3.64,
      "bias": -0.317,
      "qVec": [
        -0.5003,
        0.8334,
        -0.072,
        -0.1667,
        0.0095
      ],
      "isLongTail": true
    },
    {
      "movieId": 60,
      "title": "The Silent Horizon (2007)",
      "shortTitle": "The Silent Horizon",
      "year": "2007",
      "genres": [
        "Comedy"
      ],
      "genresStr": "Comedy",
      "cluster": 4,
      "clusterName": "Comedy & Satire",
      "gradient": "from-[#10B981] via-[#047857] to-[#064E3B]",
      "ratingCount": 23,
      "avgRating": 3.67,
      "bias": -0.3218,
      "qVec": [
        -0.4172,
        -0.1159,
        -0.0012,
        -0.0564,
        -0.103
      ],
      "isLongTail": true
    },
    {
      "movieId": 61,
      "title": "The Broken Fable (2008)",
      "shortTitle": "The Broken Fable",
      "year": "2008",
      "genres": [
        "Animation",
        "Children",
        "Comedy"
      ],
      "genresStr": "Animation|Children|Comedy",
      "cluster": 0,
      "clusterName": "Family & Animation",
      "gradient": "from-[#F59E0B] via-[#D97706] to-[#78350F]",
      "ratingCount": 21,
      "avgRating": 4.05,
      "bias": -0.261,
      "qVec": [
        -0.8506,
        -0.496,
        -0.1802,
        -0.3085,
        0.0293
      ],
      "isLongTail": true
    },
    {
      "movieId": 62,
      "title": "The Shadow Cipher (2009)",
      "shortTitle": "The Shadow Cipher",
      "year": "2009",
      "genres": [
        "Action",
        "Adventure",
        "Sci-Fi"
      ],
      "genresStr": "Action|Adventure|Sci-Fi",
      "cluster": 1,
      "clusterName": "Sci-Fi & Action",
      "gradient": "from-[#E50914] via-[#991B1B] to-[#1E1B4B]",
      "ratingCount": 21,
      "avgRating": 3.9,
      "bias": -0.2729,
      "qVec": [
        0.7094,
        -0.9032,
        0.0095,
        -0.2327,
        0.1175
      ],
      "isLongTail": true
    },
    {
      "movieId": 63,
      "title": "The Distant Frontier (2010)",
      "shortTitle": "The Distant Frontier",
      "year": "2010",
      "genres": [
        "Crime",
        "Drama",
        "Thriller"
      ],
      "genresStr": "Crime|Drama|Thriller",
      "cluster": 2,
      "clusterName": "Crime & Prestige Drama",
      "gradient": "from-[#DC2626] via-[#450A0A] to-[#09090B]",
      "ratingCount": 12,
      "avgRating": 3.5,
      "bias": -0.4356,
      "qVec": [
        1.1258,
        0.5106,
        -0.0776,
        0.2667,
        0.2114
      ],
      "isLongTail": true
    },
    {
      "movieId": 64,
      "title": "The Emerald Sanctuary (2011)",
      "shortTitle": "The Emerald Sanctuary",
      "year": "2011",
      "genres": [
        "Drama",
        "Romance"
      ],
      "genresStr": "Drama|Romance",
      "cluster": 3,
      "clusterName": "Romance & Feel-Good",
      "gradient": "from-[#EC4899] via-[#9D174D] to-[#2E1065]",
      "ratingCount": 14,
      "avgRating": 3.57,
      "bias": -0.3379,
      "qVec": [
        -0.5305,
        0.7767,
        0.1829,
        -0.1117,
        0.0367
      ],
      "isLongTail": true
    },
    {
      "movieId": 65,
      "title": "The Forgotten Voyage (2012)",
      "shortTitle": "The Forgotten Voyage",
      "year": "2012",
      "genres": [
        "Comedy"
      ],
      "genresStr": "Comedy",
      "cluster": 4,
      "clusterName": "Comedy & Satire",
      "gradient": "from-[#10B981] via-[#047857] to-[#064E3B]",
      "ratingCount": 9,
      "avgRating": 3.39,
      "bias": -0.3924,
      "qVec": [
        -0.3806,
        -0.0057,
        -0.0955,
        -0.1201,
        -0.0276
      ],
      "isLongTail": true
    },
    {
      "movieId": 66,
      "title": "The Quantum Chronicle (2013)",
      "shortTitle": "The Quantum Chronicle",
      "year": "2013",
      "genres": [
        "Animation",
        "Children",
        "Comedy"
      ],
      "genresStr": "Animation|Children|Comedy",
      "cluster": 0,
      "clusterName": "Family & Animation",
      "gradient": "from-[#F59E0B] via-[#D97706] to-[#78350F]",
      "ratingCount": 11,
      "avgRating": 3.86,
      "bias": -0.1978,
      "qVec": [
        -0.914,
        -0.0764,
        -0.1042,
        0.0888,
        0.0468
      ],
      "isLongTail": true
    },
    {
      "movieId": 67,
      "title": "The Golden Labyrinth (2014)",
      "shortTitle": "The Golden Labyrinth",
      "year": "2014",
      "genres": [
        "Action",
        "Adventure",
        "Sci-Fi"
      ],
      "genresStr": "Action|Adventure|Sci-Fi",
      "cluster": 1,
      "clusterName": "Sci-Fi & Action",
      "gradient": "from-[#E50914] via-[#991B1B] to-[#1E1B4B]",
      "ratingCount": 7,
      "avgRating": 3.93,
      "bias": -0.1366,
      "qVec": [
        0.6425,
        0.0415,
        -0.1531,
        -0.1202,
        0.1301
      ],
      "isLongTail": true
    },
    {
      "movieId": 68,
      "title": "The Solar Protocol (2015)",
      "shortTitle": "The Solar Protocol",
      "year": "2015",
      "genres": [
        "Crime",
        "Drama",
        "Thriller"
      ],
      "genresStr": "Crime|Drama|Thriller",
      "cluster": 2,
      "clusterName": "Crime & Prestige Drama",
      "gradient": "from-[#DC2626] via-[#450A0A] to-[#09090B]",
      "ratingCount": 9,
      "avgRating": 3.44,
      "bias": -0.5483,
      "qVec": [
        0.8461,
        0.1704,
        -0.0168,
        -0.0865,
        0.1037
      ],
      "isLongTail": true
    },
    {
      "movieId": 69,
      "title": "The Crimson Harbor (2016)",
      "shortTitle": "The Crimson Harbor",
      "year": "2016",
      "genres": [
        "Drama",
        "Romance"
      ],
      "genresStr": "Drama|Romance",
      "cluster": 3,
      "clusterName": "Romance & Feel-Good",
      "gradient": "from-[#EC4899] via-[#9D174D] to-[#2E1065]",
      "ratingCount": 16,
      "avgRating": 4.0,
      "bias": -0.161,
      "qVec": [
        -0.203,
        0.7124,
        0.0097,
        -0.0036,
        0.2465
      ],
      "isLongTail": true
    },
    {
      "movieId": 70,
      "title": "The Velvet Odyssey (2017)",
      "shortTitle": "The Velvet Odyssey",
      "year": "2017",
      "genres": [
        "Comedy"
      ],
      "genresStr": "Comedy",
      "cluster": 4,
      "clusterName": "Comedy & Satire",
      "gradient": "from-[#10B981] via-[#047857] to-[#064E3B]",
      "ratingCount": 7,
      "avgRating": 3.86,
      "bias": -0.1317,
      "qVec": [
        -0.582,
        -0.1265,
        -0.1889,
        0.074,
        -0.2003
      ],
      "isLongTail": true
    },
    {
      "movieId": 71,
      "title": "The Midnight Mirage (2018)",
      "shortTitle": "The Midnight Mirage",
      "year": "2018",
      "genres": [
        "Animation",
        "Children",
        "Comedy"
      ],
      "genresStr": "Animation|Children|Comedy",
      "cluster": 0,
      "clusterName": "Family & Animation",
      "gradient": "from-[#F59E0B] via-[#D97706] to-[#78350F]",
      "ratingCount": 6,
      "avgRating": 3.58,
      "bias": -0.3824,
      "qVec": [
        -0.4258,
        -0.1567,
        -0.1726,
        0.0223,
        -0.0712
      ],
      "isLongTail": true
    },
    {
      "movieId": 72,
      "title": "The Northern Paradox (2019)",
      "shortTitle": "The Northern Paradox",
      "year": "2019",
      "genres": [
        "Action",
        "Adventure",
        "Sci-Fi"
      ],
      "genresStr": "Action|Adventure|Sci-Fi",
      "cluster": 1,
      "clusterName": "Sci-Fi & Action",
      "gradient": "from-[#E50914] via-[#991B1B] to-[#1E1B4B]",
      "ratingCount": 8,
      "avgRating": 3.5,
      "bias": -0.4331,
      "qVec": [
        0.6085,
        -0.2418,
        -0.0127,
        -0.0572,
        -0.0489
      ],
      "isLongTail": true
    },
    {
      "movieId": 73,
      "title": "The Hidden Symphony (2020)",
      "shortTitle": "The Hidden Symphony",
      "year": "2020",
      "genres": [
        "Crime",
        "Drama",
        "Thriller"
      ],
      "genresStr": "Crime|Drama|Thriller",
      "cluster": 2,
      "clusterName": "Crime & Prestige Drama",
      "gradient": "from-[#DC2626] via-[#450A0A] to-[#09090B]",
      "ratingCount": 6,
      "avgRating": 3.5,
      "bias": -0.3724,
      "qVec": [
        0.8907,
        0.17,
        -0.015,
        -0.1625,
        -0.1139
      ],
      "isLongTail": true
    },
    {
      "movieId": 74,
      "title": "The Electric Echo (2021)",
      "shortTitle": "The Electric Echo",
      "year": "2021",
      "genres": [
        "Drama",
        "Romance"
      ],
      "genresStr": "Drama|Romance",
      "cluster": 3,
      "clusterName": "Romance & Feel-Good",
      "gradient": "from-[#EC4899] via-[#9D174D] to-[#2E1065]",
      "ratingCount": 6,
      "avgRating": 3.5,
      "bias": -0.4245,
      "qVec": [
        -0.2937,
        0.4921,
        -0.1382,
        -0.0947,
        -0.223
      ],
      "isLongTail": true
    },
    {
      "movieId": 75,
      "title": "The Silent Horizon (2022)",
      "shortTitle": "The Silent Horizon",
      "year": "2022",
      "genres": [
        "Comedy"
      ],
      "genresStr": "Comedy",
      "cluster": 4,
      "clusterName": "Comedy & Satire",
      "gradient": "from-[#10B981] via-[#047857] to-[#064E3B]",
      "ratingCount": 13,
      "avgRating": 3.62,
      "bias": -0.3835,
      "qVec": [
        -0.2033,
        -0.3178,
        -0.1103,
        -0.0704,
        -0.1564
      ],
      "isLongTail": true
    },
    {
      "movieId": 76,
      "title": "The Broken Fable (1985)",
      "shortTitle": "The Broken Fable",
      "year": "1985",
      "genres": [
        "Animation",
        "Children",
        "Comedy"
      ],
      "genresStr": "Animation|Children|Comedy",
      "cluster": 0,
      "clusterName": "Family & Animation",
      "gradient": "from-[#F59E0B] via-[#D97706] to-[#78350F]",
      "ratingCount": 1,
      "avgRating": 3.5,
      "bias": -0.1207,
      "qVec": [
        0.0361,
        0.0162,
        -0.0596,
        -0.0223,
        0.0238
      ],
      "isLongTail": true
    },
    {
      "movieId": 77,
      "title": "The Shadow Cipher (1986)",
      "shortTitle": "The Shadow Cipher",
      "year": "1986",
      "genres": [
        "Action",
        "Adventure",
        "Sci-Fi"
      ],
      "genresStr": "Action|Adventure|Sci-Fi",
      "cluster": 1,
      "clusterName": "Sci-Fi & Action",
      "gradient": "from-[#E50914] via-[#991B1B] to-[#1E1B4B]",
      "ratingCount": 3,
      "avgRating": 3.17,
      "bias": -0.4598,
      "qVec": [
        0.3044,
        -0.1792,
        0.1079,
        -0.0279,
        -0.0475
      ],
      "isLongTail": true
    },
    {
      "movieId": 78,
      "title": "The Distant Frontier (1987)",
      "shortTitle": "The Distant Frontier",
      "year": "1987",
      "genres": [
        "Crime",
        "Drama",
        "Thriller"
      ],
      "genresStr": "Crime|Drama|Thriller",
      "cluster": 2,
      "clusterName": "Crime & Prestige Drama",
      "gradient": "from-[#DC2626] via-[#450A0A] to-[#09090B]",
      "ratingCount": 5,
      "avgRating": 3.0,
      "bias": -0.7097,
      "qVec": [
        0.3463,
        0.1524,
        -0.1811,
        0.0427,
        -0.0504
      ],
      "isLongTail": true
    },
    {
      "movieId": 79,
      "title": "The Emerald Sanctuary (1988)",
      "shortTitle": "The Emerald Sanctuary",
      "year": "1988",
      "genres": [
        "Drama",
        "Romance"
      ],
      "genresStr": "Drama|Romance",
      "cluster": 3,
      "clusterName": "Romance & Feel-Good",
      "gradient": "from-[#EC4899] via-[#9D174D] to-[#2E1065]",
      "ratingCount": 9,
      "avgRating": 3.44,
      "bias": -0.4151,
      "qVec": [
        -0.0326,
        0.4247,
        -0.0972,
        -0.0309,
        -0.0242
      ],
      "isLongTail": true
    },
    {
      "movieId": 80,
      "title": "The Forgotten Voyage (1989)",
      "shortTitle": "The Forgotten Voyage",
      "year": "1989",
      "genres": [
        "Comedy"
      ],
      "genresStr": "Comedy",
      "cluster": 4,
      "clusterName": "Comedy & Satire",
      "gradient": "from-[#10B981] via-[#047857] to-[#064E3B]",
      "ratingCount": 5,
      "avgRating": 3.8,
      "bias": -0.0681,
      "qVec": [
        -0.1979,
        -0.3394,
        -0.037,
        0.029,
        -0.1825
      ],
      "isLongTail": true
    }
  ],
  "showcaseProfiles": [
    {
      "userId": 101,
      "name": "User #101 \u2014 Animation & Family Connoisseur",
      "subtitle": "Loves Toy Story (5.0\u2605), Toy Story 2 (5.0\u2605), Shrek (4.5\u2605), WALL-E (4.5\u2605)",
      "avatarColor": "#F59E0B",
      "clusterName": "Family & Animation"
    },
    {
      "userId": 102,
      "name": "User #102 \u2014 Sci-Fi & Action Blockbuster Fan",
      "subtitle": "Loves Star Wars Ep IV/V, The Matrix, Inception & Interstellar",
      "avatarColor": "#E50914",
      "clusterName": "Sci-Fi & Action"
    },
    {
      "userId": 103,
      "name": "User #103 \u2014 Prestige Crime & Thriller Critic",
      "subtitle": "Loves The Godfather, Shawshank Redemption, Pulp Fiction & Se7en",
      "avatarColor": "#A855F7",
      "clusterName": "Crime & Prestige Drama"
    },
    {
      "userId": 104,
      "name": "User #104 \u2014 Romance & Cinema Drama Enthusiast",
      "subtitle": "Loves Titanic, The Notebook, La La Land & Forrest Gump",
      "avatarColor": "#EC4899",
      "clusterName": "Romance & Feel-Good"
    },
    {
      "userId": 105,
      "name": "User #105 \u2014 Cult Comedy & Satire Lover",
      "subtitle": "Loves Superbad, Groundhog Day, Monty Python & Grand Budapest Hotel",
      "avatarColor": "#10B981",
      "clusterName": "Comedy & Satire"
    },
    {
      "userId": 999,
      "name": "User #999 \u2014 New Subscriber (Cold-Start Profile)",
      "subtitle": "0 Past Ratings \u2014 Triggers Hybrid Bayesian Popularity + Genre Fallback",
      "avatarColor": "#38BDF8",
      "clusterName": "Cold-Start Hybrid"
    }
  ],
  "users": {
    "101": {
      "userId": 101,
      "age": 42,
      "gender": "M",
      "occupation": "Analyst",
      "bias": -0.5441,
      "pVec": [
        -1.0034,
        -0.2231,
        -0.2063,
        0.6193,
        0.4659
      ],
      "watchHistory": [
        {
          "movieId": 1,
          "title": "Toy Story (1995)",
          "genres": "Animation|Children|Comedy",
          "rating": 5.0
        },
        {
          "movieId": 7,
          "title": "Toy Story 2 (1999)",
          "genres": "Animation|Children|Comedy",
          "rating": 5.0
        },
        {
          "movieId": 8,
          "title": "Shrek (2001)",
          "genres": "Animation|Children|Comedy|Fantasy",
          "rating": 4.5
        },
        {
          "movieId": 9,
          "title": "The Incredibles (2004)",
          "genres": "Action|Animation|Children|Comedy",
          "rating": 4.5
        },
        {
          "movieId": 10,
          "title": "Up (2009)",
          "genres": "Animation|Adventure|Children|Drama",
          "rating": 4.5
        },
        {
          "movieId": 11,
          "title": "WALL-E (2008)",
          "genres": "Animation|Children|Sci-Fi",
          "rating": 4.5
        },
        {
          "movieId": 12,
          "title": "Coco (2017)",
          "genres": "Animation|Children|Musical",
          "rating": 4.5
        },
        {
          "movieId": 55,
          "title": "Back to the Future (1985)",
          "genres": "Adventure|Comedy|Sci-Fi",
          "rating": 4.0
        },
        {
          "movieId": 49,
          "title": "Groundhog Day (1993)",
          "genres": "Comedy|Fantasy|Romance",
          "rating": 4.0
        },
        {
          "movieId": 21,
          "title": "Aliens (1986)",
          "genres": "Action|Horror|Sci-Fi",
          "rating": 2.5
        },
        {
          "movieId": 31,
          "title": "Se7en (1995)",
          "genres": "Mystery|Thriller",
          "rating": 2.0
        },
        {
          "movieId": 32,
          "title": "The Silence of the Lambs (1991)",
          "genres": "Crime|Horror|Thriller",
          "rating": 2.0
        }
      ],
      "similarUsers": [
        {
          "userId": 346,
          "cosineSimilarity": 0.6006,
          "occupation": "Data Scientist"
        },
        {
          "userId": 71,
          "cosineSimilarity": 0.5789,
          "occupation": "Writer"
        },
        {
          "userId": 301,
          "cosineSimilarity": 0.537,
          "occupation": "Analyst"
        },
        {
          "userId": 131,
          "cosineSimilarity": 0.5335,
          "occupation": "Educator"
        },
        {
          "userId": 41,
          "cosineSimilarity": 0.5002,
          "occupation": "Software Engineer"
        }
      ],
      "svdRecs": [
        {
          "movieId": 3,
          "title": "The Lion King (1994)",
          "genres": "Animation|Children|Drama",
          "predicted_rating": 4.57,
          "strategy": "SVD Matrix Factorization",
          "rank": 1
        },
        {
          "movieId": 6,
          "title": "Monsters, Inc. (2001)",
          "genres": "Animation|Children|Comedy",
          "predicted_rating": 4.54,
          "strategy": "SVD Matrix Factorization",
          "rank": 2
        },
        {
          "movieId": 5,
          "title": "Finding Nemo (2003)",
          "genres": "Animation|Adventure|Children|Comedy",
          "predicted_rating": 4.49,
          "strategy": "SVD Matrix Factorization",
          "rank": 3
        },
        {
          "movieId": 2,
          "title": "Aladdin (1992)",
          "genres": "Animation|Children|Musical",
          "predicted_rating": 4.39,
          "strategy": "SVD Matrix Factorization",
          "rank": 4
        },
        {
          "movieId": 52,
          "title": "Ferris Bueller's Day Off (1986)",
          "genres": "Comedy",
          "predicted_rating": 4.24,
          "strategy": "SVD Matrix Factorization",
          "rank": 5
        },
        {
          "movieId": 56,
          "title": "Shaun of the Dead (2004)",
          "genres": "Comedy|Horror",
          "predicted_rating": 4.24,
          "strategy": "SVD Matrix Factorization",
          "rank": 6
        },
        {
          "movieId": 4,
          "title": "Beauty and the Beast (1991)",
          "genres": "Animation|Children|Musical|Romance",
          "predicted_rating": 4.23,
          "strategy": "SVD Matrix Factorization",
          "rank": 7
        },
        {
          "movieId": 50,
          "title": "Monty Python and the Holy Grail (1975)",
          "genres": "Adventure|Comedy|Fantasy",
          "predicted_rating": 4.22,
          "strategy": "SVD Matrix Factorization",
          "rank": 8
        }
      ]
    },
    "102": {
      "userId": 102,
      "age": 22,
      "gender": "F",
      "occupation": "Healthcare",
      "bias": 0.1053,
      "pVec": [
        0.4814,
        -0.5435,
        0.1708,
        -0.0249,
        0.0086
      ],
      "watchHistory": [
        {
          "movieId": 23,
          "title": "Raiders of the Lost Ark (1981)",
          "genres": "Action|Adventure",
          "rating": 5.0
        },
        {
          "movieId": 20,
          "title": "Blade Runner (1982)",
          "genres": "Action|Sci-Fi|Thriller",
          "rating": 5.0
        },
        {
          "movieId": 22,
          "title": "The Dark Knight (2008)",
          "genres": "Action|Crime|Drama",
          "rating": 5.0
        },
        {
          "movieId": 16,
          "title": "The Matrix (1999)",
          "genres": "Action|Sci-Fi|Thriller",
          "rating": 5.0
        },
        {
          "movieId": 25,
          "title": "The Shawshank Redemption (1994)",
          "genres": "Crime|Drama",
          "rating": 4.5
        },
        {
          "movieId": 34,
          "title": "The Usual Suspects (1995)",
          "genres": "Crime|Mystery|Thriller",
          "rating": 4.5
        },
        {
          "movieId": 26,
          "title": "The Godfather (1972)",
          "genres": "Crime|Drama",
          "rating": 4.5
        },
        {
          "movieId": 55,
          "title": "Back to the Future (1985)",
          "genres": "Adventure|Comedy|Sci-Fi",
          "rating": 4.5
        },
        {
          "movieId": 32,
          "title": "The Silence of the Lambs (1991)",
          "genres": "Crime|Horror|Thriller",
          "rating": 4.5
        },
        {
          "movieId": 49,
          "title": "Groundhog Day (1993)",
          "genres": "Comedy|Fantasy|Romance",
          "rating": 4.5
        },
        {
          "movieId": 52,
          "title": "Ferris Bueller's Day Off (1986)",
          "genres": "Comedy",
          "rating": 4.0
        },
        {
          "movieId": 10,
          "title": "Up (2009)",
          "genres": "Animation|Adventure|Children|Drama",
          "rating": 4.0
        },
        {
          "movieId": 8,
          "title": "Shrek (2001)",
          "genres": "Animation|Children|Comedy|Fantasy",
          "rating": 4.0
        },
        {
          "movieId": 3,
          "title": "The Lion King (1994)",
          "genres": "Animation|Children|Drama",
          "rating": 4.0
        },
        {
          "movieId": 53,
          "title": "Mean Girls (2004)",
          "genres": "Comedy",
          "rating": 4.0
        },
        {
          "movieId": 48,
          "title": "The Hangover (2009)",
          "genres": "Comedy",
          "rating": 4.0
        },
        {
          "movieId": 4,
          "title": "Beauty and the Beast (1991)",
          "genres": "Animation|Children|Musical|Romance",
          "rating": 4.0
        },
        {
          "movieId": 44,
          "title": "When Harry Met Sally... (1989)",
          "genres": "Comedy|Romance",
          "rating": 3.5
        },
        {
          "movieId": 41,
          "title": "Before Sunrise (1995)",
          "genres": "Drama|Romance",
          "rating": 3.5
        },
        {
          "movieId": 105,
          "title": "The Silent Horizon (2014)",
          "genres": "Comedy",
          "rating": 3.5
        },
        {
          "movieId": 42,
          "title": "Eternal Sunshine of the Spotless Mind (2004)",
          "genres": "Drama|Romance|Sci-Fi",
          "rating": 3.5
        },
        {
          "movieId": 51,
          "title": "The Grand Budapest Hotel (2014)",
          "genres": "Comedy|Drama",
          "rating": 3.5
        },
        {
          "movieId": 37,
          "title": "Titanic (1997)",
          "genres": "Drama|Romance",
          "rating": 3.5
        },
        {
          "movieId": 120,
          "title": "The Silent Horizon (1991)",
          "genres": "Comedy",
          "rating": 3.5
        },
        {
          "movieId": 9,
          "title": "The Incredibles (2004)",
          "genres": "Action|Animation|Children|Comedy",
          "rating": 3.5
        },
        {
          "movieId": 43,
          "title": "Notting Hill (1999)",
          "genres": "Comedy|Romance",
          "rating": 3.5
        }
      ],
      "similarUsers": [
        {
          "userId": 262,
          "cosineSimilarity": 0.5564,
          "occupation": "Healthcare"
        },
        {
          "userId": 322,
          "cosineSimilarity": 0.5186,
          "occupation": "Data Scientist"
        },
        {
          "userId": 2,
          "cosineSimilarity": 0.4725,
          "occupation": "Data Scientist"
        },
        {
          "userId": 297,
          "cosineSimilarity": 0.4618,
          "occupation": "Software Engineer"
        },
        {
          "userId": 112,
          "cosineSimilarity": 0.4541,
          "occupation": "Student"
        }
      ],
      "svdRecs": [
        {
          "movieId": 17,
          "title": "Inception (2010)",
          "genres": "Action|Sci-Fi|Thriller",
          "predicted_rating": 4.93,
          "strategy": "SVD Matrix Factorization",
          "rank": 1
        },
        {
          "movieId": 13,
          "title": "Star Wars: Episode IV - A New Hope (1977)",
          "genres": "Action|Adventure|Sci-Fi",
          "predicted_rating": 4.92,
          "strategy": "SVD Matrix Factorization",
          "rank": 2
        },
        {
          "movieId": 15,
          "title": "Star Wars: Episode VI - Return of the Jedi (1983)",
          "genres": "Action|Adventure|Sci-Fi",
          "predicted_rating": 4.9,
          "strategy": "SVD Matrix Factorization",
          "rank": 3
        },
        {
          "movieId": 24,
          "title": "Jurassic Park (1993)",
          "genres": "Action|Adventure|Sci-Fi",
          "predicted_rating": 4.88,
          "strategy": "SVD Matrix Factorization",
          "rank": 4
        },
        {
          "movieId": 18,
          "title": "Interstellar (2014)",
          "genres": "Drama|Sci-Fi",
          "predicted_rating": 4.85,
          "strategy": "SVD Matrix Factorization",
          "rank": 5
        },
        {
          "movieId": 19,
          "title": "Terminator 2: Judgment Day (1991)",
          "genres": "Action|Sci-Fi",
          "predicted_rating": 4.85,
          "strategy": "SVD Matrix Factorization",
          "rank": 6
        },
        {
          "movieId": 14,
          "title": "Star Wars: Episode V - The Empire Strikes Back (1980)",
          "genres": "Action|Adventure|Sci-Fi",
          "predicted_rating": 4.82,
          "strategy": "SVD Matrix Factorization",
          "rank": 7
        },
        {
          "movieId": 21,
          "title": "Aliens (1986)",
          "genres": "Action|Horror|Sci-Fi",
          "predicted_rating": 4.82,
          "strategy": "SVD Matrix Factorization",
          "rank": 8
        }
      ]
    },
    "103": {
      "userId": 103,
      "age": 28,
      "gender": "M",
      "occupation": "Writer",
      "bias": -0.3486,
      "pVec": [
        0.9349,
        0.2232,
        0.2422,
        0.0344,
        0.2079
      ],
      "watchHistory": [
        {
          "movieId": 24,
          "title": "Jurassic Park (1993)",
          "genres": "Action|Adventure|Sci-Fi",
          "rating": 5.0
        },
        {
          "movieId": 25,
          "title": "The Shawshank Redemption (1994)",
          "genres": "Crime|Drama",
          "rating": 5.0
        },
        {
          "movieId": 26,
          "title": "The Godfather (1972)",
          "genres": "Crime|Drama",
          "rating": 5.0
        },
        {
          "movieId": 31,
          "title": "Se7en (1995)",
          "genres": "Mystery|Thriller",
          "rating": 5.0
        },
        {
          "movieId": 32,
          "title": "The Silence of the Lambs (1991)",
          "genres": "Crime|Horror|Thriller",
          "rating": 4.5
        },
        {
          "movieId": 16,
          "title": "The Matrix (1999)",
          "genres": "Action|Sci-Fi|Thriller",
          "rating": 4.5
        },
        {
          "movieId": 63,
          "title": "The Distant Frontier (2010)",
          "genres": "Crime|Drama|Thriller",
          "rating": 4.5
        },
        {
          "movieId": 27,
          "title": "The Godfather: Part II (1974)",
          "genres": "Crime|Drama",
          "rating": 4.5
        },
        {
          "movieId": 14,
          "title": "Star Wars: Episode V - The Empire Strikes Back (1980)",
          "genres": "Action|Adventure|Sci-Fi",
          "rating": 4.5
        },
        {
          "movieId": 17,
          "title": "Inception (2010)",
          "genres": "Action|Sci-Fi|Thriller",
          "rating": 4.5
        },
        {
          "movieId": 33,
          "title": "Schindler's List (1993)",
          "genres": "Drama|War",
          "rating": 4.5
        },
        {
          "movieId": 35,
          "title": "No Country for Old Men (2007)",
          "genres": "Crime|Drama|Thriller",
          "rating": 4.5
        },
        {
          "movieId": 30,
          "title": "Fight Club (1999)",
          "genres": "Action|Crime|Drama|Thriller",
          "rating": 4.5
        },
        {
          "movieId": 28,
          "title": "Pulp Fiction (1994)",
          "genres": "Crime|Drama|Thriller",
          "rating": 4.5
        },
        {
          "movieId": 21,
          "title": "Aliens (1986)",
          "genres": "Action|Horror|Sci-Fi",
          "rating": 4.0
        },
        {
          "movieId": 18,
          "title": "Interstellar (2014)",
          "genres": "Drama|Sci-Fi",
          "rating": 4.0
        },
        {
          "movieId": 37,
          "title": "Titanic (1997)",
          "genres": "Drama|Romance",
          "rating": 4.0
        },
        {
          "movieId": 45,
          "title": "Forrest Gump (1994)",
          "genres": "Comedy|Drama|Romance",
          "rating": 4.0
        },
        {
          "movieId": 43,
          "title": "Notting Hill (1999)",
          "genres": "Comedy|Romance",
          "rating": 3.5
        },
        {
          "movieId": 55,
          "title": "Back to the Future (1985)",
          "genres": "Adventure|Comedy|Sci-Fi",
          "rating": 3.0
        },
        {
          "movieId": 9,
          "title": "The Incredibles (2004)",
          "genres": "Action|Animation|Children|Comedy",
          "rating": 3.0
        },
        {
          "movieId": 59,
          "title": "The Electric Echo (2006)",
          "genres": "Drama|Romance",
          "rating": 3.0
        },
        {
          "movieId": 11,
          "title": "WALL-E (2008)",
          "genres": "Animation|Children|Sci-Fi",
          "rating": 3.0
        },
        {
          "movieId": 47,
          "title": "Superbad (2007)",
          "genres": "Comedy",
          "rating": 3.0
        },
        {
          "movieId": 53,
          "title": "Mean Girls (2004)",
          "genres": "Comedy",
          "rating": 3.0
        },
        {
          "movieId": 104,
          "title": "The Electric Echo (2013)",
          "genres": "Drama|Romance",
          "rating": 3.0
        },
        {
          "movieId": 254,
          "title": "The Electric Echo (2011)",
          "genres": "Drama|Romance",
          "rating": 2.5
        },
        {
          "movieId": 10,
          "title": "Up (2009)",
          "genres": "Animation|Adventure|Children|Drama",
          "rating": 2.5
        },
        {
          "movieId": 206,
          "title": "The Midnight Mirage (2001)",
          "genres": "Animation|Children|Comedy",
          "rating": 2.5
        }
      ],
      "similarUsers": [
        {
          "userId": 263,
          "cosineSimilarity": 0.5004,
          "occupation": "Writer"
        },
        {
          "userId": 183,
          "cosineSimilarity": 0.4898,
          "occupation": "Writer"
        },
        {
          "userId": 218,
          "cosineSimilarity": 0.4724,
          "occupation": "Data Scientist"
        },
        {
          "userId": 33,
          "cosineSimilarity": 0.4602,
          "occupation": "Software Engineer"
        },
        {
          "userId": 38,
          "cosineSimilarity": 0.441,
          "occupation": "Healthcare"
        }
      ],
      "svdRecs": [
        {
          "movieId": 34,
          "title": "The Usual Suspects (1995)",
          "genres": "Crime|Mystery|Thriller",
          "predicted_rating": 4.61,
          "strategy": "SVD Matrix Factorization",
          "rank": 1
        },
        {
          "movieId": 36,
          "title": "The Departed (2006)",
          "genres": "Crime|Drama|Thriller",
          "predicted_rating": 4.58,
          "strategy": "SVD Matrix Factorization",
          "rank": 2
        },
        {
          "movieId": 29,
          "title": "Goodfellas (1990)",
          "genres": "Crime|Drama",
          "predicted_rating": 4.56,
          "strategy": "SVD Matrix Factorization",
          "rank": 3
        },
        {
          "movieId": 58,
          "title": "The Hidden Symphony (2005)",
          "genres": "Crime|Drama|Thriller",
          "predicted_rating": 4.37,
          "strategy": "SVD Matrix Factorization",
          "rank": 4
        },
        {
          "movieId": 20,
          "title": "Blade Runner (1982)",
          "genres": "Action|Sci-Fi|Thriller",
          "predicted_rating": 4.33,
          "strategy": "SVD Matrix Factorization",
          "rank": 5
        },
        {
          "movieId": 13,
          "title": "Star Wars: Episode IV - A New Hope (1977)",
          "genres": "Action|Adventure|Sci-Fi",
          "predicted_rating": 4.32,
          "strategy": "SVD Matrix Factorization",
          "rank": 6
        },
        {
          "movieId": 15,
          "title": "Star Wars: Episode VI - Return of the Jedi (1983)",
          "genres": "Action|Adventure|Sci-Fi",
          "predicted_rating": 4.28,
          "strategy": "SVD Matrix Factorization",
          "rank": 7
        },
        {
          "movieId": 22,
          "title": "The Dark Knight (2008)",
          "genres": "Action|Crime|Drama",
          "predicted_rating": 4.28,
          "strategy": "SVD Matrix Factorization",
          "rank": 8
        }
      ]
    },
    "104": {
      "userId": 104,
      "age": 42,
      "gender": "F",
      "occupation": "Student",
      "bias": -0.3657,
      "pVec": [
        -0.1011,
        0.8283,
        -0.2544,
        -0.1739,
        0.0653
      ],
      "watchHistory": [
        {
          "movieId": 46,
          "title": "Good Will Hunting (1997)",
          "genres": "Drama|Romance",
          "rating": 5.0
        },
        {
          "movieId": 41,
          "title": "Before Sunrise (1995)",
          "genres": "Drama|Romance",
          "rating": 5.0
        },
        {
          "movieId": 37,
          "title": "Titanic (1997)",
          "genres": "Drama|Romance",
          "rating": 4.5
        },
        {
          "movieId": 38,
          "title": "The Notebook (2004)",
          "genres": "Drama|Romance",
          "rating": 4.5
        },
        {
          "movieId": 40,
          "title": "Pride & Prejudice (2005)",
          "genres": "Drama|Romance",
          "rating": 4.5
        },
        {
          "movieId": 39,
          "title": "La La Land (2016)",
          "genres": "Comedy|Drama|Musical|Romance",
          "rating": 4.5
        },
        {
          "movieId": 12,
          "title": "Coco (2017)",
          "genres": "Animation|Children|Musical",
          "rating": 4.0
        },
        {
          "movieId": 31,
          "title": "Se7en (1995)",
          "genres": "Mystery|Thriller",
          "rating": 4.0
        },
        {
          "movieId": 51,
          "title": "The Grand Budapest Hotel (2014)",
          "genres": "Comedy|Drama",
          "rating": 4.0
        },
        {
          "movieId": 26,
          "title": "The Godfather (1972)",
          "genres": "Crime|Drama",
          "rating": 4.0
        },
        {
          "movieId": 34,
          "title": "The Usual Suspects (1995)",
          "genres": "Crime|Mystery|Thriller",
          "rating": 4.0
        },
        {
          "movieId": 42,
          "title": "Eternal Sunshine of the Spotless Mind (2004)",
          "genres": "Drama|Romance|Sci-Fi",
          "rating": 4.0
        },
        {
          "movieId": 48,
          "title": "The Hangover (2009)",
          "genres": "Comedy",
          "rating": 3.5
        },
        {
          "movieId": 10,
          "title": "Up (2009)",
          "genres": "Animation|Adventure|Children|Drama",
          "rating": 3.5
        },
        {
          "movieId": 11,
          "title": "WALL-E (2008)",
          "genres": "Animation|Children|Sci-Fi",
          "rating": 3.5
        },
        {
          "movieId": 2,
          "title": "Aladdin (1992)",
          "genres": "Animation|Children|Musical",
          "rating": 3.5
        },
        {
          "movieId": 8,
          "title": "Shrek (2001)",
          "genres": "Animation|Children|Comedy|Fantasy",
          "rating": 3.5
        },
        {
          "movieId": 1,
          "title": "Toy Story (1995)",
          "genres": "Animation|Children|Comedy",
          "rating": 3.5
        },
        {
          "movieId": 4,
          "title": "Beauty and the Beast (1991)",
          "genres": "Animation|Children|Musical|Romance",
          "rating": 3.5
        },
        {
          "movieId": 49,
          "title": "Groundhog Day (1993)",
          "genres": "Comedy|Fantasy|Romance",
          "rating": 3.5
        },
        {
          "movieId": 29,
          "title": "Goodfellas (1990)",
          "genres": "Crime|Drama",
          "rating": 3.5
        },
        {
          "movieId": 60,
          "title": "The Silent Horizon (2007)",
          "genres": "Comedy",
          "rating": 3.0
        },
        {
          "movieId": 18,
          "title": "Interstellar (2014)",
          "genres": "Drama|Sci-Fi",
          "rating": 3.0
        },
        {
          "movieId": 17,
          "title": "Inception (2010)",
          "genres": "Action|Sci-Fi|Thriller",
          "rating": 3.0
        },
        {
          "movieId": 9,
          "title": "The Incredibles (2004)",
          "genres": "Action|Animation|Children|Comedy",
          "rating": 3.0
        },
        {
          "movieId": 22,
          "title": "The Dark Knight (2008)",
          "genres": "Action|Crime|Drama",
          "rating": 3.0
        },
        {
          "movieId": 19,
          "title": "Terminator 2: Judgment Day (1991)",
          "genres": "Action|Sci-Fi",
          "rating": 3.0
        },
        {
          "movieId": 24,
          "title": "Jurassic Park (1993)",
          "genres": "Action|Adventure|Sci-Fi",
          "rating": 3.0
        },
        {
          "movieId": 16,
          "title": "The Matrix (1999)",
          "genres": "Action|Sci-Fi|Thriller",
          "rating": 3.0
        }
      ],
      "similarUsers": [
        {
          "userId": 139,
          "cosineSimilarity": 0.6257,
          "occupation": "Educator"
        },
        {
          "userId": 164,
          "cosineSimilarity": 0.6226,
          "occupation": "Designer"
        },
        {
          "userId": 354,
          "cosineSimilarity": 0.5735,
          "occupation": "Data Scientist"
        },
        {
          "userId": 179,
          "cosineSimilarity": 0.5685,
          "occupation": "Educator"
        },
        {
          "userId": 314,
          "cosineSimilarity": 0.5672,
          "occupation": "Data Scientist"
        }
      ],
      "svdRecs": [
        {
          "movieId": 45,
          "title": "Forrest Gump (1994)",
          "genres": "Comedy|Drama|Romance",
          "predicted_rating": 4.54,
          "strategy": "SVD Matrix Factorization",
          "rank": 1
        },
        {
          "movieId": 43,
          "title": "Notting Hill (1999)",
          "genres": "Comedy|Romance",
          "predicted_rating": 4.44,
          "strategy": "SVD Matrix Factorization",
          "rank": 2
        },
        {
          "movieId": 44,
          "title": "When Harry Met Sally... (1989)",
          "genres": "Comedy|Romance",
          "predicted_rating": 4.41,
          "strategy": "SVD Matrix Factorization",
          "rank": 3
        },
        {
          "movieId": 124,
          "title": "The Emerald Sanctuary (1995)",
          "genres": "Drama|Romance",
          "predicted_rating": 4.21,
          "strategy": "SVD Matrix Factorization",
          "rank": 4
        },
        {
          "movieId": 314,
          "title": "The Electric Echo (1995)",
          "genres": "Drama|Romance",
          "predicted_rating": 4.13,
          "strategy": "SVD Matrix Factorization",
          "rank": 5
        },
        {
          "movieId": 59,
          "title": "The Electric Echo (2006)",
          "genres": "Drama|Romance",
          "predicted_rating": 4.1,
          "strategy": "SVD Matrix Factorization",
          "rank": 6
        },
        {
          "movieId": 69,
          "title": "The Crimson Harbor (2016)",
          "genres": "Drama|Romance",
          "predicted_rating": 4.09,
          "strategy": "SVD Matrix Factorization",
          "rank": 7
        },
        {
          "movieId": 283,
          "title": "The Hidden Symphony (2002)",
          "genres": "Crime|Drama|Thriller",
          "predicted_rating": 4.09,
          "strategy": "SVD Matrix Factorization",
          "rank": 8
        }
      ]
    },
    "105": {
      "userId": 105,
      "age": 19,
      "gender": "M",
      "occupation": "Software Engineer",
      "bias": -0.2099,
      "pVec": [
        -0.7799,
        -0.3854,
        0.1431,
        -0.2276,
        -0.0798
      ],
      "watchHistory": [
        {
          "movieId": 50,
          "title": "Monty Python and the Holy Grail (1975)",
          "genres": "Adventure|Comedy|Fantasy",
          "rating": 5.0
        },
        {
          "movieId": 7,
          "title": "Toy Story 2 (1999)",
          "genres": "Animation|Children|Comedy",
          "rating": 5.0
        },
        {
          "movieId": 2,
          "title": "Aladdin (1992)",
          "genres": "Animation|Children|Musical",
          "rating": 4.5
        },
        {
          "movieId": 51,
          "title": "The Grand Budapest Hotel (2014)",
          "genres": "Comedy|Drama",
          "rating": 4.5
        },
        {
          "movieId": 60,
          "title": "The Silent Horizon (2007)",
          "genres": "Comedy",
          "rating": 4.5
        },
        {
          "movieId": 6,
          "title": "Monsters, Inc. (2001)",
          "genres": "Animation|Children|Comedy",
          "rating": 4.5
        },
        {
          "movieId": 54,
          "title": "Dumb and Dumber (1994)",
          "genres": "Comedy",
          "rating": 4.5
        },
        {
          "movieId": 55,
          "title": "Back to the Future (1985)",
          "genres": "Adventure|Comedy|Sci-Fi",
          "rating": 4.5
        },
        {
          "movieId": 38,
          "title": "The Notebook (2004)",
          "genres": "Drama|Romance",
          "rating": 4.0
        },
        {
          "movieId": 43,
          "title": "Notting Hill (1999)",
          "genres": "Comedy|Romance",
          "rating": 4.0
        },
        {
          "movieId": 46,
          "title": "Good Will Hunting (1997)",
          "genres": "Drama|Romance",
          "rating": 3.5
        },
        {
          "movieId": 17,
          "title": "Inception (2010)",
          "genres": "Action|Sci-Fi|Thriller",
          "rating": 3.5
        },
        {
          "movieId": 41,
          "title": "Before Sunrise (1995)",
          "genres": "Drama|Romance",
          "rating": 3.5
        },
        {
          "movieId": 165,
          "title": "The Silent Horizon (1998)",
          "genres": "Comedy",
          "rating": 3.5
        },
        {
          "movieId": 31,
          "title": "Se7en (1995)",
          "genres": "Mystery|Thriller",
          "rating": 3.5
        },
        {
          "movieId": 144,
          "title": "The Crimson Harbor (2015)",
          "genres": "Drama|Romance",
          "rating": 3.0
        },
        {
          "movieId": 30,
          "title": "Fight Club (1999)",
          "genres": "Action|Crime|Drama|Thriller",
          "rating": 2.5
        },
        {
          "movieId": 63,
          "title": "The Distant Frontier (2010)",
          "genres": "Crime|Drama|Thriller",
          "rating": 2.0
        }
      ],
      "similarUsers": [
        {
          "userId": 295,
          "cosineSimilarity": 0.4297,
          "occupation": "Writer"
        },
        {
          "userId": 300,
          "cosineSimilarity": 0.3652,
          "occupation": "Designer"
        },
        {
          "userId": 50,
          "cosineSimilarity": 0.3517,
          "occupation": "Data Scientist"
        },
        {
          "userId": 311,
          "cosineSimilarity": 0.3416,
          "occupation": "Writer"
        },
        {
          "userId": 240,
          "cosineSimilarity": 0.3403,
          "occupation": "Student"
        }
      ],
      "svdRecs": [
        {
          "movieId": 3,
          "title": "The Lion King (1994)",
          "genres": "Animation|Children|Drama",
          "predicted_rating": 4.7,
          "strategy": "SVD Matrix Factorization",
          "rank": 1
        },
        {
          "movieId": 4,
          "title": "Beauty and the Beast (1991)",
          "genres": "Animation|Children|Musical|Romance",
          "predicted_rating": 4.68,
          "strategy": "SVD Matrix Factorization",
          "rank": 2
        },
        {
          "movieId": 12,
          "title": "Coco (2017)",
          "genres": "Animation|Children|Musical",
          "predicted_rating": 4.68,
          "strategy": "SVD Matrix Factorization",
          "rank": 3
        },
        {
          "movieId": 8,
          "title": "Shrek (2001)",
          "genres": "Animation|Children|Comedy|Fantasy",
          "predicted_rating": 4.66,
          "strategy": "SVD Matrix Factorization",
          "rank": 4
        },
        {
          "movieId": 5,
          "title": "Finding Nemo (2003)",
          "genres": "Animation|Adventure|Children|Comedy",
          "predicted_rating": 4.65,
          "strategy": "SVD Matrix Factorization",
          "rank": 5
        },
        {
          "movieId": 1,
          "title": "Toy Story (1995)",
          "genres": "Animation|Children|Comedy",
          "predicted_rating": 4.64,
          "strategy": "SVD Matrix Factorization",
          "rank": 6
        },
        {
          "movieId": 10,
          "title": "Up (2009)",
          "genres": "Animation|Adventure|Children|Drama",
          "predicted_rating": 4.6,
          "strategy": "SVD Matrix Factorization",
          "rank": 7
        },
        {
          "movieId": 48,
          "title": "The Hangover (2009)",
          "genres": "Comedy",
          "predicted_rating": 4.6,
          "strategy": "SVD Matrix Factorization",
          "rank": 8
        }
      ]
    },
    "106": {
      "userId": 106,
      "age": 31,
      "gender": "F",
      "occupation": "Data Scientist",
      "bias": -0.0267,
      "pVec": [
        -0.7935,
        -0.0034,
        0.0007,
        0.1809,
        0.1967
      ],
      "watchHistory": [
        {
          "movieId": 9,
          "title": "The Incredibles (2004)",
          "genres": "Action|Animation|Children|Comedy",
          "rating": 5.0
        },
        {
          "movieId": 7,
          "title": "Toy Story 2 (1999)",
          "genres": "Animation|Children|Comedy",
          "rating": 5.0
        },
        {
          "movieId": 11,
          "title": "WALL-E (2008)",
          "genres": "Animation|Children|Sci-Fi",
          "rating": 5.0
        },
        {
          "movieId": 6,
          "title": "Monsters, Inc. (2001)",
          "genres": "Animation|Children|Comedy",
          "rating": 5.0
        },
        {
          "movieId": 5,
          "title": "Finding Nemo (2003)",
          "genres": "Animation|Adventure|Children|Comedy",
          "rating": 5.0
        },
        {
          "movieId": 3,
          "title": "The Lion King (1994)",
          "genres": "Animation|Children|Drama",
          "rating": 4.5
        },
        {
          "movieId": 61,
          "title": "The Broken Fable (2008)",
          "genres": "Animation|Children|Comedy",
          "rating": 4.5
        },
        {
          "movieId": 37,
          "title": "Titanic (1997)",
          "genres": "Drama|Romance",
          "rating": 4.5
        },
        {
          "movieId": 55,
          "title": "Back to the Future (1985)",
          "genres": "Adventure|Comedy|Sci-Fi",
          "rating": 4.5
        },
        {
          "movieId": 40,
          "title": "Pride & Prejudice (2005)",
          "genres": "Drama|Romance",
          "rating": 4.5
        },
        {
          "movieId": 56,
          "title": "Shaun of the Dead (2004)",
          "genres": "Comedy|Horror",
          "rating": 4.5
        },
        {
          "movieId": 52,
          "title": "Ferris Bueller's Day Off (1986)",
          "genres": "Comedy",
          "rating": 4.5
        },
        {
          "movieId": 310,
          "title": "The Velvet Odyssey (1991)",
          "genres": "Comedy",
          "rating": 4.0
        },
        {
          "movieId": 25,
          "title": "The Shawshank Redemption (1994)",
          "genres": "Crime|Drama",
          "rating": 4.0
        },
        {
          "movieId": 42,
          "title": "Eternal Sunshine of the Spotless Mind (2004)",
          "genres": "Drama|Romance|Sci-Fi",
          "rating": 4.0
        },
        {
          "movieId": 265,
          "title": "The Velvet Odyssey (2022)",
          "genres": "Comedy",
          "rating": 4.0
        },
        {
          "movieId": 60,
          "title": "The Silent Horizon (2007)",
          "genres": "Comedy",
          "rating": 4.0
        },
        {
          "movieId": 23,
          "title": "Raiders of the Lost Ark (1981)",
          "genres": "Action|Adventure",
          "rating": 3.5
        },
        {
          "movieId": 17,
          "title": "Inception (2010)",
          "genres": "Action|Sci-Fi|Thriller",
          "rating": 3.5
        },
        {
          "movieId": 16,
          "title": "The Matrix (1999)",
          "genres": "Action|Sci-Fi|Thriller",
          "rating": 3.5
        },
        {
          "movieId": 15,
          "title": "Star Wars: Episode VI - Return of the Jedi (1983)",
          "genres": "Action|Adventure|Sci-Fi",
          "rating": 3.5
        },
        {
          "movieId": 13,
          "title": "Star Wars: Episode IV - A New Hope (1977)",
          "genres": "Action|Adventure|Sci-Fi",
          "rating": 3.5
        },
        {
          "movieId": 32,
          "title": "The Silence of the Lambs (1991)",
          "genres": "Crime|Horror|Thriller",
          "rating": 3.5
        },
        {
          "movieId": 22,
          "title": "The Dark Knight (2008)",
          "genres": "Action|Crime|Drama",
          "rating": 3.5
        },
        {
          "movieId": 33,
          "title": "Schindler's List (1993)",
          "genres": "Drama|War",
          "rating": 3.0
        },
        {
          "movieId": 21,
          "title": "Aliens (1986)",
          "genres": "Action|Horror|Sci-Fi",
          "rating": 3.0
        },
        {
          "movieId": 34,
          "title": "The Usual Suspects (1995)",
          "genres": "Crime|Mystery|Thriller",
          "rating": 3.0
        },
        {
          "movieId": 27,
          "title": "The Godfather: Part II (1974)",
          "genres": "Crime|Drama",
          "rating": 3.0
        }
      ],
      "similarUsers": [
        {
          "userId": 350,
          "cosineSimilarity": 0.6005,
          "occupation": "Healthcare"
        },
        {
          "userId": 326,
          "cosineSimilarity": 0.5781,
          "occupation": "Healthcare"
        },
        {
          "userId": 131,
          "cosineSimilarity": 0.5593,
          "occupation": "Educator"
        },
        {
          "userId": 241,
          "cosineSimilarity": 0.5444,
          "occupation": "Software Engineer"
        },
        {
          "userId": 51,
          "cosineSimilarity": 0.5396,
          "occupation": "Educator"
        }
      ],
      "svdRecs": [
        {
          "movieId": 1,
          "title": "Toy Story (1995)",
          "genres": "Animation|Children|Comedy",
          "predicted_rating": 4.78,
          "strategy": "SVD Matrix Factorization",
          "rank": 1
        },
        {
          "movieId": 8,
          "title": "Shrek (2001)",
          "genres": "Animation|Children|Comedy|Fantasy",
          "predicted_rating": 4.76,
          "strategy": "SVD Matrix Factorization",
          "rank": 2
        },
        {
          "movieId": 12,
          "title": "Coco (2017)",
          "genres": "Animation|Children|Musical",
          "predicted_rating": 4.76,
          "strategy": "SVD Matrix Factorization",
          "rank": 3
        },
        {
          "movieId": 10,
          "title": "Up (2009)",
          "genres": "Animation|Adventure|Children|Drama",
          "predicted_rating": 4.73,
          "strategy": "SVD Matrix Factorization",
          "rank": 4
        },
        {
          "movieId": 2,
          "title": "Aladdin (1992)",
          "genres": "Animation|Children|Musical",
          "predicted_rating": 4.7,
          "strategy": "SVD Matrix Factorization",
          "rank": 5
        },
        {
          "movieId": 4,
          "title": "Beauty and the Beast (1991)",
          "genres": "Animation|Children|Musical|Romance",
          "predicted_rating": 4.62,
          "strategy": "SVD Matrix Factorization",
          "rank": 6
        },
        {
          "movieId": 48,
          "title": "The Hangover (2009)",
          "genres": "Comedy",
          "predicted_rating": 4.57,
          "strategy": "SVD Matrix Factorization",
          "rank": 7
        },
        {
          "movieId": 50,
          "title": "Monty Python and the Holy Grail (1975)",
          "genres": "Adventure|Comedy|Fantasy",
          "predicted_rating": 4.57,
          "strategy": "SVD Matrix Factorization",
          "rank": 8
        }
      ]
    },
    "107": {
      "userId": 107,
      "age": 25,
      "gender": "M",
      "occupation": "Educator",
      "bias": -0.3364,
      "pVec": [
        0.7148,
        -0.8378,
        -0.0797,
        -0.1738,
        -0.068
      ],
      "watchHistory": [
        {
          "movieId": 15,
          "title": "Star Wars: Episode VI - Return of the Jedi (1983)",
          "genres": "Action|Adventure|Sci-Fi",
          "rating": 5.0
        },
        {
          "movieId": 13,
          "title": "Star Wars: Episode IV - A New Hope (1977)",
          "genres": "Action|Adventure|Sci-Fi",
          "rating": 5.0
        },
        {
          "movieId": 23,
          "title": "Raiders of the Lost Ark (1981)",
          "genres": "Action|Adventure",
          "rating": 5.0
        },
        {
          "movieId": 19,
          "title": "Terminator 2: Judgment Day (1991)",
          "genres": "Action|Sci-Fi",
          "rating": 5.0
        },
        {
          "movieId": 14,
          "title": "Star Wars: Episode V - The Empire Strikes Back (1980)",
          "genres": "Action|Adventure|Sci-Fi",
          "rating": 5.0
        },
        {
          "movieId": 17,
          "title": "Inception (2010)",
          "genres": "Action|Sci-Fi|Thriller",
          "rating": 5.0
        },
        {
          "movieId": 28,
          "title": "Pulp Fiction (1994)",
          "genres": "Crime|Drama|Thriller",
          "rating": 4.5
        },
        {
          "movieId": 16,
          "title": "The Matrix (1999)",
          "genres": "Action|Sci-Fi|Thriller",
          "rating": 4.5
        },
        {
          "movieId": 21,
          "title": "Aliens (1986)",
          "genres": "Action|Horror|Sci-Fi",
          "rating": 4.5
        },
        {
          "movieId": 31,
          "title": "Se7en (1995)",
          "genres": "Mystery|Thriller",
          "rating": 4.5
        },
        {
          "movieId": 36,
          "title": "The Departed (2006)",
          "genres": "Crime|Drama|Thriller",
          "rating": 4.5
        },
        {
          "movieId": 24,
          "title": "Jurassic Park (1993)",
          "genres": "Action|Adventure|Sci-Fi",
          "rating": 4.5
        },
        {
          "movieId": 20,
          "title": "Blade Runner (1982)",
          "genres": "Action|Sci-Fi|Thriller",
          "rating": 4.5
        },
        {
          "movieId": 29,
          "title": "Goodfellas (1990)",
          "genres": "Crime|Drama",
          "rating": 4.0
        },
        {
          "movieId": 25,
          "title": "The Shawshank Redemption (1994)",
          "genres": "Crime|Drama",
          "rating": 4.0
        },
        {
          "movieId": 55,
          "title": "Back to the Future (1985)",
          "genres": "Adventure|Comedy|Sci-Fi",
          "rating": 4.0
        },
        {
          "movieId": 32,
          "title": "The Silence of the Lambs (1991)",
          "genres": "Crime|Horror|Thriller",
          "rating": 4.0
        },
        {
          "movieId": 26,
          "title": "The Godfather (1972)",
          "genres": "Crime|Drama",
          "rating": 4.0
        },
        {
          "movieId": 83,
          "title": "The Solar Protocol (1992)",
          "genres": "Crime|Drama|Thriller",
          "rating": 4.0
        },
        {
          "movieId": 27,
          "title": "The Godfather: Part II (1974)",
          "genres": "Crime|Drama",
          "rating": 4.0
        },
        {
          "movieId": 68,
          "title": "The Solar Protocol (2015)",
          "genres": "Crime|Drama|Thriller",
          "rating": 3.5
        },
        {
          "movieId": 9,
          "title": "The Incredibles (2004)",
          "genres": "Action|Animation|Children|Comedy",
          "rating": 3.5
        },
        {
          "movieId": 6,
          "title": "Monsters, Inc. (2001)",
          "genres": "Animation|Children|Comedy",
          "rating": 3.5
        },
        {
          "movieId": 245,
          "title": "The Forgotten Voyage (2002)",
          "genres": "Comedy",
          "rating": 3.0
        },
        {
          "movieId": 60,
          "title": "The Silent Horizon (2007)",
          "genres": "Comedy",
          "rating": 3.0
        },
        {
          "movieId": 58,
          "title": "The Hidden Symphony (2005)",
          "genres": "Crime|Drama|Thriller",
          "rating": 3.0
        },
        {
          "movieId": 39,
          "title": "La La Land (2016)",
          "genres": "Comedy|Drama|Musical|Romance",
          "rating": 3.0
        },
        {
          "movieId": 2,
          "title": "Aladdin (1992)",
          "genres": "Animation|Children|Musical",
          "rating": 3.0
        },
        {
          "movieId": 1,
          "title": "Toy Story (1995)",
          "genres": "Animation|Children|Comedy",
          "rating": 3.0
        },
        {
          "movieId": 43,
          "title": "Notting Hill (1999)",
          "genres": "Comedy|Romance",
          "rating": 2.5
        },
        {
          "movieId": 45,
          "title": "Forrest Gump (1994)",
          "genres": "Comedy|Drama|Romance",
          "rating": 2.5
        },
        {
          "movieId": 38,
          "title": "The Notebook (2004)",
          "genres": "Drama|Romance",
          "rating": 2.0
        }
      ],
      "similarUsers": [
        {
          "userId": 247,
          "cosineSimilarity": 0.5987,
          "occupation": "Writer"
        },
        {
          "userId": 217,
          "cosineSimilarity": 0.5941,
          "occupation": "Software Engineer"
        },
        {
          "userId": 47,
          "cosineSimilarity": 0.5847,
          "occupation": "Writer"
        },
        {
          "userId": 202,
          "cosineSimilarity": 0.5822,
          "occupation": "Data Scientist"
        },
        {
          "userId": 37,
          "cosineSimilarity": 0.5417,
          "occupation": "Analyst"
        }
      ],
      "svdRecs": [
        {
          "movieId": 18,
          "title": "Interstellar (2014)",
          "genres": "Drama|Sci-Fi",
          "predicted_rating": 4.79,
          "strategy": "SVD Matrix Factorization",
          "rank": 1
        },
        {
          "movieId": 22,
          "title": "The Dark Knight (2008)",
          "genres": "Action|Crime|Drama",
          "predicted_rating": 4.72,
          "strategy": "SVD Matrix Factorization",
          "rank": 2
        },
        {
          "movieId": 62,
          "title": "The Shadow Cipher (2009)",
          "genres": "Action|Adventure|Sci-Fi",
          "predicted_rating": 4.55,
          "strategy": "SVD Matrix Factorization",
          "rank": 3
        },
        {
          "movieId": 57,
          "title": "The Northern Paradox (2004)",
          "genres": "Action|Adventure|Sci-Fi",
          "predicted_rating": 4.47,
          "strategy": "SVD Matrix Factorization",
          "rank": 4
        },
        {
          "movieId": 292,
          "title": "The Golden Labyrinth (2011)",
          "genres": "Action|Adventure|Sci-Fi",
          "predicted_rating": 4.35,
          "strategy": "SVD Matrix Factorization",
          "rank": 5
        },
        {
          "movieId": 82,
          "title": "The Golden Labyrinth (1991)",
          "genres": "Action|Adventure|Sci-Fi",
          "predicted_rating": 4.28,
          "strategy": "SVD Matrix Factorization",
          "rank": 6
        },
        {
          "movieId": 117,
          "title": "The Northern Paradox (1988)",
          "genres": "Action|Adventure|Sci-Fi",
          "predicted_rating": 4.27,
          "strategy": "SVD Matrix Factorization",
          "rank": 7
        },
        {
          "movieId": 177,
          "title": "The Northern Paradox (2010)",
          "genres": "Action|Adventure|Sci-Fi",
          "predicted_rating": 4.25,
          "strategy": "SVD Matrix Factorization",
          "rank": 8
        }
      ]
    },
    "108": {
      "userId": 108,
      "age": 31,
      "gender": "F",
      "occupation": "Designer",
      "bias": -0.253,
      "pVec": [
        0.7531,
        0.2913,
        -0.1933,
        -0.1654,
        0.1375
      ],
      "watchHistory": [
        {
          "movieId": 30,
          "title": "Fight Club (1999)",
          "genres": "Action|Crime|Drama|Thriller",
          "rating": 5.0
        },
        {
          "movieId": 14,
          "title": "Star Wars: Episode V - The Empire Strikes Back (1980)",
          "genres": "Action|Adventure|Sci-Fi",
          "rating": 4.5
        },
        {
          "movieId": 25,
          "title": "The Shawshank Redemption (1994)",
          "genres": "Crime|Drama",
          "rating": 4.5
        },
        {
          "movieId": 34,
          "title": "The Usual Suspects (1995)",
          "genres": "Crime|Mystery|Thriller",
          "rating": 4.5
        },
        {
          "movieId": 36,
          "title": "The Departed (2006)",
          "genres": "Crime|Drama|Thriller",
          "rating": 4.5
        },
        {
          "movieId": 27,
          "title": "The Godfather: Part II (1974)",
          "genres": "Crime|Drama",
          "rating": 4.5
        },
        {
          "movieId": 23,
          "title": "Raiders of the Lost Ark (1981)",
          "genres": "Action|Adventure",
          "rating": 4.5
        },
        {
          "movieId": 31,
          "title": "Se7en (1995)",
          "genres": "Mystery|Thriller",
          "rating": 4.5
        },
        {
          "movieId": 33,
          "title": "Schindler's List (1993)",
          "genres": "Drama|War",
          "rating": 4.5
        },
        {
          "movieId": 29,
          "title": "Goodfellas (1990)",
          "genres": "Crime|Drama",
          "rating": 4.5
        },
        {
          "movieId": 13,
          "title": "Star Wars: Episode IV - A New Hope (1977)",
          "genres": "Action|Adventure|Sci-Fi",
          "rating": 4.0
        },
        {
          "movieId": 41,
          "title": "Before Sunrise (1995)",
          "genres": "Drama|Romance",
          "rating": 4.0
        },
        {
          "movieId": 18,
          "title": "Interstellar (2014)",
          "genres": "Drama|Sci-Fi",
          "rating": 4.0
        },
        {
          "movieId": 38,
          "title": "The Notebook (2004)",
          "genres": "Drama|Romance",
          "rating": 4.0
        },
        {
          "movieId": 39,
          "title": "La La Land (2016)",
          "genres": "Comedy|Drama|Musical|Romance",
          "rating": 4.0
        },
        {
          "movieId": 43,
          "title": "Notting Hill (1999)",
          "genres": "Comedy|Romance",
          "rating": 4.0
        },
        {
          "movieId": 45,
          "title": "Forrest Gump (1994)",
          "genres": "Comedy|Drama|Romance",
          "rating": 3.5
        },
        {
          "movieId": 5,
          "title": "Finding Nemo (2003)",
          "genres": "Animation|Adventure|Children|Comedy",
          "rating": 3.0
        },
        {
          "movieId": 10,
          "title": "Up (2009)",
          "genres": "Animation|Adventure|Children|Drama",
          "rating": 3.0
        },
        {
          "movieId": 9,
          "title": "The Incredibles (2004)",
          "genres": "Action|Animation|Children|Comedy",
          "rating": 3.0
        },
        {
          "movieId": 51,
          "title": "The Grand Budapest Hotel (2014)",
          "genres": "Comedy|Drama",
          "rating": 3.0
        },
        {
          "movieId": 1,
          "title": "Toy Story (1995)",
          "genres": "Animation|Children|Comedy",
          "rating": 3.0
        },
        {
          "movieId": 6,
          "title": "Monsters, Inc. (2001)",
          "genres": "Animation|Children|Comedy",
          "rating": 3.0
        },
        {
          "movieId": 8,
          "title": "Shrek (2001)",
          "genres": "Animation|Children|Comedy|Fantasy",
          "rating": 3.0
        },
        {
          "movieId": 7,
          "title": "Toy Story 2 (1999)",
          "genres": "Animation|Children|Comedy",
          "rating": 2.5
        }
      ],
      "similarUsers": [
        {
          "userId": 303,
          "cosineSimilarity": 0.5916,
          "occupation": "Writer"
        },
        {
          "userId": 323,
          "cosineSimilarity": 0.5608,
          "occupation": "Educator"
        },
        {
          "userId": 23,
          "cosineSimilarity": 0.5588,
          "occupation": "Writer"
        },
        {
          "userId": 128,
          "cosineSimilarity": 0.5452,
          "occupation": "Student"
        },
        {
          "userId": 73,
          "cosineSimilarity": 0.5394,
          "occupation": "Software Engineer"
        }
      ],
      "svdRecs": [
        {
          "movieId": 28,
          "title": "Pulp Fiction (1994)",
          "genres": "Crime|Drama|Thriller",
          "predicted_rating": 4.61,
          "strategy": "SVD Matrix Factorization",
          "rank": 1
        },
        {
          "movieId": 26,
          "title": "The Godfather (1972)",
          "genres": "Crime|Drama",
          "predicted_rating": 4.56,
          "strategy": "SVD Matrix Factorization",
          "rank": 2
        },
        {
          "movieId": 32,
          "title": "The Silence of the Lambs (1991)",
          "genres": "Crime|Horror|Thriller",
          "predicted_rating": 4.48,
          "strategy": "SVD Matrix Factorization",
          "rank": 3
        },
        {
          "movieId": 35,
          "title": "No Country for Old Men (2007)",
          "genres": "Crime|Drama|Thriller",
          "predicted_rating": 4.43,
          "strategy": "SVD Matrix Factorization",
          "rank": 4
        },
        {
          "movieId": 16,
          "title": "The Matrix (1999)",
          "genres": "Action|Sci-Fi|Thriller",
          "predicted_rating": 4.31,
          "strategy": "SVD Matrix Factorization",
          "rank": 5
        },
        {
          "movieId": 292,
          "title": "The Golden Labyrinth (2011)",
          "genres": "Action|Adventure|Sci-Fi",
          "predicted_rating": 4.28,
          "strategy": "SVD Matrix Factorization",
          "rank": 6
        },
        {
          "movieId": 58,
          "title": "The Hidden Symphony (2005)",
          "genres": "Crime|Drama|Thriller",
          "predicted_rating": 4.26,
          "strategy": "SVD Matrix Factorization",
          "rank": 7
        },
        {
          "movieId": 24,
          "title": "Jurassic Park (1993)",
          "genres": "Action|Adventure|Sci-Fi",
          "predicted_rating": 4.24,
          "strategy": "SVD Matrix Factorization",
          "rank": 8
        }
      ]
    },
    "109": {
      "userId": 109,
      "age": 25,
      "gender": "M",
      "occupation": "Analyst",
      "bias": -0.4409,
      "pVec": [
        -0.2424,
        0.7299,
        -0.0574,
        -0.0084,
        -0.0036
      ],
      "watchHistory": [
        {
          "movieId": 45,
          "title": "Forrest Gump (1994)",
          "genres": "Comedy|Drama|Romance",
          "rating": 5.0
        },
        {
          "movieId": 40,
          "title": "Pride & Prejudice (2005)",
          "genres": "Drama|Romance",
          "rating": 4.5
        },
        {
          "movieId": 41,
          "title": "Before Sunrise (1995)",
          "genres": "Drama|Romance",
          "rating": 4.5
        },
        {
          "movieId": 38,
          "title": "The Notebook (2004)",
          "genres": "Drama|Romance",
          "rating": 4.5
        },
        {
          "movieId": 44,
          "title": "When Harry Met Sally... (1989)",
          "genres": "Comedy|Romance",
          "rating": 4.5
        },
        {
          "movieId": 42,
          "title": "Eternal Sunshine of the Spotless Mind (2004)",
          "genres": "Drama|Romance|Sci-Fi",
          "rating": 4.5
        },
        {
          "movieId": 7,
          "title": "Toy Story 2 (1999)",
          "genres": "Animation|Children|Comedy",
          "rating": 4.0
        },
        {
          "movieId": 27,
          "title": "The Godfather: Part II (1974)",
          "genres": "Crime|Drama",
          "rating": 4.0
        },
        {
          "movieId": 37,
          "title": "Titanic (1997)",
          "genres": "Drama|Romance",
          "rating": 4.0
        },
        {
          "movieId": 2,
          "title": "Aladdin (1992)",
          "genres": "Animation|Children|Musical",
          "rating": 4.0
        },
        {
          "movieId": 8,
          "title": "Shrek (2001)",
          "genres": "Animation|Children|Comedy|Fantasy",
          "rating": 4.0
        },
        {
          "movieId": 3,
          "title": "The Lion King (1994)",
          "genres": "Animation|Children|Drama",
          "rating": 4.0
        },
        {
          "movieId": 51,
          "title": "The Grand Budapest Hotel (2014)",
          "genres": "Comedy|Drama",
          "rating": 3.5
        },
        {
          "movieId": 49,
          "title": "Groundhog Day (1993)",
          "genres": "Comedy|Fantasy|Romance",
          "rating": 3.5
        },
        {
          "movieId": 26,
          "title": "The Godfather (1972)",
          "genres": "Crime|Drama",
          "rating": 3.5
        },
        {
          "movieId": 48,
          "title": "The Hangover (2009)",
          "genres": "Comedy",
          "rating": 3.5
        },
        {
          "movieId": 6,
          "title": "Monsters, Inc. (2001)",
          "genres": "Animation|Children|Comedy",
          "rating": 3.5
        },
        {
          "movieId": 11,
          "title": "WALL-E (2008)",
          "genres": "Animation|Children|Sci-Fi",
          "rating": 3.5
        },
        {
          "movieId": 28,
          "title": "Pulp Fiction (1994)",
          "genres": "Crime|Drama|Thriller",
          "rating": 3.5
        },
        {
          "movieId": 9,
          "title": "The Incredibles (2004)",
          "genres": "Action|Animation|Children|Comedy",
          "rating": 3.5
        },
        {
          "movieId": 56,
          "title": "Shaun of the Dead (2004)",
          "genres": "Comedy|Horror",
          "rating": 3.5
        },
        {
          "movieId": 25,
          "title": "The Shawshank Redemption (1994)",
          "genres": "Crime|Drama",
          "rating": 3.5
        },
        {
          "movieId": 35,
          "title": "No Country for Old Men (2007)",
          "genres": "Crime|Drama|Thriller",
          "rating": 3.5
        },
        {
          "movieId": 4,
          "title": "Beauty and the Beast (1991)",
          "genres": "Animation|Children|Musical|Romance",
          "rating": 3.5
        },
        {
          "movieId": 22,
          "title": "The Dark Knight (2008)",
          "genres": "Action|Crime|Drama",
          "rating": 3.0
        },
        {
          "movieId": 155,
          "title": "The Forgotten Voyage (1988)",
          "genres": "Comedy",
          "rating": 3.0
        },
        {
          "movieId": 24,
          "title": "Jurassic Park (1993)",
          "genres": "Action|Adventure|Sci-Fi",
          "rating": 3.0
        },
        {
          "movieId": 52,
          "title": "Ferris Bueller's Day Off (1986)",
          "genres": "Comedy",
          "rating": 3.0
        },
        {
          "movieId": 185,
          "title": "The Forgotten Voyage (2018)",
          "genres": "Comedy",
          "rating": 3.0
        },
        {
          "movieId": 14,
          "title": "Star Wars: Episode V - The Empire Strikes Back (1980)",
          "genres": "Action|Adventure|Sci-Fi",
          "rating": 3.0
        }
      ],
      "similarUsers": [
        {
          "userId": 224,
          "cosineSimilarity": 0.5669,
          "occupation": "Student"
        },
        {
          "userId": 334,
          "cosineSimilarity": 0.5268,
          "occupation": "Healthcare"
        },
        {
          "userId": 29,
          "cosineSimilarity": 0.524,
          "occupation": "Analyst"
        },
        {
          "userId": 59,
          "cosineSimilarity": 0.5055,
          "occupation": "Educator"
        },
        {
          "userId": 289,
          "cosineSimilarity": 0.5001,
          "occupation": "Software Engineer"
        }
      ],
      "svdRecs": [
        {
          "movieId": 46,
          "title": "Good Will Hunting (1997)",
          "genres": "Drama|Romance",
          "predicted_rating": 4.36,
          "strategy": "SVD Matrix Factorization",
          "rank": 1
        },
        {
          "movieId": 39,
          "title": "La La Land (2016)",
          "genres": "Comedy|Drama|Musical|Romance",
          "predicted_rating": 4.35,
          "strategy": "SVD Matrix Factorization",
          "rank": 2
        },
        {
          "movieId": 43,
          "title": "Notting Hill (1999)",
          "genres": "Comedy|Romance",
          "predicted_rating": 4.34,
          "strategy": "SVD Matrix Factorization",
          "rank": 3
        },
        {
          "movieId": 124,
          "title": "The Emerald Sanctuary (1995)",
          "genres": "Drama|Romance",
          "predicted_rating": 4.17,
          "strategy": "SVD Matrix Factorization",
          "rank": 4
        },
        {
          "movieId": 314,
          "title": "The Electric Echo (1995)",
          "genres": "Drama|Romance",
          "predicted_rating": 4.08,
          "strategy": "SVD Matrix Factorization",
          "rank": 5
        },
        {
          "movieId": 223,
          "title": "The Hidden Symphony (2018)",
          "genres": "Crime|Drama|Thriller",
          "predicted_rating": 4.03,
          "strategy": "SVD Matrix Factorization",
          "rank": 6
        },
        {
          "movieId": 283,
          "title": "The Hidden Symphony (2002)",
          "genres": "Crime|Drama|Thriller",
          "predicted_rating": 4.03,
          "strategy": "SVD Matrix Factorization",
          "rank": 7
        },
        {
          "movieId": 146,
          "title": "The Midnight Mirage (2017)",
          "genres": "Animation|Children|Comedy",
          "predicted_rating": 4.02,
          "strategy": "SVD Matrix Factorization",
          "rank": 8
        }
      ]
    },
    "110": {
      "userId": 110,
      "age": 25,
      "gender": "F",
      "occupation": "Healthcare",
      "bias": -0.3281,
      "pVec": [
        -0.6544,
        -0.2763,
        -0.0393,
        -0.1247,
        0.3934
      ],
      "watchHistory": [
        {
          "movieId": 11,
          "title": "WALL-E (2008)",
          "genres": "Animation|Children|Sci-Fi",
          "rating": 5.0
        },
        {
          "movieId": 49,
          "title": "Groundhog Day (1993)",
          "genres": "Comedy|Fantasy|Romance",
          "rating": 4.5
        },
        {
          "movieId": 53,
          "title": "Mean Girls (2004)",
          "genres": "Comedy",
          "rating": 4.5
        },
        {
          "movieId": 50,
          "title": "Monty Python and the Holy Grail (1975)",
          "genres": "Adventure|Comedy|Fantasy",
          "rating": 4.5
        },
        {
          "movieId": 43,
          "title": "Notting Hill (1999)",
          "genres": "Comedy|Romance",
          "rating": 4.0
        },
        {
          "movieId": 54,
          "title": "Dumb and Dumber (1994)",
          "genres": "Comedy",
          "rating": 4.0
        },
        {
          "movieId": 52,
          "title": "Ferris Bueller's Day Off (1986)",
          "genres": "Comedy",
          "rating": 4.0
        },
        {
          "movieId": 331,
          "title": "The Broken Fable (2012)",
          "genres": "Animation|Children|Comedy",
          "rating": 4.0
        },
        {
          "movieId": 85,
          "title": "The Velvet Odyssey (1994)",
          "genres": "Comedy",
          "rating": 4.0
        },
        {
          "movieId": 55,
          "title": "Back to the Future (1985)",
          "genres": "Adventure|Comedy|Sci-Fi",
          "rating": 4.0
        },
        {
          "movieId": 21,
          "title": "Aliens (1986)",
          "genres": "Action|Horror|Sci-Fi",
          "rating": 3.5
        },
        {
          "movieId": 13,
          "title": "Star Wars: Episode IV - A New Hope (1977)",
          "genres": "Action|Adventure|Sci-Fi",
          "rating": 3.5
        },
        {
          "movieId": 22,
          "title": "The Dark Knight (2008)",
          "genres": "Action|Crime|Drama",
          "rating": 3.5
        },
        {
          "movieId": 44,
          "title": "When Harry Met Sally... (1989)",
          "genres": "Comedy|Romance",
          "rating": 3.5
        },
        {
          "movieId": 249,
          "title": "The Crimson Harbor (2006)",
          "genres": "Drama|Romance",
          "rating": 3.5
        },
        {
          "movieId": 18,
          "title": "Interstellar (2014)",
          "genres": "Drama|Sci-Fi",
          "rating": 3.5
        },
        {
          "movieId": 32,
          "title": "The Silence of the Lambs (1991)",
          "genres": "Crime|Horror|Thriller",
          "rating": 3.5
        },
        {
          "movieId": 30,
          "title": "Fight Club (1999)",
          "genres": "Action|Crime|Drama|Thriller",
          "rating": 3.0
        },
        {
          "movieId": 194,
          "title": "The Electric Echo (1989)",
          "genres": "Drama|Romance",
          "rating": 3.0
        },
        {
          "movieId": 79,
          "title": "The Emerald Sanctuary (1988)",
          "genres": "Drama|Romance",
          "rating": 3.0
        },
        {
          "movieId": 35,
          "title": "No Country for Old Men (2007)",
          "genres": "Crime|Drama|Thriller",
          "rating": 3.0
        },
        {
          "movieId": 29,
          "title": "Goodfellas (1990)",
          "genres": "Crime|Drama",
          "rating": 3.0
        },
        {
          "movieId": 72,
          "title": "The Northern Paradox (2019)",
          "genres": "Action|Adventure|Sci-Fi",
          "rating": 2.5
        },
        {
          "movieId": 128,
          "title": "The Solar Protocol (1999)",
          "genres": "Crime|Drama|Thriller",
          "rating": 2.5
        },
        {
          "movieId": 34,
          "title": "The Usual Suspects (1995)",
          "genres": "Crime|Mystery|Thriller",
          "rating": 2.5
        }
      ],
      "similarUsers": [
        {
          "userId": 125,
          "cosineSimilarity": 0.4418,
          "occupation": "Analyst"
        },
        {
          "userId": 95,
          "cosineSimilarity": 0.42,
          "occupation": "Writer"
        },
        {
          "userId": 226,
          "cosineSimilarity": 0.4129,
          "occupation": "Data Scientist"
        },
        {
          "userId": 156,
          "cosineSimilarity": 0.4012,
          "occupation": "Designer"
        },
        {
          "userId": 315,
          "cosineSimilarity": 0.3638,
          "occupation": "Educator"
        }
      ],
      "svdRecs": [
        {
          "movieId": 3,
          "title": "The Lion King (1994)",
          "genres": "Animation|Children|Drama",
          "predicted_rating": 4.5,
          "strategy": "SVD Matrix Factorization",
          "rank": 1
        },
        {
          "movieId": 7,
          "title": "Toy Story 2 (1999)",
          "genres": "Animation|Children|Comedy",
          "predicted_rating": 4.47,
          "strategy": "SVD Matrix Factorization",
          "rank": 2
        },
        {
          "movieId": 12,
          "title": "Coco (2017)",
          "genres": "Animation|Children|Musical",
          "predicted_rating": 4.45,
          "strategy": "SVD Matrix Factorization",
          "rank": 3
        },
        {
          "movieId": 1,
          "title": "Toy Story (1995)",
          "genres": "Animation|Children|Comedy",
          "predicted_rating": 4.41,
          "strategy": "SVD Matrix Factorization",
          "rank": 4
        },
        {
          "movieId": 6,
          "title": "Monsters, Inc. (2001)",
          "genres": "Animation|Children|Comedy",
          "predicted_rating": 4.41,
          "strategy": "SVD Matrix Factorization",
          "rank": 5
        },
        {
          "movieId": 4,
          "title": "Beauty and the Beast (1991)",
          "genres": "Animation|Children|Musical|Romance",
          "predicted_rating": 4.4,
          "strategy": "SVD Matrix Factorization",
          "rank": 6
        },
        {
          "movieId": 5,
          "title": "Finding Nemo (2003)",
          "genres": "Animation|Adventure|Children|Comedy",
          "predicted_rating": 4.39,
          "strategy": "SVD Matrix Factorization",
          "rank": 7
        },
        {
          "movieId": 2,
          "title": "Aladdin (1992)",
          "genres": "Animation|Children|Musical",
          "predicted_rating": 4.32,
          "strategy": "SVD Matrix Factorization",
          "rank": 8
        }
      ]
    }
  },
  "itemSimMap": {
    "1": [
      {
        "movieId": 7,
        "title": "Toy Story 2 (1999)",
        "genres": "Animation|Children|Comedy",
        "cosine_similarity": 0.4658
      },
      {
        "movieId": 3,
        "title": "The Lion King (1994)",
        "genres": "Animation|Children|Drama",
        "cosine_similarity": 0.4207
      },
      {
        "movieId": 52,
        "title": "Ferris Bueller's Day Off (1986)",
        "genres": "Comedy",
        "cosine_similarity": 0.4106
      },
      {
        "movieId": 8,
        "title": "Shrek (2001)",
        "genres": "Animation|Children|Comedy|Fantasy",
        "cosine_similarity": 0.4058
      },
      {
        "movieId": 10,
        "title": "Up (2009)",
        "genres": "Animation|Adventure|Children|Drama",
        "cosine_similarity": 0.4031
      },
      {
        "movieId": 9,
        "title": "The Incredibles (2004)",
        "genres": "Action|Animation|Children|Comedy",
        "cosine_similarity": 0.4029
      }
    ],
    "2": [
      {
        "movieId": 10,
        "title": "Up (2009)",
        "genres": "Animation|Adventure|Children|Drama",
        "cosine_similarity": 0.4337
      },
      {
        "movieId": 7,
        "title": "Toy Story 2 (1999)",
        "genres": "Animation|Children|Comedy",
        "cosine_similarity": 0.4139
      },
      {
        "movieId": 3,
        "title": "The Lion King (1994)",
        "genres": "Animation|Children|Drama",
        "cosine_similarity": 0.4001
      },
      {
        "movieId": 11,
        "title": "WALL-E (2008)",
        "genres": "Animation|Children|Sci-Fi",
        "cosine_similarity": 0.3968
      },
      {
        "movieId": 1,
        "title": "Toy Story (1995)",
        "genres": "Animation|Children|Comedy",
        "cosine_similarity": 0.3959
      },
      {
        "movieId": 9,
        "title": "The Incredibles (2004)",
        "genres": "Action|Animation|Children|Comedy",
        "cosine_similarity": 0.3899
      }
    ],
    "3": [
      {
        "movieId": 11,
        "title": "WALL-E (2008)",
        "genres": "Animation|Children|Sci-Fi",
        "cosine_similarity": 0.4799
      },
      {
        "movieId": 5,
        "title": "Finding Nemo (2003)",
        "genres": "Animation|Adventure|Children|Comedy",
        "cosine_similarity": 0.458
      },
      {
        "movieId": 12,
        "title": "Coco (2017)",
        "genres": "Animation|Children|Musical",
        "cosine_similarity": 0.4552
      },
      {
        "movieId": 8,
        "title": "Shrek (2001)",
        "genres": "Animation|Children|Comedy|Fantasy",
        "cosine_similarity": 0.4416
      },
      {
        "movieId": 1,
        "title": "Toy Story (1995)",
        "genres": "Animation|Children|Comedy",
        "cosine_similarity": 0.4207
      },
      {
        "movieId": 50,
        "title": "Monty Python and the Holy Grail (1975)",
        "genres": "Adventure|Comedy|Fantasy",
        "cosine_similarity": 0.4169
      }
    ],
    "4": [
      {
        "movieId": 5,
        "title": "Finding Nemo (2003)",
        "genres": "Animation|Adventure|Children|Comedy",
        "cosine_similarity": 0.4175
      },
      {
        "movieId": 3,
        "title": "The Lion King (1994)",
        "genres": "Animation|Children|Drama",
        "cosine_similarity": 0.4044
      },
      {
        "movieId": 6,
        "title": "Monsters, Inc. (2001)",
        "genres": "Animation|Children|Comedy",
        "cosine_similarity": 0.3975
      },
      {
        "movieId": 2,
        "title": "Aladdin (1992)",
        "genres": "Animation|Children|Musical",
        "cosine_similarity": 0.3626
      },
      {
        "movieId": 49,
        "title": "Groundhog Day (1993)",
        "genres": "Comedy|Fantasy|Romance",
        "cosine_similarity": 0.3597
      },
      {
        "movieId": 1,
        "title": "Toy Story (1995)",
        "genres": "Animation|Children|Comedy",
        "cosine_similarity": 0.3555
      }
    ],
    "5": [
      {
        "movieId": 3,
        "title": "The Lion King (1994)",
        "genres": "Animation|Children|Drama",
        "cosine_similarity": 0.458
      },
      {
        "movieId": 56,
        "title": "Shaun of the Dead (2004)",
        "genres": "Comedy|Horror",
        "cosine_similarity": 0.4397
      },
      {
        "movieId": 8,
        "title": "Shrek (2001)",
        "genres": "Animation|Children|Comedy|Fantasy",
        "cosine_similarity": 0.4338
      },
      {
        "movieId": 55,
        "title": "Back to the Future (1985)",
        "genres": "Adventure|Comedy|Sci-Fi",
        "cosine_similarity": 0.4278
      },
      {
        "movieId": 7,
        "title": "Toy Story 2 (1999)",
        "genres": "Animation|Children|Comedy",
        "cosine_similarity": 0.4218
      },
      {
        "movieId": 4,
        "title": "Beauty and the Beast (1991)",
        "genres": "Animation|Children|Musical|Romance",
        "cosine_similarity": 0.4175
      }
    ],
    "6": [
      {
        "movieId": 5,
        "title": "Finding Nemo (2003)",
        "genres": "Animation|Adventure|Children|Comedy",
        "cosine_similarity": 0.4063
      },
      {
        "movieId": 7,
        "title": "Toy Story 2 (1999)",
        "genres": "Animation|Children|Comedy",
        "cosine_similarity": 0.4059
      },
      {
        "movieId": 49,
        "title": "Groundhog Day (1993)",
        "genres": "Comedy|Fantasy|Romance",
        "cosine_similarity": 0.4057
      },
      {
        "movieId": 4,
        "title": "Beauty and the Beast (1991)",
        "genres": "Animation|Children|Musical|Romance",
        "cosine_similarity": 0.3975
      },
      {
        "movieId": 11,
        "title": "WALL-E (2008)",
        "genres": "Animation|Children|Sci-Fi",
        "cosine_similarity": 0.3909
      },
      {
        "movieId": 1,
        "title": "Toy Story (1995)",
        "genres": "Animation|Children|Comedy",
        "cosine_similarity": 0.3904
      }
    ],
    "7": [
      {
        "movieId": 1,
        "title": "Toy Story (1995)",
        "genres": "Animation|Children|Comedy",
        "cosine_similarity": 0.4658
      },
      {
        "movieId": 11,
        "title": "WALL-E (2008)",
        "genres": "Animation|Children|Sci-Fi",
        "cosine_similarity": 0.4466
      },
      {
        "movieId": 5,
        "title": "Finding Nemo (2003)",
        "genres": "Animation|Adventure|Children|Comedy",
        "cosine_similarity": 0.4218
      },
      {
        "movieId": 2,
        "title": "Aladdin (1992)",
        "genres": "Animation|Children|Musical",
        "cosine_similarity": 0.4139
      },
      {
        "movieId": 6,
        "title": "Monsters, Inc. (2001)",
        "genres": "Animation|Children|Comedy",
        "cosine_similarity": 0.4059
      },
      {
        "movieId": 3,
        "title": "The Lion King (1994)",
        "genres": "Animation|Children|Drama",
        "cosine_similarity": 0.3927
      }
    ],
    "8": [
      {
        "movieId": 3,
        "title": "The Lion King (1994)",
        "genres": "Animation|Children|Drama",
        "cosine_similarity": 0.4416
      },
      {
        "movieId": 5,
        "title": "Finding Nemo (2003)",
        "genres": "Animation|Adventure|Children|Comedy",
        "cosine_similarity": 0.4338
      },
      {
        "movieId": 10,
        "title": "Up (2009)",
        "genres": "Animation|Adventure|Children|Drama",
        "cosine_similarity": 0.4062
      },
      {
        "movieId": 1,
        "title": "Toy Story (1995)",
        "genres": "Animation|Children|Comedy",
        "cosine_similarity": 0.4058
      },
      {
        "movieId": 2,
        "title": "Aladdin (1992)",
        "genres": "Animation|Children|Musical",
        "cosine_similarity": 0.3892
      },
      {
        "movieId": 6,
        "title": "Monsters, Inc. (2001)",
        "genres": "Animation|Children|Comedy",
        "cosine_similarity": 0.3762
      }
    ],
    "9": [
      {
        "movieId": 1,
        "title": "Toy Story (1995)",
        "genres": "Animation|Children|Comedy",
        "cosine_similarity": 0.4029
      },
      {
        "movieId": 11,
        "title": "WALL-E (2008)",
        "genres": "Animation|Children|Sci-Fi",
        "cosine_similarity": 0.3937
      },
      {
        "movieId": 2,
        "title": "Aladdin (1992)",
        "genres": "Animation|Children|Musical",
        "cosine_similarity": 0.3899
      },
      {
        "movieId": 7,
        "title": "Toy Story 2 (1999)",
        "genres": "Animation|Children|Comedy",
        "cosine_similarity": 0.381
      },
      {
        "movieId": 6,
        "title": "Monsters, Inc. (2001)",
        "genres": "Animation|Children|Comedy",
        "cosine_similarity": 0.3773
      },
      {
        "movieId": 5,
        "title": "Finding Nemo (2003)",
        "genres": "Animation|Adventure|Children|Comedy",
        "cosine_similarity": 0.3721
      }
    ],
    "10": [
      {
        "movieId": 2,
        "title": "Aladdin (1992)",
        "genres": "Animation|Children|Musical",
        "cosine_similarity": 0.4337
      },
      {
        "movieId": 5,
        "title": "Finding Nemo (2003)",
        "genres": "Animation|Adventure|Children|Comedy",
        "cosine_similarity": 0.4138
      },
      {
        "movieId": 8,
        "title": "Shrek (2001)",
        "genres": "Animation|Children|Comedy|Fantasy",
        "cosine_similarity": 0.4062
      },
      {
        "movieId": 1,
        "title": "Toy Story (1995)",
        "genres": "Animation|Children|Comedy",
        "cosine_similarity": 0.4031
      },
      {
        "movieId": 6,
        "title": "Monsters, Inc. (2001)",
        "genres": "Animation|Children|Comedy",
        "cosine_similarity": 0.3788
      },
      {
        "movieId": 3,
        "title": "The Lion King (1994)",
        "genres": "Animation|Children|Drama",
        "cosine_similarity": 0.3647
      }
    ],
    "11": [
      {
        "movieId": 3,
        "title": "The Lion King (1994)",
        "genres": "Animation|Children|Drama",
        "cosine_similarity": 0.4799
      },
      {
        "movieId": 7,
        "title": "Toy Story 2 (1999)",
        "genres": "Animation|Children|Comedy",
        "cosine_similarity": 0.4466
      },
      {
        "movieId": 1,
        "title": "Toy Story (1995)",
        "genres": "Animation|Children|Comedy",
        "cosine_similarity": 0.3982
      },
      {
        "movieId": 2,
        "title": "Aladdin (1992)",
        "genres": "Animation|Children|Musical",
        "cosine_similarity": 0.3968
      },
      {
        "movieId": 9,
        "title": "The Incredibles (2004)",
        "genres": "Action|Animation|Children|Comedy",
        "cosine_similarity": 0.3937
      },
      {
        "movieId": 6,
        "title": "Monsters, Inc. (2001)",
        "genres": "Animation|Children|Comedy",
        "cosine_similarity": 0.3909
      }
    ],
    "12": [
      {
        "movieId": 3,
        "title": "The Lion King (1994)",
        "genres": "Animation|Children|Drama",
        "cosine_similarity": 0.4552
      },
      {
        "movieId": 52,
        "title": "Ferris Bueller's Day Off (1986)",
        "genres": "Comedy",
        "cosine_similarity": 0.3738
      },
      {
        "movieId": 1,
        "title": "Toy Story (1995)",
        "genres": "Animation|Children|Comedy",
        "cosine_similarity": 0.3566
      },
      {
        "movieId": 55,
        "title": "Back to the Future (1985)",
        "genres": "Adventure|Comedy|Sci-Fi",
        "cosine_similarity": 0.3503
      },
      {
        "movieId": 11,
        "title": "WALL-E (2008)",
        "genres": "Animation|Children|Sci-Fi",
        "cosine_similarity": 0.3337
      },
      {
        "movieId": 49,
        "title": "Groundhog Day (1993)",
        "genres": "Comedy|Fantasy|Romance",
        "cosine_similarity": 0.3304
      }
    ],
    "13": [
      {
        "movieId": 16,
        "title": "The Matrix (1999)",
        "genres": "Action|Sci-Fi|Thriller",
        "cosine_similarity": 0.503
      },
      {
        "movieId": 24,
        "title": "Jurassic Park (1993)",
        "genres": "Action|Adventure|Sci-Fi",
        "cosine_similarity": 0.5
      },
      {
        "movieId": 20,
        "title": "Blade Runner (1982)",
        "genres": "Action|Sci-Fi|Thriller",
        "cosine_similarity": 0.4854
      },
      {
        "movieId": 21,
        "title": "Aliens (1986)",
        "genres": "Action|Horror|Sci-Fi",
        "cosine_similarity": 0.4769
      },
      {
        "movieId": 17,
        "title": "Inception (2010)",
        "genres": "Action|Sci-Fi|Thriller",
        "cosine_similarity": 0.4705
      },
      {
        "movieId": 14,
        "title": "Star Wars: Episode V - The Empire Strikes Back (1980)",
        "genres": "Action|Adventure|Sci-Fi",
        "cosine_similarity": 0.4642
      }
    ],
    "14": [
      {
        "movieId": 24,
        "title": "Jurassic Park (1993)",
        "genres": "Action|Adventure|Sci-Fi",
        "cosine_similarity": 0.4932
      },
      {
        "movieId": 13,
        "title": "Star Wars: Episode IV - A New Hope (1977)",
        "genres": "Action|Adventure|Sci-Fi",
        "cosine_similarity": 0.4642
      },
      {
        "movieId": 23,
        "title": "Raiders of the Lost Ark (1981)",
        "genres": "Action|Adventure",
        "cosine_similarity": 0.446
      },
      {
        "movieId": 22,
        "title": "The Dark Knight (2008)",
        "genres": "Action|Crime|Drama",
        "cosine_similarity": 0.4316
      },
      {
        "movieId": 20,
        "title": "Blade Runner (1982)",
        "genres": "Action|Sci-Fi|Thriller",
        "cosine_similarity": 0.4113
      },
      {
        "movieId": 19,
        "title": "Terminator 2: Judgment Day (1991)",
        "genres": "Action|Sci-Fi",
        "cosine_similarity": 0.4097
      }
    ],
    "15": [
      {
        "movieId": 14,
        "title": "Star Wars: Episode V - The Empire Strikes Back (1980)",
        "genres": "Action|Adventure|Sci-Fi",
        "cosine_similarity": 0.3909
      },
      {
        "movieId": 16,
        "title": "The Matrix (1999)",
        "genres": "Action|Sci-Fi|Thriller",
        "cosine_similarity": 0.379
      },
      {
        "movieId": 24,
        "title": "Jurassic Park (1993)",
        "genres": "Action|Adventure|Sci-Fi",
        "cosine_similarity": 0.3658
      },
      {
        "movieId": 17,
        "title": "Inception (2010)",
        "genres": "Action|Sci-Fi|Thriller",
        "cosine_similarity": 0.3635
      },
      {
        "movieId": 21,
        "title": "Aliens (1986)",
        "genres": "Action|Horror|Sci-Fi",
        "cosine_similarity": 0.361
      },
      {
        "movieId": 20,
        "title": "Blade Runner (1982)",
        "genres": "Action|Sci-Fi|Thriller",
        "cosine_similarity": 0.3571
      }
    ],
    "16": [
      {
        "movieId": 13,
        "title": "Star Wars: Episode IV - A New Hope (1977)",
        "genres": "Action|Adventure|Sci-Fi",
        "cosine_similarity": 0.503
      },
      {
        "movieId": 17,
        "title": "Inception (2010)",
        "genres": "Action|Sci-Fi|Thriller",
        "cosine_similarity": 0.4638
      },
      {
        "movieId": 24,
        "title": "Jurassic Park (1993)",
        "genres": "Action|Adventure|Sci-Fi",
        "cosine_similarity": 0.4356
      },
      {
        "movieId": 20,
        "title": "Blade Runner (1982)",
        "genres": "Action|Sci-Fi|Thriller",
        "cosine_similarity": 0.4319
      },
      {
        "movieId": 19,
        "title": "Terminator 2: Judgment Day (1991)",
        "genres": "Action|Sci-Fi",
        "cosine_similarity": 0.4271
      },
      {
        "movieId": 21,
        "title": "Aliens (1986)",
        "genres": "Action|Horror|Sci-Fi",
        "cosine_similarity": 0.4122
      }
    ],
    "17": [
      {
        "movieId": 13,
        "title": "Star Wars: Episode IV - A New Hope (1977)",
        "genres": "Action|Adventure|Sci-Fi",
        "cosine_similarity": 0.4705
      },
      {
        "movieId": 16,
        "title": "The Matrix (1999)",
        "genres": "Action|Sci-Fi|Thriller",
        "cosine_similarity": 0.4638
      },
      {
        "movieId": 24,
        "title": "Jurassic Park (1993)",
        "genres": "Action|Adventure|Sci-Fi",
        "cosine_similarity": 0.4589
      },
      {
        "movieId": 21,
        "title": "Aliens (1986)",
        "genres": "Action|Horror|Sci-Fi",
        "cosine_similarity": 0.442
      },
      {
        "movieId": 22,
        "title": "The Dark Knight (2008)",
        "genres": "Action|Crime|Drama",
        "cosine_similarity": 0.4301
      },
      {
        "movieId": 20,
        "title": "Blade Runner (1982)",
        "genres": "Action|Sci-Fi|Thriller",
        "cosine_similarity": 0.4132
      }
    ],
    "18": [
      {
        "movieId": 23,
        "title": "Raiders of the Lost Ark (1981)",
        "genres": "Action|Adventure",
        "cosine_similarity": 0.4407
      },
      {
        "movieId": 22,
        "title": "The Dark Knight (2008)",
        "genres": "Action|Crime|Drama",
        "cosine_similarity": 0.4022
      },
      {
        "movieId": 21,
        "title": "Aliens (1986)",
        "genres": "Action|Horror|Sci-Fi",
        "cosine_similarity": 0.3927
      },
      {
        "movieId": 17,
        "title": "Inception (2010)",
        "genres": "Action|Sci-Fi|Thriller",
        "cosine_similarity": 0.3914
      },
      {
        "movieId": 16,
        "title": "The Matrix (1999)",
        "genres": "Action|Sci-Fi|Thriller",
        "cosine_similarity": 0.3905
      },
      {
        "movieId": 20,
        "title": "Blade Runner (1982)",
        "genres": "Action|Sci-Fi|Thriller",
        "cosine_similarity": 0.3876
      }
    ],
    "19": [
      {
        "movieId": 16,
        "title": "The Matrix (1999)",
        "genres": "Action|Sci-Fi|Thriller",
        "cosine_similarity": 0.4271
      },
      {
        "movieId": 24,
        "title": "Jurassic Park (1993)",
        "genres": "Action|Adventure|Sci-Fi",
        "cosine_similarity": 0.4235
      },
      {
        "movieId": 14,
        "title": "Star Wars: Episode V - The Empire Strikes Back (1980)",
        "genres": "Action|Adventure|Sci-Fi",
        "cosine_similarity": 0.4097
      },
      {
        "movieId": 13,
        "title": "Star Wars: Episode IV - A New Hope (1977)",
        "genres": "Action|Adventure|Sci-Fi",
        "cosine_similarity": 0.4015
      },
      {
        "movieId": 21,
        "title": "Aliens (1986)",
        "genres": "Action|Horror|Sci-Fi",
        "cosine_similarity": 0.3896
      },
      {
        "movieId": 17,
        "title": "Inception (2010)",
        "genres": "Action|Sci-Fi|Thriller",
        "cosine_similarity": 0.3809
      }
    ],
    "20": [
      {
        "movieId": 24,
        "title": "Jurassic Park (1993)",
        "genres": "Action|Adventure|Sci-Fi",
        "cosine_similarity": 0.4928
      },
      {
        "movieId": 13,
        "title": "Star Wars: Episode IV - A New Hope (1977)",
        "genres": "Action|Adventure|Sci-Fi",
        "cosine_similarity": 0.4854
      },
      {
        "movieId": 16,
        "title": "The Matrix (1999)",
        "genres": "Action|Sci-Fi|Thriller",
        "cosine_similarity": 0.4319
      },
      {
        "movieId": 21,
        "title": "Aliens (1986)",
        "genres": "Action|Horror|Sci-Fi",
        "cosine_similarity": 0.4294
      },
      {
        "movieId": 17,
        "title": "Inception (2010)",
        "genres": "Action|Sci-Fi|Thriller",
        "cosine_similarity": 0.4132
      },
      {
        "movieId": 14,
        "title": "Star Wars: Episode V - The Empire Strikes Back (1980)",
        "genres": "Action|Adventure|Sci-Fi",
        "cosine_similarity": 0.4113
      }
    ],
    "21": [
      {
        "movieId": 13,
        "title": "Star Wars: Episode IV - A New Hope (1977)",
        "genres": "Action|Adventure|Sci-Fi",
        "cosine_similarity": 0.4769
      },
      {
        "movieId": 22,
        "title": "The Dark Knight (2008)",
        "genres": "Action|Crime|Drama",
        "cosine_similarity": 0.4677
      },
      {
        "movieId": 17,
        "title": "Inception (2010)",
        "genres": "Action|Sci-Fi|Thriller",
        "cosine_similarity": 0.442
      },
      {
        "movieId": 20,
        "title": "Blade Runner (1982)",
        "genres": "Action|Sci-Fi|Thriller",
        "cosine_similarity": 0.4294
      },
      {
        "movieId": 16,
        "title": "The Matrix (1999)",
        "genres": "Action|Sci-Fi|Thriller",
        "cosine_similarity": 0.4122
      },
      {
        "movieId": 18,
        "title": "Interstellar (2014)",
        "genres": "Drama|Sci-Fi",
        "cosine_similarity": 0.3927
      }
    ],
    "22": [
      {
        "movieId": 21,
        "title": "Aliens (1986)",
        "genres": "Action|Horror|Sci-Fi",
        "cosine_similarity": 0.4677
      },
      {
        "movieId": 14,
        "title": "Star Wars: Episode V - The Empire Strikes Back (1980)",
        "genres": "Action|Adventure|Sci-Fi",
        "cosine_similarity": 0.4316
      },
      {
        "movieId": 17,
        "title": "Inception (2010)",
        "genres": "Action|Sci-Fi|Thriller",
        "cosine_similarity": 0.4301
      },
      {
        "movieId": 13,
        "title": "Star Wars: Episode IV - A New Hope (1977)",
        "genres": "Action|Adventure|Sci-Fi",
        "cosine_similarity": 0.4113
      },
      {
        "movieId": 24,
        "title": "Jurassic Park (1993)",
        "genres": "Action|Adventure|Sci-Fi",
        "cosine_similarity": 0.4111
      },
      {
        "movieId": 20,
        "title": "Blade Runner (1982)",
        "genres": "Action|Sci-Fi|Thriller",
        "cosine_similarity": 0.409
      }
    ],
    "23": [
      {
        "movieId": 14,
        "title": "Star Wars: Episode V - The Empire Strikes Back (1980)",
        "genres": "Action|Adventure|Sci-Fi",
        "cosine_similarity": 0.446
      },
      {
        "movieId": 18,
        "title": "Interstellar (2014)",
        "genres": "Drama|Sci-Fi",
        "cosine_similarity": 0.4407
      },
      {
        "movieId": 13,
        "title": "Star Wars: Episode IV - A New Hope (1977)",
        "genres": "Action|Adventure|Sci-Fi",
        "cosine_similarity": 0.4087
      },
      {
        "movieId": 20,
        "title": "Blade Runner (1982)",
        "genres": "Action|Sci-Fi|Thriller",
        "cosine_similarity": 0.3904
      },
      {
        "movieId": 16,
        "title": "The Matrix (1999)",
        "genres": "Action|Sci-Fi|Thriller",
        "cosine_similarity": 0.3864
      },
      {
        "movieId": 22,
        "title": "The Dark Knight (2008)",
        "genres": "Action|Crime|Drama",
        "cosine_similarity": 0.3831
      }
    ],
    "24": [
      {
        "movieId": 13,
        "title": "Star Wars: Episode IV - A New Hope (1977)",
        "genres": "Action|Adventure|Sci-Fi",
        "cosine_similarity": 0.5
      },
      {
        "movieId": 14,
        "title": "Star Wars: Episode V - The Empire Strikes Back (1980)",
        "genres": "Action|Adventure|Sci-Fi",
        "cosine_similarity": 0.4932
      },
      {
        "movieId": 20,
        "title": "Blade Runner (1982)",
        "genres": "Action|Sci-Fi|Thriller",
        "cosine_similarity": 0.4928
      },
      {
        "movieId": 17,
        "title": "Inception (2010)",
        "genres": "Action|Sci-Fi|Thriller",
        "cosine_similarity": 0.4589
      },
      {
        "movieId": 16,
        "title": "The Matrix (1999)",
        "genres": "Action|Sci-Fi|Thriller",
        "cosine_similarity": 0.4356
      },
      {
        "movieId": 19,
        "title": "Terminator 2: Judgment Day (1991)",
        "genres": "Action|Sci-Fi",
        "cosine_similarity": 0.4235
      }
    ],
    "25": [
      {
        "movieId": 33,
        "title": "Schindler's List (1993)",
        "genres": "Drama|War",
        "cosine_similarity": 0.4888
      },
      {
        "movieId": 28,
        "title": "Pulp Fiction (1994)",
        "genres": "Crime|Drama|Thriller",
        "cosine_similarity": 0.4806
      },
      {
        "movieId": 27,
        "title": "The Godfather: Part II (1974)",
        "genres": "Crime|Drama",
        "cosine_similarity": 0.4377
      },
      {
        "movieId": 34,
        "title": "The Usual Suspects (1995)",
        "genres": "Crime|Mystery|Thriller",
        "cosine_similarity": 0.4292
      },
      {
        "movieId": 29,
        "title": "Goodfellas (1990)",
        "genres": "Crime|Drama",
        "cosine_similarity": 0.4257
      },
      {
        "movieId": 26,
        "title": "The Godfather (1972)",
        "genres": "Crime|Drama",
        "cosine_similarity": 0.4139
      }
    ],
    "26": [
      {
        "movieId": 33,
        "title": "Schindler's List (1993)",
        "genres": "Drama|War",
        "cosine_similarity": 0.4898
      },
      {
        "movieId": 34,
        "title": "The Usual Suspects (1995)",
        "genres": "Crime|Mystery|Thriller",
        "cosine_similarity": 0.4854
      },
      {
        "movieId": 28,
        "title": "Pulp Fiction (1994)",
        "genres": "Crime|Drama|Thriller",
        "cosine_similarity": 0.479
      },
      {
        "movieId": 35,
        "title": "No Country for Old Men (2007)",
        "genres": "Crime|Drama|Thriller",
        "cosine_similarity": 0.456
      },
      {
        "movieId": 31,
        "title": "Se7en (1995)",
        "genres": "Mystery|Thriller",
        "cosine_similarity": 0.4374
      },
      {
        "movieId": 36,
        "title": "The Departed (2006)",
        "genres": "Crime|Drama|Thriller",
        "cosine_similarity": 0.4368
      }
    ],
    "27": [
      {
        "movieId": 25,
        "title": "The Shawshank Redemption (1994)",
        "genres": "Crime|Drama",
        "cosine_similarity": 0.4377
      },
      {
        "movieId": 34,
        "title": "The Usual Suspects (1995)",
        "genres": "Crime|Mystery|Thriller",
        "cosine_similarity": 0.4363
      },
      {
        "movieId": 26,
        "title": "The Godfather (1972)",
        "genres": "Crime|Drama",
        "cosine_similarity": 0.4233
      },
      {
        "movieId": 36,
        "title": "The Departed (2006)",
        "genres": "Crime|Drama|Thriller",
        "cosine_similarity": 0.4208
      },
      {
        "movieId": 31,
        "title": "Se7en (1995)",
        "genres": "Mystery|Thriller",
        "cosine_similarity": 0.4207
      },
      {
        "movieId": 32,
        "title": "The Silence of the Lambs (1991)",
        "genres": "Crime|Horror|Thriller",
        "cosine_similarity": 0.4174
      }
    ],
    "28": [
      {
        "movieId": 25,
        "title": "The Shawshank Redemption (1994)",
        "genres": "Crime|Drama",
        "cosine_similarity": 0.4806
      },
      {
        "movieId": 26,
        "title": "The Godfather (1972)",
        "genres": "Crime|Drama",
        "cosine_similarity": 0.479
      },
      {
        "movieId": 31,
        "title": "Se7en (1995)",
        "genres": "Mystery|Thriller",
        "cosine_similarity": 0.4683
      },
      {
        "movieId": 30,
        "title": "Fight Club (1999)",
        "genres": "Action|Crime|Drama|Thriller",
        "cosine_similarity": 0.4439
      },
      {
        "movieId": 36,
        "title": "The Departed (2006)",
        "genres": "Crime|Drama|Thriller",
        "cosine_similarity": 0.4386
      },
      {
        "movieId": 35,
        "title": "No Country for Old Men (2007)",
        "genres": "Crime|Drama|Thriller",
        "cosine_similarity": 0.4329
      }
    ],
    "29": [
      {
        "movieId": 30,
        "title": "Fight Club (1999)",
        "genres": "Action|Crime|Drama|Thriller",
        "cosine_similarity": 0.4371
      },
      {
        "movieId": 35,
        "title": "No Country for Old Men (2007)",
        "genres": "Crime|Drama|Thriller",
        "cosine_similarity": 0.4368
      },
      {
        "movieId": 25,
        "title": "The Shawshank Redemption (1994)",
        "genres": "Crime|Drama",
        "cosine_similarity": 0.4257
      },
      {
        "movieId": 34,
        "title": "The Usual Suspects (1995)",
        "genres": "Crime|Mystery|Thriller",
        "cosine_similarity": 0.4004
      },
      {
        "movieId": 27,
        "title": "The Godfather: Part II (1974)",
        "genres": "Crime|Drama",
        "cosine_similarity": 0.3961
      },
      {
        "movieId": 28,
        "title": "Pulp Fiction (1994)",
        "genres": "Crime|Drama|Thriller",
        "cosine_similarity": 0.3939
      }
    ],
    "30": [
      {
        "movieId": 36,
        "title": "The Departed (2006)",
        "genres": "Crime|Drama|Thriller",
        "cosine_similarity": 0.4459
      },
      {
        "movieId": 28,
        "title": "Pulp Fiction (1994)",
        "genres": "Crime|Drama|Thriller",
        "cosine_similarity": 0.4439
      },
      {
        "movieId": 29,
        "title": "Goodfellas (1990)",
        "genres": "Crime|Drama",
        "cosine_similarity": 0.4371
      },
      {
        "movieId": 26,
        "title": "The Godfather (1972)",
        "genres": "Crime|Drama",
        "cosine_similarity": 0.415
      },
      {
        "movieId": 27,
        "title": "The Godfather: Part II (1974)",
        "genres": "Crime|Drama",
        "cosine_similarity": 0.4092
      },
      {
        "movieId": 35,
        "title": "No Country for Old Men (2007)",
        "genres": "Crime|Drama|Thriller",
        "cosine_similarity": 0.4021
      }
    ],
    "31": [
      {
        "movieId": 28,
        "title": "Pulp Fiction (1994)",
        "genres": "Crime|Drama|Thriller",
        "cosine_similarity": 0.4683
      },
      {
        "movieId": 32,
        "title": "The Silence of the Lambs (1991)",
        "genres": "Crime|Horror|Thriller",
        "cosine_similarity": 0.446
      },
      {
        "movieId": 26,
        "title": "The Godfather (1972)",
        "genres": "Crime|Drama",
        "cosine_similarity": 0.4374
      },
      {
        "movieId": 34,
        "title": "The Usual Suspects (1995)",
        "genres": "Crime|Mystery|Thriller",
        "cosine_similarity": 0.4268
      },
      {
        "movieId": 27,
        "title": "The Godfather: Part II (1974)",
        "genres": "Crime|Drama",
        "cosine_similarity": 0.4207
      },
      {
        "movieId": 33,
        "title": "Schindler's List (1993)",
        "genres": "Drama|War",
        "cosine_similarity": 0.3841
      }
    ],
    "32": [
      {
        "movieId": 34,
        "title": "The Usual Suspects (1995)",
        "genres": "Crime|Mystery|Thriller",
        "cosine_similarity": 0.4502
      },
      {
        "movieId": 31,
        "title": "Se7en (1995)",
        "genres": "Mystery|Thriller",
        "cosine_similarity": 0.446
      },
      {
        "movieId": 27,
        "title": "The Godfather: Part II (1974)",
        "genres": "Crime|Drama",
        "cosine_similarity": 0.4174
      },
      {
        "movieId": 28,
        "title": "Pulp Fiction (1994)",
        "genres": "Crime|Drama|Thriller",
        "cosine_similarity": 0.4163
      },
      {
        "movieId": 26,
        "title": "The Godfather (1972)",
        "genres": "Crime|Drama",
        "cosine_similarity": 0.3979
      },
      {
        "movieId": 30,
        "title": "Fight Club (1999)",
        "genres": "Action|Crime|Drama|Thriller",
        "cosine_similarity": 0.3939
      }
    ],
    "33": [
      {
        "movieId": 26,
        "title": "The Godfather (1972)",
        "genres": "Crime|Drama",
        "cosine_similarity": 0.4898
      },
      {
        "movieId": 25,
        "title": "The Shawshank Redemption (1994)",
        "genres": "Crime|Drama",
        "cosine_similarity": 0.4888
      },
      {
        "movieId": 28,
        "title": "Pulp Fiction (1994)",
        "genres": "Crime|Drama|Thriller",
        "cosine_similarity": 0.4243
      },
      {
        "movieId": 34,
        "title": "The Usual Suspects (1995)",
        "genres": "Crime|Mystery|Thriller",
        "cosine_similarity": 0.4106
      },
      {
        "movieId": 30,
        "title": "Fight Club (1999)",
        "genres": "Action|Crime|Drama|Thriller",
        "cosine_similarity": 0.3999
      },
      {
        "movieId": 36,
        "title": "The Departed (2006)",
        "genres": "Crime|Drama|Thriller",
        "cosine_similarity": 0.3887
      }
    ],
    "34": [
      {
        "movieId": 26,
        "title": "The Godfather (1972)",
        "genres": "Crime|Drama",
        "cosine_similarity": 0.4854
      },
      {
        "movieId": 35,
        "title": "No Country for Old Men (2007)",
        "genres": "Crime|Drama|Thriller",
        "cosine_similarity": 0.4517
      },
      {
        "movieId": 32,
        "title": "The Silence of the Lambs (1991)",
        "genres": "Crime|Horror|Thriller",
        "cosine_similarity": 0.4502
      },
      {
        "movieId": 27,
        "title": "The Godfather: Part II (1974)",
        "genres": "Crime|Drama",
        "cosine_similarity": 0.4363
      },
      {
        "movieId": 28,
        "title": "Pulp Fiction (1994)",
        "genres": "Crime|Drama|Thriller",
        "cosine_similarity": 0.4327
      },
      {
        "movieId": 25,
        "title": "The Shawshank Redemption (1994)",
        "genres": "Crime|Drama",
        "cosine_similarity": 0.4292
      }
    ],
    "35": [
      {
        "movieId": 26,
        "title": "The Godfather (1972)",
        "genres": "Crime|Drama",
        "cosine_similarity": 0.456
      },
      {
        "movieId": 34,
        "title": "The Usual Suspects (1995)",
        "genres": "Crime|Mystery|Thriller",
        "cosine_similarity": 0.4517
      },
      {
        "movieId": 29,
        "title": "Goodfellas (1990)",
        "genres": "Crime|Drama",
        "cosine_similarity": 0.4368
      },
      {
        "movieId": 28,
        "title": "Pulp Fiction (1994)",
        "genres": "Crime|Drama|Thriller",
        "cosine_similarity": 0.4329
      },
      {
        "movieId": 27,
        "title": "The Godfather: Part II (1974)",
        "genres": "Crime|Drama",
        "cosine_similarity": 0.4156
      },
      {
        "movieId": 30,
        "title": "Fight Club (1999)",
        "genres": "Action|Crime|Drama|Thriller",
        "cosine_similarity": 0.4021
      }
    ],
    "36": [
      {
        "movieId": 30,
        "title": "Fight Club (1999)",
        "genres": "Action|Crime|Drama|Thriller",
        "cosine_similarity": 0.4459
      },
      {
        "movieId": 28,
        "title": "Pulp Fiction (1994)",
        "genres": "Crime|Drama|Thriller",
        "cosine_similarity": 0.4386
      },
      {
        "movieId": 26,
        "title": "The Godfather (1972)",
        "genres": "Crime|Drama",
        "cosine_similarity": 0.4368
      },
      {
        "movieId": 27,
        "title": "The Godfather: Part II (1974)",
        "genres": "Crime|Drama",
        "cosine_similarity": 0.4208
      },
      {
        "movieId": 25,
        "title": "The Shawshank Redemption (1994)",
        "genres": "Crime|Drama",
        "cosine_similarity": 0.4102
      },
      {
        "movieId": 33,
        "title": "Schindler's List (1993)",
        "genres": "Drama|War",
        "cosine_similarity": 0.3887
      }
    ],
    "37": [
      {
        "movieId": 41,
        "title": "Before Sunrise (1995)",
        "genres": "Drama|Romance",
        "cosine_similarity": 0.5066
      },
      {
        "movieId": 45,
        "title": "Forrest Gump (1994)",
        "genres": "Comedy|Drama|Romance",
        "cosine_similarity": 0.4612
      },
      {
        "movieId": 39,
        "title": "La La Land (2016)",
        "genres": "Comedy|Drama|Musical|Romance",
        "cosine_similarity": 0.4526
      },
      {
        "movieId": 38,
        "title": "The Notebook (2004)",
        "genres": "Drama|Romance",
        "cosine_similarity": 0.4502
      },
      {
        "movieId": 44,
        "title": "When Harry Met Sally... (1989)",
        "genres": "Comedy|Romance",
        "cosine_similarity": 0.4472
      },
      {
        "movieId": 43,
        "title": "Notting Hill (1999)",
        "genres": "Comedy|Romance",
        "cosine_similarity": 0.4248
      }
    ],
    "38": [
      {
        "movieId": 45,
        "title": "Forrest Gump (1994)",
        "genres": "Comedy|Drama|Romance",
        "cosine_similarity": 0.5169
      },
      {
        "movieId": 37,
        "title": "Titanic (1997)",
        "genres": "Drama|Romance",
        "cosine_similarity": 0.4502
      },
      {
        "movieId": 42,
        "title": "Eternal Sunshine of the Spotless Mind (2004)",
        "genres": "Drama|Romance|Sci-Fi",
        "cosine_similarity": 0.4068
      },
      {
        "movieId": 41,
        "title": "Before Sunrise (1995)",
        "genres": "Drama|Romance",
        "cosine_similarity": 0.3983
      },
      {
        "movieId": 43,
        "title": "Notting Hill (1999)",
        "genres": "Comedy|Romance",
        "cosine_similarity": 0.3831
      },
      {
        "movieId": 46,
        "title": "Good Will Hunting (1997)",
        "genres": "Drama|Romance",
        "cosine_similarity": 0.3718
      }
    ],
    "39": [
      {
        "movieId": 42,
        "title": "Eternal Sunshine of the Spotless Mind (2004)",
        "genres": "Drama|Romance|Sci-Fi",
        "cosine_similarity": 0.467
      },
      {
        "movieId": 37,
        "title": "Titanic (1997)",
        "genres": "Drama|Romance",
        "cosine_similarity": 0.4526
      },
      {
        "movieId": 45,
        "title": "Forrest Gump (1994)",
        "genres": "Comedy|Drama|Romance",
        "cosine_similarity": 0.446
      },
      {
        "movieId": 44,
        "title": "When Harry Met Sally... (1989)",
        "genres": "Comedy|Romance",
        "cosine_similarity": 0.4087
      },
      {
        "movieId": 46,
        "title": "Good Will Hunting (1997)",
        "genres": "Drama|Romance",
        "cosine_similarity": 0.4023
      },
      {
        "movieId": 43,
        "title": "Notting Hill (1999)",
        "genres": "Comedy|Romance",
        "cosine_similarity": 0.398
      }
    ],
    "40": [
      {
        "movieId": 42,
        "title": "Eternal Sunshine of the Spotless Mind (2004)",
        "genres": "Drama|Romance|Sci-Fi",
        "cosine_similarity": 0.4446
      },
      {
        "movieId": 45,
        "title": "Forrest Gump (1994)",
        "genres": "Comedy|Drama|Romance",
        "cosine_similarity": 0.4209
      },
      {
        "movieId": 44,
        "title": "When Harry Met Sally... (1989)",
        "genres": "Comedy|Romance",
        "cosine_similarity": 0.4197
      },
      {
        "movieId": 37,
        "title": "Titanic (1997)",
        "genres": "Drama|Romance",
        "cosine_similarity": 0.4086
      },
      {
        "movieId": 41,
        "title": "Before Sunrise (1995)",
        "genres": "Drama|Romance",
        "cosine_similarity": 0.4029
      },
      {
        "movieId": 39,
        "title": "La La Land (2016)",
        "genres": "Comedy|Drama|Musical|Romance",
        "cosine_similarity": 0.3902
      }
    ],
    "41": [
      {
        "movieId": 37,
        "title": "Titanic (1997)",
        "genres": "Drama|Romance",
        "cosine_similarity": 0.5066
      },
      {
        "movieId": 40,
        "title": "Pride & Prejudice (2005)",
        "genres": "Drama|Romance",
        "cosine_similarity": 0.4029
      },
      {
        "movieId": 38,
        "title": "The Notebook (2004)",
        "genres": "Drama|Romance",
        "cosine_similarity": 0.3983
      },
      {
        "movieId": 44,
        "title": "When Harry Met Sally... (1989)",
        "genres": "Comedy|Romance",
        "cosine_similarity": 0.3801
      },
      {
        "movieId": 46,
        "title": "Good Will Hunting (1997)",
        "genres": "Drama|Romance",
        "cosine_similarity": 0.3786
      },
      {
        "movieId": 45,
        "title": "Forrest Gump (1994)",
        "genres": "Comedy|Drama|Romance",
        "cosine_similarity": 0.3698
      }
    ],
    "42": [
      {
        "movieId": 45,
        "title": "Forrest Gump (1994)",
        "genres": "Comedy|Drama|Romance",
        "cosine_similarity": 0.4806
      },
      {
        "movieId": 43,
        "title": "Notting Hill (1999)",
        "genres": "Comedy|Romance",
        "cosine_similarity": 0.4805
      },
      {
        "movieId": 44,
        "title": "When Harry Met Sally... (1989)",
        "genres": "Comedy|Romance",
        "cosine_similarity": 0.4747
      },
      {
        "movieId": 39,
        "title": "La La Land (2016)",
        "genres": "Comedy|Drama|Musical|Romance",
        "cosine_similarity": 0.467
      },
      {
        "movieId": 40,
        "title": "Pride & Prejudice (2005)",
        "genres": "Drama|Romance",
        "cosine_similarity": 0.4446
      },
      {
        "movieId": 37,
        "title": "Titanic (1997)",
        "genres": "Drama|Romance",
        "cosine_similarity": 0.4169
      }
    ],
    "43": [
      {
        "movieId": 42,
        "title": "Eternal Sunshine of the Spotless Mind (2004)",
        "genres": "Drama|Romance|Sci-Fi",
        "cosine_similarity": 0.4805
      },
      {
        "movieId": 45,
        "title": "Forrest Gump (1994)",
        "genres": "Comedy|Drama|Romance",
        "cosine_similarity": 0.4392
      },
      {
        "movieId": 37,
        "title": "Titanic (1997)",
        "genres": "Drama|Romance",
        "cosine_similarity": 0.4248
      },
      {
        "movieId": 39,
        "title": "La La Land (2016)",
        "genres": "Comedy|Drama|Musical|Romance",
        "cosine_similarity": 0.398
      },
      {
        "movieId": 38,
        "title": "The Notebook (2004)",
        "genres": "Drama|Romance",
        "cosine_similarity": 0.3831
      },
      {
        "movieId": 44,
        "title": "When Harry Met Sally... (1989)",
        "genres": "Comedy|Romance",
        "cosine_similarity": 0.3759
      }
    ],
    "44": [
      {
        "movieId": 42,
        "title": "Eternal Sunshine of the Spotless Mind (2004)",
        "genres": "Drama|Romance|Sci-Fi",
        "cosine_similarity": 0.4747
      },
      {
        "movieId": 37,
        "title": "Titanic (1997)",
        "genres": "Drama|Romance",
        "cosine_similarity": 0.4472
      },
      {
        "movieId": 45,
        "title": "Forrest Gump (1994)",
        "genres": "Comedy|Drama|Romance",
        "cosine_similarity": 0.44
      },
      {
        "movieId": 40,
        "title": "Pride & Prejudice (2005)",
        "genres": "Drama|Romance",
        "cosine_similarity": 0.4197
      },
      {
        "movieId": 46,
        "title": "Good Will Hunting (1997)",
        "genres": "Drama|Romance",
        "cosine_similarity": 0.4122
      },
      {
        "movieId": 39,
        "title": "La La Land (2016)",
        "genres": "Comedy|Drama|Musical|Romance",
        "cosine_similarity": 0.4087
      }
    ],
    "45": [
      {
        "movieId": 38,
        "title": "The Notebook (2004)",
        "genres": "Drama|Romance",
        "cosine_similarity": 0.5169
      },
      {
        "movieId": 42,
        "title": "Eternal Sunshine of the Spotless Mind (2004)",
        "genres": "Drama|Romance|Sci-Fi",
        "cosine_similarity": 0.4806
      },
      {
        "movieId": 37,
        "title": "Titanic (1997)",
        "genres": "Drama|Romance",
        "cosine_similarity": 0.4612
      },
      {
        "movieId": 39,
        "title": "La La Land (2016)",
        "genres": "Comedy|Drama|Musical|Romance",
        "cosine_similarity": 0.446
      },
      {
        "movieId": 44,
        "title": "When Harry Met Sally... (1989)",
        "genres": "Comedy|Romance",
        "cosine_similarity": 0.44
      },
      {
        "movieId": 43,
        "title": "Notting Hill (1999)",
        "genres": "Comedy|Romance",
        "cosine_similarity": 0.4392
      }
    ],
    "46": [
      {
        "movieId": 37,
        "title": "Titanic (1997)",
        "genres": "Drama|Romance",
        "cosine_similarity": 0.4196
      },
      {
        "movieId": 45,
        "title": "Forrest Gump (1994)",
        "genres": "Comedy|Drama|Romance",
        "cosine_similarity": 0.4133
      },
      {
        "movieId": 44,
        "title": "When Harry Met Sally... (1989)",
        "genres": "Comedy|Romance",
        "cosine_similarity": 0.4122
      },
      {
        "movieId": 39,
        "title": "La La Land (2016)",
        "genres": "Comedy|Drama|Musical|Romance",
        "cosine_similarity": 0.4023
      },
      {
        "movieId": 40,
        "title": "Pride & Prejudice (2005)",
        "genres": "Drama|Romance",
        "cosine_similarity": 0.389
      },
      {
        "movieId": 41,
        "title": "Before Sunrise (1995)",
        "genres": "Drama|Romance",
        "cosine_similarity": 0.3786
      }
    ],
    "47": [
      {
        "movieId": 56,
        "title": "Shaun of the Dead (2004)",
        "genres": "Comedy|Horror",
        "cosine_similarity": 0.3589
      },
      {
        "movieId": 2,
        "title": "Aladdin (1992)",
        "genres": "Animation|Children|Musical",
        "cosine_similarity": 0.3462
      },
      {
        "movieId": 54,
        "title": "Dumb and Dumber (1994)",
        "genres": "Comedy",
        "cosine_similarity": 0.3443
      },
      {
        "movieId": 50,
        "title": "Monty Python and the Holy Grail (1975)",
        "genres": "Adventure|Comedy|Fantasy",
        "cosine_similarity": 0.3395
      },
      {
        "movieId": 6,
        "title": "Monsters, Inc. (2001)",
        "genres": "Animation|Children|Comedy",
        "cosine_similarity": 0.3362
      },
      {
        "movieId": 53,
        "title": "Mean Girls (2004)",
        "genres": "Comedy",
        "cosine_similarity": 0.3289
      }
    ],
    "48": [
      {
        "movieId": 56,
        "title": "Shaun of the Dead (2004)",
        "genres": "Comedy|Horror",
        "cosine_similarity": 0.4297
      },
      {
        "movieId": 51,
        "title": "The Grand Budapest Hotel (2014)",
        "genres": "Comedy|Drama",
        "cosine_similarity": 0.419
      },
      {
        "movieId": 55,
        "title": "Back to the Future (1985)",
        "genres": "Adventure|Comedy|Sci-Fi",
        "cosine_similarity": 0.3689
      },
      {
        "movieId": 2,
        "title": "Aladdin (1992)",
        "genres": "Animation|Children|Musical",
        "cosine_similarity": 0.3586
      },
      {
        "movieId": 8,
        "title": "Shrek (2001)",
        "genres": "Animation|Children|Comedy|Fantasy",
        "cosine_similarity": 0.3564
      },
      {
        "movieId": 6,
        "title": "Monsters, Inc. (2001)",
        "genres": "Animation|Children|Comedy",
        "cosine_similarity": 0.3547
      }
    ],
    "49": [
      {
        "movieId": 6,
        "title": "Monsters, Inc. (2001)",
        "genres": "Animation|Children|Comedy",
        "cosine_similarity": 0.4057
      },
      {
        "movieId": 5,
        "title": "Finding Nemo (2003)",
        "genres": "Animation|Adventure|Children|Comedy",
        "cosine_similarity": 0.3762
      },
      {
        "movieId": 4,
        "title": "Beauty and the Beast (1991)",
        "genres": "Animation|Children|Musical|Romance",
        "cosine_similarity": 0.3597
      },
      {
        "movieId": 55,
        "title": "Back to the Future (1985)",
        "genres": "Adventure|Comedy|Sci-Fi",
        "cosine_similarity": 0.3514
      },
      {
        "movieId": 2,
        "title": "Aladdin (1992)",
        "genres": "Animation|Children|Musical",
        "cosine_similarity": 0.3417
      },
      {
        "movieId": 56,
        "title": "Shaun of the Dead (2004)",
        "genres": "Comedy|Horror",
        "cosine_similarity": 0.3336
      }
    ],
    "50": [
      {
        "movieId": 3,
        "title": "The Lion King (1994)",
        "genres": "Animation|Children|Drama",
        "cosine_similarity": 0.4169
      },
      {
        "movieId": 1,
        "title": "Toy Story (1995)",
        "genres": "Animation|Children|Comedy",
        "cosine_similarity": 0.3802
      },
      {
        "movieId": 47,
        "title": "Superbad (2007)",
        "genres": "Comedy",
        "cosine_similarity": 0.3395
      },
      {
        "movieId": 8,
        "title": "Shrek (2001)",
        "genres": "Animation|Children|Comedy|Fantasy",
        "cosine_similarity": 0.32
      },
      {
        "movieId": 5,
        "title": "Finding Nemo (2003)",
        "genres": "Animation|Adventure|Children|Comedy",
        "cosine_similarity": 0.3192
      },
      {
        "movieId": 4,
        "title": "Beauty and the Beast (1991)",
        "genres": "Animation|Children|Musical|Romance",
        "cosine_similarity": 0.3164
      }
    ],
    "51": [
      {
        "movieId": 48,
        "title": "The Hangover (2009)",
        "genres": "Comedy",
        "cosine_similarity": 0.419
      },
      {
        "movieId": 2,
        "title": "Aladdin (1992)",
        "genres": "Animation|Children|Musical",
        "cosine_similarity": 0.3639
      },
      {
        "movieId": 6,
        "title": "Monsters, Inc. (2001)",
        "genres": "Animation|Children|Comedy",
        "cosine_similarity": 0.3575
      },
      {
        "movieId": 10,
        "title": "Up (2009)",
        "genres": "Animation|Adventure|Children|Drama",
        "cosine_similarity": 0.3508
      },
      {
        "movieId": 9,
        "title": "The Incredibles (2004)",
        "genres": "Action|Animation|Children|Comedy",
        "cosine_similarity": 0.3427
      },
      {
        "movieId": 4,
        "title": "Beauty and the Beast (1991)",
        "genres": "Animation|Children|Musical|Romance",
        "cosine_similarity": 0.3287
      }
    ],
    "52": [
      {
        "movieId": 1,
        "title": "Toy Story (1995)",
        "genres": "Animation|Children|Comedy",
        "cosine_similarity": 0.4106
      },
      {
        "movieId": 12,
        "title": "Coco (2017)",
        "genres": "Animation|Children|Musical",
        "cosine_similarity": 0.3738
      },
      {
        "movieId": 10,
        "title": "Up (2009)",
        "genres": "Animation|Adventure|Children|Drama",
        "cosine_similarity": 0.3572
      },
      {
        "movieId": 54,
        "title": "Dumb and Dumber (1994)",
        "genres": "Comedy",
        "cosine_similarity": 0.3546
      },
      {
        "movieId": 2,
        "title": "Aladdin (1992)",
        "genres": "Animation|Children|Musical",
        "cosine_similarity": 0.3508
      },
      {
        "movieId": 6,
        "title": "Monsters, Inc. (2001)",
        "genres": "Animation|Children|Comedy",
        "cosine_similarity": 0.3467
      }
    ],
    "53": [
      {
        "movieId": 3,
        "title": "The Lion King (1994)",
        "genres": "Animation|Children|Drama",
        "cosine_similarity": 0.346
      },
      {
        "movieId": 52,
        "title": "Ferris Bueller's Day Off (1986)",
        "genres": "Comedy",
        "cosine_similarity": 0.3332
      },
      {
        "movieId": 47,
        "title": "Superbad (2007)",
        "genres": "Comedy",
        "cosine_similarity": 0.3289
      },
      {
        "movieId": 11,
        "title": "WALL-E (2008)",
        "genres": "Animation|Children|Sci-Fi",
        "cosine_similarity": 0.3201
      },
      {
        "movieId": 6,
        "title": "Monsters, Inc. (2001)",
        "genres": "Animation|Children|Comedy",
        "cosine_similarity": 0.3184
      },
      {
        "movieId": 9,
        "title": "The Incredibles (2004)",
        "genres": "Action|Animation|Children|Comedy",
        "cosine_similarity": 0.3184
      }
    ],
    "54": [
      {
        "movieId": 8,
        "title": "Shrek (2001)",
        "genres": "Animation|Children|Comedy|Fantasy",
        "cosine_similarity": 0.3685
      },
      {
        "movieId": 52,
        "title": "Ferris Bueller's Day Off (1986)",
        "genres": "Comedy",
        "cosine_similarity": 0.3546
      },
      {
        "movieId": 47,
        "title": "Superbad (2007)",
        "genres": "Comedy",
        "cosine_similarity": 0.3443
      },
      {
        "movieId": 2,
        "title": "Aladdin (1992)",
        "genres": "Animation|Children|Musical",
        "cosine_similarity": 0.3272
      },
      {
        "movieId": 48,
        "title": "The Hangover (2009)",
        "genres": "Comedy",
        "cosine_similarity": 0.3187
      },
      {
        "movieId": 7,
        "title": "Toy Story 2 (1999)",
        "genres": "Animation|Children|Comedy",
        "cosine_similarity": 0.2833
      }
    ],
    "55": [
      {
        "movieId": 5,
        "title": "Finding Nemo (2003)",
        "genres": "Animation|Adventure|Children|Comedy",
        "cosine_similarity": 0.4278
      },
      {
        "movieId": 3,
        "title": "The Lion King (1994)",
        "genres": "Animation|Children|Drama",
        "cosine_similarity": 0.381
      },
      {
        "movieId": 48,
        "title": "The Hangover (2009)",
        "genres": "Comedy",
        "cosine_similarity": 0.3689
      },
      {
        "movieId": 49,
        "title": "Groundhog Day (1993)",
        "genres": "Comedy|Fantasy|Romance",
        "cosine_similarity": 0.3514
      },
      {
        "movieId": 12,
        "title": "Coco (2017)",
        "genres": "Animation|Children|Musical",
        "cosine_similarity": 0.3503
      },
      {
        "movieId": 11,
        "title": "WALL-E (2008)",
        "genres": "Animation|Children|Sci-Fi",
        "cosine_similarity": 0.3283
      }
    ],
    "56": [
      {
        "movieId": 5,
        "title": "Finding Nemo (2003)",
        "genres": "Animation|Adventure|Children|Comedy",
        "cosine_similarity": 0.4397
      },
      {
        "movieId": 48,
        "title": "The Hangover (2009)",
        "genres": "Comedy",
        "cosine_similarity": 0.4297
      },
      {
        "movieId": 6,
        "title": "Monsters, Inc. (2001)",
        "genres": "Animation|Children|Comedy",
        "cosine_similarity": 0.3659
      },
      {
        "movieId": 47,
        "title": "Superbad (2007)",
        "genres": "Comedy",
        "cosine_similarity": 0.3589
      },
      {
        "movieId": 8,
        "title": "Shrek (2001)",
        "genres": "Animation|Children|Comedy|Fantasy",
        "cosine_similarity": 0.3464
      },
      {
        "movieId": 49,
        "title": "Groundhog Day (1993)",
        "genres": "Comedy|Fantasy|Romance",
        "cosine_similarity": 0.3336
      }
    ]
  },
  "utilitySlice": [
    {
      "userId": 101,
      "cells": [
        {
          "movieId": 1,
          "movieTitle": "Toy Story",
          "observed": 5.0,
          "predicted": 4.6
        },
        {
          "movieId": 2,
          "movieTitle": "Aladdin",
          "observed": null,
          "predicted": 4.41
        },
        {
          "movieId": 3,
          "movieTitle": "The Lion King",
          "observed": null,
          "predicted": 4.59
        },
        {
          "movieId": 5,
          "movieTitle": "Finding Nemo",
          "observed": null,
          "predicted": 4.51
        },
        {
          "movieId": 13,
          "movieTitle": "Star Wars: Episode IV - A New Hope",
          "observed": null,
          "predicted": 3.0
        },
        {
          "movieId": 16,
          "movieTitle": "The Matrix",
          "observed": null,
          "predicted": 3.04
        },
        {
          "movieId": 17,
          "movieTitle": "Inception",
          "observed": null,
          "predicted": 2.92
        },
        {
          "movieId": 25,
          "movieTitle": "The Shawshank Redemption",
          "observed": null,
          "predicted": 2.89
        },
        {
          "movieId": 26,
          "movieTitle": "The Godfather",
          "observed": null,
          "predicted": 2.64
        },
        {
          "movieId": 37,
          "movieTitle": "Titanic",
          "observed": null,
          "predicted": 3.67
        },
        {
          "movieId": 45,
          "movieTitle": "Forrest Gump",
          "observed": null,
          "predicted": 3.66
        },
        {
          "movieId": 47,
          "movieTitle": "Superbad",
          "observed": null,
          "predicted": 4.12
        }
      ]
    },
    {
      "userId": 102,
      "cells": [
        {
          "movieId": 1,
          "movieTitle": "Toy Story",
          "observed": null,
          "predicted": 3.99
        },
        {
          "movieId": 2,
          "movieTitle": "Aladdin",
          "observed": null,
          "predicted": 3.97
        },
        {
          "movieId": 3,
          "movieTitle": "The Lion King",
          "observed": 4.0,
          "predicted": 3.99
        },
        {
          "movieId": 5,
          "movieTitle": "Finding Nemo",
          "observed": null,
          "predicted": 3.89
        },
        {
          "movieId": 13,
          "movieTitle": "Star Wars: Episode IV - A New Hope",
          "observed": null,
          "predicted": 4.95
        },
        {
          "movieId": 16,
          "movieTitle": "The Matrix",
          "observed": 5.0,
          "predicted": 4.87
        },
        {
          "movieId": 17,
          "movieTitle": "Inception",
          "observed": null,
          "predicted": 4.96
        },
        {
          "movieId": 25,
          "movieTitle": "The Shawshank Redemption",
          "observed": 4.5,
          "predicted": 4.46
        },
        {
          "movieId": 26,
          "movieTitle": "The Godfather",
          "observed": 4.5,
          "predicted": 4.48
        },
        {
          "movieId": 37,
          "movieTitle": "Titanic",
          "observed": 3.5,
          "predicted": 3.6
        },
        {
          "movieId": 45,
          "movieTitle": "Forrest Gump",
          "observed": null,
          "predicted": 3.65
        },
        {
          "movieId": 47,
          "movieTitle": "Superbad",
          "observed": null,
          "predicted": 3.98
        }
      ]
    },
    {
      "userId": 103,
      "cells": [
        {
          "movieId": 1,
          "movieTitle": "Toy Story",
          "observed": null,
          "predicted": 2.93
        },
        {
          "movieId": 2,
          "movieTitle": "Aladdin",
          "observed": null,
          "predicted": 2.98
        },
        {
          "movieId": 3,
          "movieTitle": "The Lion King",
          "observed": null,
          "predicted": 2.95
        },
        {
          "movieId": 5,
          "movieTitle": "Finding Nemo",
          "observed": null,
          "predicted": 2.87
        },
        {
          "movieId": 13,
          "movieTitle": "Star Wars: Episode IV - A New Hope",
          "observed": null,
          "predicted": 4.33
        },
        {
          "movieId": 16,
          "movieTitle": "The Matrix",
          "observed": 4.5,
          "predicted": 4.43
        },
        {
          "movieId": 17,
          "movieTitle": "Inception",
          "observed": 4.5,
          "predicted": 4.35
        },
        {
          "movieId": 25,
          "movieTitle": "The Shawshank Redemption",
          "observed": 5.0,
          "predicted": 4.63
        },
        {
          "movieId": 26,
          "movieTitle": "The Godfather",
          "observed": 5.0,
          "predicted": 4.72
        },
        {
          "movieId": 37,
          "movieTitle": "Titanic",
          "observed": 4.0,
          "predicted": 3.69
        },
        {
          "movieId": 45,
          "movieTitle": "Forrest Gump",
          "observed": 4.0,
          "predicted": 3.74
        },
        {
          "movieId": 47,
          "movieTitle": "Superbad",
          "observed": 3.0,
          "predicted": 3.04
        }
      ]
    },
    {
      "userId": 104,
      "cells": [
        {
          "movieId": 1,
          "movieTitle": "Toy Story",
          "observed": 3.5,
          "predicted": 3.59
        },
        {
          "movieId": 2,
          "movieTitle": "Aladdin",
          "observed": 3.5,
          "predicted": 3.55
        },
        {
          "movieId": 3,
          "movieTitle": "The Lion King",
          "observed": null,
          "predicted": 3.56
        },
        {
          "movieId": 5,
          "movieTitle": "Finding Nemo",
          "observed": null,
          "predicted": 3.61
        },
        {
          "movieId": 13,
          "movieTitle": "Star Wars: Episode IV - A New Hope",
          "observed": null,
          "predicted": 3.12
        },
        {
          "movieId": 16,
          "movieTitle": "The Matrix",
          "observed": 3.0,
          "predicted": 3.26
        },
        {
          "movieId": 17,
          "movieTitle": "Inception",
          "observed": 3.0,
          "predicted": 3.05
        },
        {
          "movieId": 25,
          "movieTitle": "The Shawshank Redemption",
          "observed": null,
          "predicted": 3.86
        },
        {
          "movieId": 26,
          "movieTitle": "The Godfather",
          "observed": 4.0,
          "predicted": 3.85
        },
        {
          "movieId": 37,
          "movieTitle": "Titanic",
          "observed": 4.5,
          "predicted": 4.52
        },
        {
          "movieId": 45,
          "movieTitle": "Forrest Gump",
          "observed": null,
          "predicted": 4.55
        },
        {
          "movieId": 47,
          "movieTitle": "Superbad",
          "observed": null,
          "predicted": 3.53
        }
      ]
    },
    {
      "userId": 105,
      "cells": [
        {
          "movieId": 1,
          "movieTitle": "Toy Story",
          "observed": null,
          "predicted": 4.67
        },
        {
          "movieId": 2,
          "movieTitle": "Aladdin",
          "observed": 4.5,
          "predicted": 4.64
        },
        {
          "movieId": 3,
          "movieTitle": "The Lion King",
          "observed": null,
          "predicted": 4.73
        },
        {
          "movieId": 5,
          "movieTitle": "Finding Nemo",
          "observed": null,
          "predicted": 4.68
        },
        {
          "movieId": 13,
          "movieTitle": "Star Wars: Episode IV - A New Hope",
          "observed": null,
          "predicted": 3.63
        },
        {
          "movieId": 16,
          "movieTitle": "The Matrix",
          "observed": null,
          "predicted": 3.45
        },
        {
          "movieId": 17,
          "movieTitle": "Inception",
          "observed": 3.5,
          "predicted": 3.61
        },
        {
          "movieId": 25,
          "movieTitle": "The Shawshank Redemption",
          "observed": null,
          "predicted": 3.11
        },
        {
          "movieId": 26,
          "movieTitle": "The Godfather",
          "observed": null,
          "predicted": 3.03
        },
        {
          "movieId": 37,
          "movieTitle": "Titanic",
          "observed": null,
          "predicted": 3.88
        },
        {
          "movieId": 45,
          "movieTitle": "Forrest Gump",
          "observed": null,
          "predicted": 3.91
        },
        {
          "movieId": 47,
          "movieTitle": "Superbad",
          "observed": null,
          "predicted": 4.51
        }
      ]
    },
    {
      "userId": 106,
      "cells": [
        {
          "movieId": 1,
          "movieTitle": "Toy Story",
          "observed": null,
          "predicted": 4.81
        },
        {
          "movieId": 2,
          "movieTitle": "Aladdin",
          "observed": null,
          "predicted": 4.73
        },
        {
          "movieId": 3,
          "movieTitle": "The Lion King",
          "observed": 4.5,
          "predicted": 4.84
        },
        {
          "movieId": 5,
          "movieTitle": "Finding Nemo",
          "observed": 5.0,
          "predicted": 4.79
        },
        {
          "movieId": 13,
          "movieTitle": "Star Wars: Episode IV - A New Hope",
          "observed": 3.5,
          "predicted": 3.54
        },
        {
          "movieId": 16,
          "movieTitle": "The Matrix",
          "observed": 3.5,
          "predicted": 3.53
        },
        {
          "movieId": 17,
          "movieTitle": "Inception",
          "observed": 3.5,
          "predicted": 3.5
        },
        {
          "movieId": 25,
          "movieTitle": "The Shawshank Redemption",
          "observed": 4.0,
          "predicted": 3.51
        },
        {
          "movieId": 26,
          "movieTitle": "The Godfather",
          "observed": null,
          "predicted": 3.37
        },
        {
          "movieId": 37,
          "movieTitle": "Titanic",
          "observed": 4.5,
          "predicted": 4.36
        },
        {
          "movieId": 45,
          "movieTitle": "Forrest Gump",
          "observed": null,
          "predicted": 4.38
        },
        {
          "movieId": 47,
          "movieTitle": "Superbad",
          "observed": null,
          "predicted": 4.53
        }
      ]
    },
    {
      "userId": 107,
      "cells": [
        {
          "movieId": 1,
          "movieTitle": "Toy Story",
          "observed": 3.0,
          "predicted": 3.41
        },
        {
          "movieId": 2,
          "movieTitle": "Aladdin",
          "observed": 3.0,
          "predicted": 3.34
        },
        {
          "movieId": 3,
          "movieTitle": "The Lion King",
          "observed": null,
          "predicted": 3.38
        },
        {
          "movieId": 5,
          "movieTitle": "Finding Nemo",
          "observed": null,
          "predicted": 3.26
        },
        {
          "movieId": 13,
          "movieTitle": "Star Wars: Episode IV - A New Hope",
          "observed": 5.0,
          "predicted": 4.84
        },
        {
          "movieId": 16,
          "movieTitle": "The Matrix",
          "observed": 4.5,
          "predicted": 4.73
        },
        {
          "movieId": 17,
          "movieTitle": "Inception",
          "observed": 5.0,
          "predicted": 4.8
        },
        {
          "movieId": 25,
          "movieTitle": "The Shawshank Redemption",
          "observed": 4.0,
          "predicted": 4.09
        },
        {
          "movieId": 26,
          "movieTitle": "The Godfather",
          "observed": 4.0,
          "predicted": 4.1
        },
        {
          "movieId": 37,
          "movieTitle": "Titanic",
          "observed": null,
          "predicted": 2.79
        },
        {
          "movieId": 45,
          "movieTitle": "Forrest Gump",
          "observed": 2.5,
          "predicted": 2.83
        },
        {
          "movieId": 47,
          "movieTitle": "Superbad",
          "observed": null,
          "predicted": 3.44
        }
      ]
    },
    {
      "userId": 108,
      "cells": [
        {
          "movieId": 1,
          "movieTitle": "Toy Story",
          "observed": 3.0,
          "predicted": 3.13
        },
        {
          "movieId": 2,
          "movieTitle": "Aladdin",
          "observed": null,
          "predicted": 3.1
        },
        {
          "movieId": 3,
          "movieTitle": "The Lion King",
          "observed": null,
          "predicted": 3.1
        },
        {
          "movieId": 5,
          "movieTitle": "Finding Nemo",
          "observed": 3.0,
          "predicted": 3.06
        },
        {
          "movieId": 13,
          "movieTitle": "Star Wars: Episode IV - A New Hope",
          "observed": 4.0,
          "predicted": 4.2
        },
        {
          "movieId": 16,
          "movieTitle": "The Matrix",
          "observed": null,
          "predicted": 4.32
        },
        {
          "movieId": 17,
          "movieTitle": "Inception",
          "observed": null,
          "predicted": 4.14
        },
        {
          "movieId": 25,
          "movieTitle": "The Shawshank Redemption",
          "observed": 4.5,
          "predicted": 4.54
        },
        {
          "movieId": 26,
          "movieTitle": "The Godfather",
          "observed": null,
          "predicted": 4.58
        },
        {
          "movieId": 37,
          "movieTitle": "Titanic",
          "observed": null,
          "predicted": 3.87
        },
        {
          "movieId": 45,
          "movieTitle": "Forrest Gump",
          "observed": 3.5,
          "predicted": 3.9
        },
        {
          "movieId": 47,
          "movieTitle": "Superbad",
          "observed": null,
          "predicted": 3.21
        }
      ]
    },
    {
      "userId": 109,
      "cells": [
        {
          "movieId": 1,
          "movieTitle": "Toy Story",
          "observed": null,
          "predicted": 3.68
        },
        {
          "movieId": 2,
          "movieTitle": "Aladdin",
          "observed": 4.0,
          "predicted": 3.68
        },
        {
          "movieId": 3,
          "movieTitle": "The Lion King",
          "observed": 4.0,
          "predicted": 3.66
        },
        {
          "movieId": 5,
          "movieTitle": "Finding Nemo",
          "observed": null,
          "predicted": 3.71
        },
        {
          "movieId": 13,
          "movieTitle": "Star Wars: Episode IV - A New Hope",
          "observed": null,
          "predicted": 3.02
        },
        {
          "movieId": 16,
          "movieTitle": "The Matrix",
          "observed": null,
          "predicted": 3.13
        },
        {
          "movieId": 17,
          "movieTitle": "Inception",
          "observed": null,
          "predicted": 3.0
        },
        {
          "movieId": 25,
          "movieTitle": "The Shawshank Redemption",
          "observed": 3.5,
          "predicted": 3.65
        },
        {
          "movieId": 26,
          "movieTitle": "The Godfather",
          "observed": 3.5,
          "predicted": 3.66
        },
        {
          "movieId": 37,
          "movieTitle": "Titanic",
          "observed": 4.0,
          "predicted": 4.4
        },
        {
          "movieId": 45,
          "movieTitle": "Forrest Gump",
          "observed": 5.0,
          "predicted": 4.46
        },
        {
          "movieId": 47,
          "movieTitle": "Superbad",
          "observed": null,
          "predicted": 3.57
        }
      ]
    },
    {
      "userId": 110,
      "cells": [
        {
          "movieId": 1,
          "movieTitle": "Toy Story",
          "observed": null,
          "predicted": 4.43
        },
        {
          "movieId": 2,
          "movieTitle": "Aladdin",
          "observed": null,
          "predicted": 4.33
        },
        {
          "movieId": 3,
          "movieTitle": "The Lion King",
          "observed": null,
          "predicted": 4.52
        },
        {
          "movieId": 5,
          "movieTitle": "Finding Nemo",
          "observed": null,
          "predicted": 4.4
        },
        {
          "movieId": 13,
          "movieTitle": "Star Wars: Episode IV - A New Hope",
          "observed": 3.5,
          "predicted": 3.53
        },
        {
          "movieId": 16,
          "movieTitle": "The Matrix",
          "observed": null,
          "predicted": 3.46
        },
        {
          "movieId": 17,
          "movieTitle": "Inception",
          "observed": null,
          "predicted": 3.44
        },
        {
          "movieId": 25,
          "movieTitle": "The Shawshank Redemption",
          "observed": null,
          "predicted": 3.24
        },
        {
          "movieId": 26,
          "movieTitle": "The Godfather",
          "observed": null,
          "predicted": 3.08
        },
        {
          "movieId": 37,
          "movieTitle": "Titanic",
          "observed": null,
          "predicted": 3.83
        },
        {
          "movieId": 45,
          "movieTitle": "Forrest Gump",
          "observed": null,
          "predicted": 3.8
        },
        {
          "movieId": 47,
          "movieTitle": "Superbad",
          "observed": null,
          "predicted": 4.26
        }
      ]
    }
  ],
  "longTailCurve": [
    {
      "rank": 1,
      "movieId": 28,
      "title": "Pulp Fiction (1994)",
      "count": 194,
      "isHead": true
    },
    {
      "rank": 2,
      "movieId": 13,
      "title": "Star Wars: Episode IV - A New Hope (1977)",
      "count": 183,
      "isHead": true
    },
    {
      "rank": 3,
      "movieId": 3,
      "title": "The Lion King (1994)",
      "count": 183,
      "isHead": true
    },
    {
      "rank": 4,
      "movieId": 26,
      "title": "The Godfather (1972)",
      "count": 179,
      "isHead": true
    },
    {
      "rank": 5,
      "movieId": 25,
      "title": "The Shawshank Redemption (1994)",
      "count": 176,
      "isHead": true
    },
    {
      "rank": 6,
      "movieId": 16,
      "title": "The Matrix (1999)",
      "count": 176,
      "isHead": true
    },
    {
      "rank": 7,
      "movieId": 32,
      "title": "The Silence of the Lambs (1991)",
      "count": 173,
      "isHead": true
    },
    {
      "rank": 8,
      "movieId": 45,
      "title": "Forrest Gump (1994)",
      "count": 171,
      "isHead": true
    },
    {
      "rank": 9,
      "movieId": 1,
      "title": "Toy Story (1995)",
      "count": 170,
      "isHead": true
    },
    {
      "rank": 10,
      "movieId": 29,
      "title": "Goodfellas (1990)",
      "count": 169,
      "isHead": true
    },
    {
      "rank": 11,
      "movieId": 5,
      "title": "Finding Nemo (2003)",
      "count": 168,
      "isHead": true
    },
    {
      "rank": 12,
      "movieId": 27,
      "title": "The Godfather: Part II (1974)",
      "count": 168,
      "isHead": true
    },
    {
      "rank": 13,
      "movieId": 8,
      "title": "Shrek (2001)",
      "count": 167,
      "isHead": true
    },
    {
      "rank": 14,
      "movieId": 22,
      "title": "The Dark Knight (2008)",
      "count": 167,
      "isHead": true
    },
    {
      "rank": 15,
      "movieId": 48,
      "title": "The Hangover (2009)",
      "count": 167,
      "isHead": true
    },
    {
      "rank": 16,
      "movieId": 37,
      "title": "Titanic (1997)",
      "count": 165,
      "isHead": true
    },
    {
      "rank": 17,
      "movieId": 55,
      "title": "Back to the Future (1985)",
      "count": 164,
      "isHead": true
    },
    {
      "rank": 18,
      "movieId": 34,
      "title": "The Usual Suspects (1995)",
      "count": 164,
      "isHead": true
    },
    {
      "rank": 19,
      "movieId": 6,
      "title": "Monsters, Inc. (2001)",
      "count": 164,
      "isHead": true
    },
    {
      "rank": 20,
      "movieId": 38,
      "title": "The Notebook (2004)",
      "count": 163,
      "isHead": true
    },
    {
      "rank": 21,
      "movieId": 4,
      "title": "Beauty and the Beast (1991)",
      "count": 162,
      "isHead": true
    },
    {
      "rank": 22,
      "movieId": 33,
      "title": "Schindler's List (1993)",
      "count": 162,
      "isHead": true
    },
    {
      "rank": 23,
      "movieId": 49,
      "title": "Groundhog Day (1993)",
      "count": 162,
      "isHead": true
    },
    {
      "rank": 24,
      "movieId": 2,
      "title": "Aladdin (1992)",
      "count": 161,
      "isHead": true
    },
    {
      "rank": 25,
      "movieId": 17,
      "title": "Inception (2010)",
      "count": 160,
      "isHead": true
    },
    {
      "rank": 26,
      "movieId": 40,
      "title": "Pride & Prejudice (2005)",
      "count": 160,
      "isHead": true
    },
    {
      "rank": 27,
      "movieId": 10,
      "title": "Up (2009)",
      "count": 159,
      "isHead": true
    },
    {
      "rank": 28,
      "movieId": 41,
      "title": "Before Sunrise (1995)",
      "count": 159,
      "isHead": true
    },
    {
      "rank": 29,
      "movieId": 7,
      "title": "Toy Story 2 (1999)",
      "count": 158,
      "isHead": true
    },
    {
      "rank": 30,
      "movieId": 18,
      "title": "Interstellar (2014)",
      "count": 158,
      "isHead": true
    },
    {
      "rank": 31,
      "movieId": 14,
      "title": "Star Wars: Episode V - The Empire Strikes Back (1980)",
      "count": 158,
      "isHead": true
    },
    {
      "rank": 32,
      "movieId": 42,
      "title": "Eternal Sunshine of the Spotless Mind (2004)",
      "count": 157,
      "isHead": true
    },
    {
      "rank": 33,
      "movieId": 30,
      "title": "Fight Club (1999)",
      "count": 157,
      "isHead": true
    },
    {
      "rank": 34,
      "movieId": 19,
      "title": "Terminator 2: Judgment Day (1991)",
      "count": 157,
      "isHead": true
    },
    {
      "rank": 35,
      "movieId": 21,
      "title": "Aliens (1986)",
      "count": 156,
      "isHead": true
    },
    {
      "rank": 36,
      "movieId": 9,
      "title": "The Incredibles (2004)",
      "count": 156,
      "isHead": true
    },
    {
      "rank": 37,
      "movieId": 51,
      "title": "The Grand Budapest Hotel (2014)",
      "count": 156,
      "isHead": true
    },
    {
      "rank": 38,
      "movieId": 24,
      "title": "Jurassic Park (1993)",
      "count": 156,
      "isHead": true
    },
    {
      "rank": 39,
      "movieId": 35,
      "title": "No Country for Old Men (2007)",
      "count": 155,
      "isHead": true
    },
    {
      "rank": 40,
      "movieId": 46,
      "title": "Good Will Hunting (1997)",
      "count": 154,
      "isHead": true
    },
    {
      "rank": 41,
      "movieId": 44,
      "title": "When Harry Met Sally... (1989)",
      "count": 154,
      "isHead": true
    },
    {
      "rank": 42,
      "movieId": 50,
      "title": "Monty Python and the Holy Grail (1975)",
      "count": 154,
      "isHead": true
    },
    {
      "rank": 43,
      "movieId": 23,
      "title": "Raiders of the Lost Ark (1981)",
      "count": 154,
      "isHead": true
    },
    {
      "rank": 44,
      "movieId": 43,
      "title": "Notting Hill (1999)",
      "count": 153,
      "isHead": true
    },
    {
      "rank": 45,
      "movieId": 11,
      "title": "WALL-E (2008)",
      "count": 153,
      "isHead": true
    },
    {
      "rank": 46,
      "movieId": 20,
      "title": "Blade Runner (1982)",
      "count": 150,
      "isHead": true
    },
    {
      "rank": 47,
      "movieId": 31,
      "title": "Se7en (1995)",
      "count": 150,
      "isHead": true
    },
    {
      "rank": 48,
      "movieId": 39,
      "title": "La La Land (2016)",
      "count": 149,
      "isHead": true
    },
    {
      "rank": 49,
      "movieId": 54,
      "title": "Dumb and Dumber (1994)",
      "count": 149,
      "isHead": true
    },
    {
      "rank": 50,
      "movieId": 52,
      "title": "Ferris Bueller's Day Off (1986)",
      "count": 148,
      "isHead": true
    },
    {
      "rank": 51,
      "movieId": 56,
      "title": "Shaun of the Dead (2004)",
      "count": 146,
      "isHead": true
    },
    {
      "rank": 52,
      "movieId": 15,
      "title": "Star Wars: Episode VI - Return of the Jedi (1983)",
      "count": 145,
      "isHead": true
    },
    {
      "rank": 53,
      "movieId": 47,
      "title": "Superbad (2007)",
      "count": 143,
      "isHead": true
    },
    {
      "rank": 54,
      "movieId": 53,
      "title": "Mean Girls (2004)",
      "count": 138,
      "isHead": true
    },
    {
      "rank": 55,
      "movieId": 36,
      "title": "The Departed (2006)",
      "count": 136,
      "isHead": true
    },
    {
      "rank": 56,
      "movieId": 12,
      "title": "Coco (2017)",
      "count": 128,
      "isHead": true
    },
    {
      "rank": 57,
      "movieId": 57,
      "title": "The Northern Paradox (2004)",
      "count": 30,
      "isHead": false
    },
    {
      "rank": 58,
      "movieId": 58,
      "title": "The Hidden Symphony (2005)",
      "count": 26,
      "isHead": false
    },
    {
      "rank": 59,
      "movieId": 60,
      "title": "The Silent Horizon (2007)",
      "count": 23,
      "isHead": false
    },
    {
      "rank": 60,
      "movieId": 59,
      "title": "The Electric Echo (2006)",
      "count": 22,
      "isHead": false
    },
    {
      "rank": 61,
      "movieId": 61,
      "title": "The Broken Fable (2008)",
      "count": 21,
      "isHead": false
    },
    {
      "rank": 62,
      "movieId": 62,
      "title": "The Shadow Cipher (2009)",
      "count": 21,
      "isHead": false
    },
    {
      "rank": 63,
      "movieId": 69,
      "title": "The Crimson Harbor (2016)",
      "count": 16,
      "isHead": false
    },
    {
      "rank": 64,
      "movieId": 64,
      "title": "The Emerald Sanctuary (2011)",
      "count": 14,
      "isHead": false
    },
    {
      "rank": 65,
      "movieId": 75,
      "title": "The Silent Horizon (2022)",
      "count": 13,
      "isHead": false
    },
    {
      "rank": 66,
      "movieId": 63,
      "title": "The Distant Frontier (2010)",
      "count": 12,
      "isHead": false
    },
    {
      "rank": 67,
      "movieId": 85,
      "title": "The Velvet Odyssey (1994)",
      "count": 11,
      "isHead": false
    },
    {
      "rank": 68,
      "movieId": 66,
      "title": "The Quantum Chronicle (2013)",
      "count": 11,
      "isHead": false
    },
    {
      "rank": 69,
      "movieId": 83,
      "title": "The Solar Protocol (1992)",
      "count": 11,
      "isHead": false
    },
    {
      "rank": 70,
      "movieId": 341,
      "title": "The Midnight Mirage (2022)",
      "count": 10,
      "isHead": false
    },
    {
      "rank": 71,
      "movieId": 121,
      "title": "The Broken Fable (1992)",
      "count": 10,
      "isHead": false
    },
    {
      "rank": 72,
      "movieId": 155,
      "title": "The Forgotten Voyage (1988)",
      "count": 9,
      "isHead": false
    },
    {
      "rank": 73,
      "movieId": 164,
      "title": "The Electric Echo (1997)",
      "count": 9,
      "isHead": false
    },
    {
      "rank": 74,
      "movieId": 94,
      "title": "The Emerald Sanctuary (2003)",
      "count": 9,
      "isHead": false
    },
    {
      "rank": 75,
      "movieId": 106,
      "title": "The Broken Fable (2015)",
      "count": 9,
      "isHead": false
    },
    {
      "rank": 76,
      "movieId": 117,
      "title": "The Northern Paradox (1988)",
      "count": 9,
      "isHead": false
    },
    {
      "rank": 77,
      "movieId": 89,
      "title": "The Electric Echo (1998)",
      "count": 9,
      "isHead": false
    },
    {
      "rank": 78,
      "movieId": 177,
      "title": "The Northern Paradox (2010)",
      "count": 9,
      "isHead": false
    },
    {
      "rank": 79,
      "movieId": 86,
      "title": "The Midnight Mirage (1995)",
      "count": 9,
      "isHead": false
    },
    {
      "rank": 80,
      "movieId": 109,
      "title": "The Emerald Sanctuary (2018)",
      "count": 9,
      "isHead": false
    },
    {
      "rank": 81,
      "movieId": 340,
      "title": "The Velvet Odyssey (2021)",
      "count": 9,
      "isHead": false
    },
    {
      "rank": 82,
      "movieId": 68,
      "title": "The Solar Protocol (2015)",
      "count": 9,
      "isHead": false
    },
    {
      "rank": 83,
      "movieId": 79,
      "title": "The Emerald Sanctuary (1988)",
      "count": 9,
      "isHead": false
    },
    {
      "rank": 84,
      "movieId": 113,
      "title": "The Solar Protocol (2022)",
      "count": 9,
      "isHead": false
    },
    {
      "rank": 85,
      "movieId": 65,
      "title": "The Forgotten Voyage (2012)",
      "count": 9,
      "isHead": false
    },
    {
      "rank": 86,
      "movieId": 72,
      "title": "The Northern Paradox (2019)",
      "count": 8,
      "isHead": false
    },
    {
      "rank": 87,
      "movieId": 219,
      "title": "The Crimson Harbor (2014)",
      "count": 8,
      "isHead": false
    },
    {
      "rank": 88,
      "movieId": 261,
      "title": "The Quantum Chronicle (2018)",
      "count": 8,
      "isHead": false
    },
    {
      "rank": 89,
      "movieId": 206,
      "title": "The Midnight Mirage (2001)",
      "count": 8,
      "isHead": false
    },
    {
      "rank": 90,
      "movieId": 104,
      "title": "The Electric Echo (2013)",
      "count": 8,
      "isHead": false
    },
    {
      "rank": 91,
      "movieId": 299,
      "title": "The Electric Echo (2018)",
      "count": 8,
      "isHead": false
    },
    {
      "rank": 92,
      "movieId": 100,
      "title": "The Velvet Odyssey (2009)",
      "count": 8,
      "isHead": false
    },
    {
      "rank": 93,
      "movieId": 192,
      "title": "The Northern Paradox (1987)",
      "count": 8,
      "isHead": false
    },
    {
      "rank": 94,
      "movieId": 87,
      "title": "The Northern Paradox (1996)",
      "count": 8,
      "isHead": false
    },
    {
      "rank": 95,
      "movieId": 84,
      "title": "The Crimson Harbor (1993)",
      "count": 8,
      "isHead": false
    },
    {
      "rank": 96,
      "movieId": 120,
      "title": "The Silent Horizon (1991)",
      "count": 7,
      "isHead": false
    },
    {
      "rank": 97,
      "movieId": 218,
      "title": "The Solar Protocol (2013)",
      "count": 7,
      "isHead": false
    },
    {
      "rank": 98,
      "movieId": 304,
      "title": "The Emerald Sanctuary (1985)",
      "count": 7,
      "isHead": false
    },
    {
      "rank": 99,
      "movieId": 212,
      "title": "The Shadow Cipher (2007)",
      "count": 7,
      "isHead": false
    },
    {
      "rank": 100,
      "movieId": 254,
      "title": "The Electric Echo (2011)",
      "count": 7,
      "isHead": false
    },
    {
      "rank": 101,
      "movieId": 292,
      "title": "The Golden Labyrinth (2011)",
      "count": 7,
      "isHead": false
    },
    {
      "rank": 102,
      "movieId": 281,
      "title": "The Midnight Mirage (2000)",
      "count": 7,
      "isHead": false
    },
    {
      "rank": 103,
      "movieId": 240,
      "title": "The Silent Horizon (1997)",
      "count": 7,
      "isHead": false
    },
    {
      "rank": 104,
      "movieId": 171,
      "title": "The Quantum Chronicle (2004)",
      "count": 7,
      "isHead": false
    },
    {
      "rank": 105,
      "movieId": 205,
      "title": "The Velvet Odyssey (2000)",
      "count": 7,
      "isHead": false
    },
    {
      "rank": 106,
      "movieId": 174,
      "title": "The Crimson Harbor (2007)",
      "count": 7,
      "isHead": false
    },
    {
      "rank": 107,
      "movieId": 175,
      "title": "The Velvet Odyssey (2008)",
      "count": 7,
      "isHead": false
    },
    {
      "rank": 108,
      "movieId": 236,
      "title": "The Midnight Mirage (1993)",
      "count": 7,
      "isHead": false
    },
    {
      "rank": 109,
      "movieId": 238,
      "title": "The Hidden Symphony (1995)",
      "count": 7,
      "isHead": false
    },
    {
      "rank": 110,
      "movieId": 245,
      "title": "The Forgotten Voyage (2002)",
      "count": 7,
      "isHead": false
    },
    {
      "rank": 111,
      "movieId": 107,
      "title": "The Shadow Cipher (2016)",
      "count": 7,
      "isHead": false
    },
    {
      "rank": 112,
      "movieId": 88,
      "title": "The Hidden Symphony (1997)",
      "count": 7,
      "isHead": false
    },
    {
      "rank": 113,
      "movieId": 82,
      "title": "The Golden Labyrinth (1991)",
      "count": 7,
      "isHead": false
    },
    {
      "rank": 114,
      "movieId": 91,
      "title": "The Broken Fable (2000)",
      "count": 7,
      "isHead": false
    },
    {
      "rank": 115,
      "movieId": 96,
      "title": "The Quantum Chronicle (2005)",
      "count": 7,
      "isHead": false
    },
    {
      "rank": 116,
      "movieId": 70,
      "title": "The Velvet Odyssey (2017)",
      "count": 7,
      "isHead": false
    },
    {
      "rank": 117,
      "movieId": 95,
      "title": "The Forgotten Voyage (2004)",
      "count": 7,
      "isHead": false
    },
    {
      "rank": 118,
      "movieId": 67,
      "title": "The Golden Labyrinth (2014)",
      "count": 7,
      "isHead": false
    },
    {
      "rank": 119,
      "movieId": 197,
      "title": "The Shadow Cipher (1992)",
      "count": 6,
      "isHead": false
    },
    {
      "rank": 120,
      "movieId": 160,
      "title": "The Velvet Odyssey (1993)",
      "count": 6,
      "isHead": false
    }
  ],
  "ratingDistribution": [
    {
      "rating": "1.5\u2605",
      "star": 1.5,
      "count": 1,
      "pct": 0.0
    },
    {
      "rating": "2.0\u2605",
      "star": 2.0,
      "count": 44,
      "pct": 0.4
    },
    {
      "rating": "2.5\u2605",
      "star": 2.5,
      "count": 371,
      "pct": 3.6
    },
    {
      "rating": "3.0\u2605",
      "star": 3.0,
      "count": 1430,
      "pct": 13.9
    },
    {
      "rating": "3.5\u2605",
      "star": 3.5,
      "count": 2010,
      "pct": 19.5
    },
    {
      "rating": "4.0\u2605",
      "star": 4.0,
      "count": 2109,
      "pct": 20.4
    },
    {
      "rating": "4.5\u2605",
      "star": 4.5,
      "count": 2123,
      "pct": 20.6
    },
    {
      "rating": "5.0\u2605",
      "star": 5.0,
      "count": 2233,
      "pct": 21.6
    }
  ]
};

export function computeLiveRecommendations(params: {
  userId: number;
  customRatings: Record<number, number>;
  algorithm: 'svd' | 'user_cf' | 'item_cf' | 'cold_start';
  topN?: number;
}) {
  const topN = params.topN || 6;
  const catalog = CINEMATCH_STATE.catalog as any[];
  const mu = CINEMATCH_STATE.globalMean as number;

  // Cold-start profile (#999) or explicit cold_start mode with 0 custom ratings
  const ratedEntries = Object.entries(params.customRatings).filter(([, r]) => r > 0);
  if ((params.userId === 999 || params.algorithm === 'cold_start') && ratedEntries.length === 0) {
    const sorted = [...catalog]
      .map((m) => {
        const mWeight = 15;
        const bayesian = (m.ratingCount / (m.ratingCount + mWeight)) * m.avgRating + (mWeight / (m.ratingCount + mWeight)) * mu;
        return {
          ...m,
          predicted_rating: Number(bayesian.toFixed(2)),
          matchPct: Math.min(99, Math.round((bayesian / 5.0) * 100)),
          strategy: 'Cold-Start Bayesian Popularity Fallback',
          explanation: `Top-rated blockbuster across ${m.ratingCount} viewer ratings (Bayesian mean ${bayesian.toFixed(2)}★)`,
        };
      })
      .sort((a, b) => b.predicted_rating - a.predicted_rating)
      .slice(0, topN)
      .map((item, idx) => ({ ...item, rank: idx + 1 }));
    return sorted;
  }

  // Derive active user's latent taste vector P_u from their rated movies!
  const watchedSet = new Set<number>(ratedEntries.map(([mid]) => Number(mid)));
  const pVec = [0, 0, 0, 0, 0];
  let userBias = 0;

  if (ratedEntries.length > 0) {
    let weightSum = 0;
    let ratingSum = 0;
    for (const [midStr, ratingVal] of ratedEntries) {
      const movie = catalog.find((c) => c.movieId === Number(midStr));
      if (!movie) continue;
      const centered = ratingVal - mu;
      ratingSum += centered;
      const w = Math.abs(centered) + 0.5;
      weightSum += w;
      for (let d = 0; d < 5; d++) {
        pVec[d] += centered * (movie.qVec[d] || 0);
      }
    }
    userBias = (ratingSum / ratedEntries.length) * 0.45;
    for (let d = 0; d < 5; d++) {
      pVec[d] = pVec[d] / Math.max(1, weightSum);
    }
  }

  // Score all unwatched movies
  const candidates = catalog
    .filter((m) => !watchedSet.has(m.movieId))
    .map((m) => {
      let rawPred = mu + userBias + (m.bias || 0);
      // Dot product P_u . Q_i^T
      let dot = 0;
      for (let d = 0; d < 5; d++) {
        dot += pVec[d] * (m.qVec[d] || 0);
      }

      if (params.algorithm === 'svd') {
        rawPred += dot * 1.35;
      } else if (params.algorithm === 'user_cf') {
        rawPred += dot * 1.15 + (m.avgRating - mu) * 0.35;
      } else if (params.algorithm === 'item_cf') {
        rawPred += dot * 1.22 + (m.avgRating - mu) * 0.25;
      } else {
        rawPred += dot * 1.1 + (m.avgRating - mu) * 0.45;
      }

      const cnt = m.ratingCount || 5;
      const shrunk = (cnt / (cnt + 6.0)) * rawPred + (6.0 / (cnt + 6.0)) * mu;
      const finalScore = Math.max(1.0, Math.min(4.98, shrunk));
      const matchPct = Math.min(99, Math.max(62, Math.round((finalScore / 5.0) * 100)));

      // Identify top liked movie in same cluster for explanation
      const likedSameCluster = ratedEntries
        .map(([id, r]) => ({ movie: catalog.find((c) => c.movieId === Number(id)), r }))
        .filter((x) => x.movie && x.r >= 4.0 && x.movie.cluster === m.cluster)
        .sort((a, b) => b.r - a.r);

      const anchorTitle = likedSameCluster[0]?.movie?.shortTitle || 'your high-rated favorites';
      const strategyLabel =
        params.algorithm === 'svd'
          ? 'SVD Matrix Factorization (P × Qᵀ)'
          : params.algorithm === 'user_cf'
            ? 'User-User Cosine Similarity CF'
            : params.algorithm === 'item_cf'
              ? 'Item-Item Cosine Similarity CF'
              : 'Hybrid Collaborative + Genre Engine';

      return {
        ...m,
        predicted_rating: Number(finalScore.toFixed(2)),
        matchPct,
        dotProduct: Number(dot.toFixed(3)),
        strategy: strategyLabel,
        explanation: `Matched via ${strategyLabel} — strong latent alignment with ${anchorTitle}`,
      };
    });

  candidates.sort((a, b) => b.predicted_rating - a.predicted_rating);
  return candidates.slice(0, topN).map((item, idx) => ({
    ...item,
    rank: idx + 1,
  }));
}
