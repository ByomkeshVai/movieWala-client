import { configureStore } from "@reduxjs/toolkit";
import { categoryAPI } from "./api/categoryAPI/categoryAPI";
import { genreAPI } from "./api/GenreAPI/genreAPI";
import { languageAPI } from "./api/languageAPI/languageAPI";
import { movieAPI } from "./api/movieAPI/movieAPI";

export const store = configureStore({
  reducer: {
    [categoryAPI.reducerPath]: categoryAPI.reducer,
    [genreAPI.reducerPath]: genreAPI.reducer,
    [languageAPI.reducerPath]: languageAPI.reducer,
    [movieAPI.reducerPath]: movieAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      categoryAPI.middleware,
      genreAPI.middleware,
      languageAPI.middleware,
      movieAPI.middleware
    ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
