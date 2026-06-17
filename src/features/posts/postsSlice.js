import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
    fetchPostsByReddit,
    searchPosts,                                                             
  } from '../../services/redditApi';

export const loadPosts = createAsyncThunk(
  'posts/loadPosts',
  async (subreddit) => {
    return await fetchPostsByReddit(subreddit)
  }
);

export const loadSearchResults = createAsyncThunk('posts/loadSearchResults', async(query)=>{
    return await searchPosts(query)
})
const postsSlice = createSlice({
  name: 'posts',

  initialState: {
    items: [],
    isLoading: false,
    error: null
  },

  reducers : {
    clearPosts: (state) => {
        state.items = [];
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(loadPosts.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Failed to load posts';
      })
      .addCase(loadSearchResults.fulfilled, (state, action) => {
        state.items = action.payload;
      });
      
  },
});

export const{clearPosts} = postsSlice.actions
export default postsSlice.reducer;