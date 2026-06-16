
import {createSlice} from 'reduxjs/toolkit';


const categoriesSlice = createSlice({
    name: 'categories',
    initialState : {
        selected : 'popular',
    },
    reducer: {
      setCategory : (state, action) =>{
        state.selected = action.payload
      }
    },

    
});

export const {setCategory} = categoriesSlice.actions;
export default categoriesSlice.reducer;