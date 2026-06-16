import { useNavigate } from "react-router-dom";

export default function Postcard(){
    const navigate = useNavigate();
    return(
        <div onClick ={navigate('/post/${post.id}')}>
            <h3>{post.title}</h3>
            <p>{post.ups} | {post.num_comments}</p>
             {post.thumbnail && post.thumbnail.startswith("http") &&
             <img src={post.thumbnail} alt="" width="120" />
             }
        </div>
    )
}