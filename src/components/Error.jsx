export default function({message, onRetry}){
    return(
        <div style={{padding:20}}>
             <h3>Something went wrong</h3> 
             <p>{message}</p> 

             <button onClick={onRetry}>
                Try again
             </button>
        </div>
      
        
    );
}