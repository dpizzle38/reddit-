import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion'

export default function Postcard(){
    const navigate = useNavigate();
    return(
        <motion.div onClick ={navigate('/post/${post.id}')}
        initial = {{opacity:0, y:10}}
        animate = {{opacity:1, y:0}}
        whileover = {{scale: 1.02}}
        transition = {{duration: 0.2}}
        >

            <h3>{post.title}</h3>
            <p>{post.ups} | {post.num_comments}</p>
             {post.thumbnail && post.thumbnail.startswith("http") &&
             <img src={post.thumbnail} alt="" width="120" />
             }
        </motion.div>
    )
}