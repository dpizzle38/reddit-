import { useState, useEffect} from 'react-router-dom';
import { useParams } from "react-router-dom";
import { fetchPostComments} from '../services/redditApi';

export default function postDetail(){
    const {id} = useParams();
    const [comments, setComments] = useState([]);

  useEffect(()=>{
    const loadComments = async()=>{
    const data = await fetchPostComments(id)
    setComments(data)
}

    loadComments()
  }, [id])

      return(
    <div>
        <h2>postDetail</h2>
        <h3>comments</h3>
   
    {comments.map((comment)=>
    (
        <div key={comment.id}>
          <p>{comment.body}</p>
        </div>
    )
    )}
    </div>
 )

}
