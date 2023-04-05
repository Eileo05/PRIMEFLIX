import './header.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            
            <Link className='logo' to='/'>PRIMEFLIX</Link>
            <Link className='favorito' to='/Favoritos'>MEUS FILMES</Link>

        </header>
    )
}
export default Header;