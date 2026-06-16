import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import Postlist from '../components/Postlist';
import Searchbar from '../components/Searchbar';
import CategoryBar from '../components/Categorybar';
import { loadPosts } from "../features/posts/postsSlice";

export default function Home(){
    const dispatch = useDispatch();
    const category = useSelector((state)=>state.categories.selected);
    useEffect(()=>{
        dispatch(loadPosts(category))
    },[category, dispatch]);
    return(
        <div>
            <Searchbar/>
            <CategoryBar/>
            <Postlist/>
        </div>
    );
}
