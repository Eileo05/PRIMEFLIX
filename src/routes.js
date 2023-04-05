import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './page/Home';
import Filme from './page/Filme';
import Header from "./component/Header";
import Error from "./page/Error";
import Favoritos from "./page/Favoritos";
import Primeira from "./page/paginas/Primeira";


function RoutesApp() {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={<Home/>} />

                <Route path='/filme/:id' element={<Filme/>} />

                <Route path="/favoritos" element={<Favoritos/>} />
                
                <Route path="/primeira" element={<Primeira/>} />
                
                <Route path="*" element={<Error/>}/>

            </Routes>

        </BrowserRouter>
    )
}

export default RoutesApp;