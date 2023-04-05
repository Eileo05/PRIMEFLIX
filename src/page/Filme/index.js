import { useEffect, useState } from 'react';
import { useParams, useNavigate, } from "react-router-dom";
import Api from '../../service/Api';
import './filme.css';
import {toast, ToastContainer} from 'react-toastify';


function Filme() {

    const { id } = useParams();
    const [filme, SetFilmes] = useState({});
    const [loading, SetLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {

        async function LoadFilme() {
            await Api.get(`/movie/${id}`, {
                params: {
                    api_key: '767f4139243b614a71e39e6b9d0d1f88',
                    language: 'pt-BR',
                }
            })
                .then((response) => {
                    SetFilmes(response.data);
                    SetLoading(false);
                })
                .catch(() => {
                    navigate('/', { replace: true });
                    return;
                })
        }

        LoadFilme();

        return;

    }, [id, navigate])

    if (loading) {
        return (
            <div className='filme-load'>
                <h1>Carregando Detalhes</h1>
            </div>
        )
    }

    function salvarfilme() {
        const minhalista = localStorage.getItem('@PrimeFlix');
        let filmessalvos = JSON.parse(minhalista) || [];
        const hasfilme = filmessalvos.some((filmesalvos) => filmesalvos.id === filme.id);

        if (hasfilme) {
            toast.warn("Esse filme já esta na lista")
            return;
        }

        filmessalvos.push(filme);

        localStorage.setItem('@PrimeFlix', JSON.stringify(filmessalvos));
        toast.success('Filme salvo com sucesso');
    }


    return (
        <div className='info-filme'>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} loading='lazy' alt={filme.title}></img>
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average.toFixed(1)} /10</strong>
            <div className='area-buttons'>
                <button onClick={salvarfilme}>Salvar</button>
                <button>
                    <a target='blank' rel='external' href={`https://www.youtube.com/results?search_query=${filme.title}`}>Trailer</a>
                </button>
            </div>

        </div>
    )
}

export default Filme;