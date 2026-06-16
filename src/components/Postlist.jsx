import { useSelector } from 'react-redux';
import Postcard from 'Postcard';


export default function Postlist(){
    const {items, loading, error} = useSelector((state)=>state.posts);

    if(loading) return <p>loading...</p>
    if(error) return <p>Error loading state</p>

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