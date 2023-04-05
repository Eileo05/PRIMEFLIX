import { Link } from "react-router-dom";
import './erro.css';


function Error(){
    return(
      <div className="msg-erro">
         <h1>404</h1>
         <h2>Pagina não encontrada</h2> <br/>
         <Link to={'/'}>Veja todos os filmes</Link>
      </div>
    )
}

export default Error;