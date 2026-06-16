import {Link} from 'react-router-dom'


export default function Header(){
   return(
    <header>
     <Link to='/'>
     <h1>Reddit Client</h1>
     </Link>
    </header>
   )
}