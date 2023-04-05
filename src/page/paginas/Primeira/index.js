import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


import Api from '../../../service/Api';


function Primeira() {

    const [filmes, SetFilmes] = useState([]);

    const [loading, SetLoading] = useState([true]);

    useEffect(() => {

        async function LoadFilme() {
            const response = await Api.get('movie/now_playing', {
                params: {
                    api_key: '767f4139243b614a71e39e6b9d0d1f88',
                    language: 'pt-BR',
                    page: 2,
                },

            })

            SetFilmes(response.data.results.slice(0, 10));
            SetLoading(false);
            console.log(response)

        }

        LoadFilme();
    }, [])

    if (loading) {
        return (
            <div className='loading'>
                <h2>CARREGANDO...</h2>
            </div>
        )
    }

    return (
        <div className='container'>
            <div className='lista-filmes'> {filmes.map((filme) => {
                return (
                    <article key={filme.id}>
                        <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} loading='lazy' alt={filme.title}></img>
                        <strong>{filme.title}</strong>
                        <h5>{`Estreia: ${filme.release_date}`}</h5>
                        <Link to={`/filme/${filme.id}`}>+</Link>
                    </article>
                )

            })}
            </div>
           
            <div className='bnt'>
            <Link to={`/`}>Voltar</Link>
            </div>


        </div>
    )
}

export default Primeira;