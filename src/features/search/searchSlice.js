import {createSlice} from '@reduxjs/toolkit';

const searchSlice = createSlice({

 name : 'search',
 initialState : {
    searchTerm : ''
 },
 reducers : {
    setSearch : (state, action) =>{
        state.searchTerm = action.payload;
    }
 },
});

export const{setSearch} = searchSlice.actions;
export default searchSlice.reducer;
