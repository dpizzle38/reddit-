
import {createSlice} from 'reduxjs/toolkit';


const categoriesSlice = createSlice({
    name: 'categories',
    initialState : {
        selected : 'popular',
    },
    reducers: {
      setCategory : (state, action) =>{
        state.selected = action.payload
      }
    },

    
});

export const {setCategory} = categoriesSlice.actions;
export default categoriesSlice.reducer;