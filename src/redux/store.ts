import { configureStore } from "@reduxjs/toolkit";
import { categoryAPI } from "./api/categoryAPI/categoryAPI";
import { genreAPI } from "./api/GenreAPI/genreAPI";

export const store = configureStore({
  reducer: {
    [categoryAPI.reducerPath]: categoryAPI.reducer,
    [genreAPI.reducerPath]: genreAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoryAPI.middleware, genreAPI.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
