export default function Loader(){
    return(
        <div className="skeleton-container">
        {[1, 2, 3, 4, 5].map((i)=>
          (
            <div key={i} className="skeleton-card"/>


          )
    
           )
        
        }
        </div>
    )
}