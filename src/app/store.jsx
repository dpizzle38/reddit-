import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';
import searchReducer from '../features/search/searchSlice';
import categoriesReducer from '../features/categories/categoriesSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    search: searchReducer,
    categories: categoriesReducer,
  },
});






































































