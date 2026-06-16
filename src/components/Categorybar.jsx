import { useDispatch} from "react-redux";
import { setCategory } from "../features/categories/categoriesSlice";

const categories = [
    "popular", "technology", "movies", "gaming", "sports", "science"
];

export default function CategoryBar (){
    const dispatch = useDispatch();

    return(
      <div>
        {categories.map((category)=>(
            <button key={category} onClick={()=> dispatch(setCategory(category))}>
              {category}
            </button>
        ))}
      </div>
    )
}