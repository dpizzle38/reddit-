import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { loadSearchResults } from '../features/posts/postsSlice';


export default function Searchbar (){

  const [value, setValue] = useState('');
  const dispatch = useDispatch();
    const handleSearch = (e) =>{
      e.preventDefault()
        if(value.trim()){
            dispatch(loadSearchResults(value))
        }
    }



   return(
  <form onSubmit={(e)=>{e.preventDefault();handleSearch()}}>
    <input type="text" placeholder="Search Reddit..." value ={value} onChange={(e)=>setValue(e.target.value)}/>
    <button type="submit">Search</button>
  </form>
   )



}