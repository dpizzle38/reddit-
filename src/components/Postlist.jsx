import { useSelector, useDispatch } from 'react-redux';
import Postcard from './Postcard';
import Loader from './Loader';
import Error from './Error';
import { loadPosts } from '../features/posts/postsSlice';

export default function Postlist(){
    const {items, isLoading, error} = useSelector((state)=>state.posts);

    if(isLoading) return <Loader/>
    if(error) return <p>Error loading state</p>
    
      const dispatch = useDispatch();

      if(error){
        return(
          
            <Error onRetry={()=>dispatch(loadPosts('popular'))} message="Failed to load posts"/>
          
        )
      }

    return (
        <div>
         {
            items.map((post)=>(
              <Postcard key={post.id} post={post} />  
            ))
         }

            
        </div>
    );
}