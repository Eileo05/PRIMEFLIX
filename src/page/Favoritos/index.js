import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './favoritos.css';
import {ToastContainer} from 'react-toastify';



function Favoritos() {

    const [filmes, SetFilmes] = useState([])

    useEffect(() => {
        const minhalista = localStorage.getItem('@PrimeFlix');
        SetFilmes(JSON.parse(minhalista) || [])

    }, [])

    function excluirfilme(id) {

        let filtrofilmes = filmes.filter((item) => { return (item.id !== id) })
        SetFilmes(filtrofilmes);

        localStorage.setItem('@PrimeFlix',JSON.stringify(filtrofilmes))

    }

    return (
        <div className='meusfilmes'>
            <h1>MEUS FILMES</h1>
            
            <div className='filmesvazio'>
            {filmes.length === 0&& <span>Você não possui filmes salvos!</span>}
            {filmes.length ===0&&  <Link to={'/'}>Voltar</Link>}
            </div>
           
            <ul>
                {filmes.map((item) => {
                    return (
                        <li key={item.id}>
                            <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title}></img>
                            <div>
                                <span>{item.title}</span>
                                <Link to={`/filme/${item.id}`}>Ver detalhe</Link>
                                <button onClick={()=>excluirfilme(item.id)}>Excluir</button>
                            </div>

                        </li>
                    )
                })}
            </ul>

        </div>
    )
}

export default Favoritos;