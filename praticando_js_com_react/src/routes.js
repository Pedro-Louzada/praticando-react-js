import Favoritos from 'pages/Favoritos';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Player from 'pages/Player';
import NaoEncontrado from 'pages/NaoEncontrado';
import PaginaBase from 'pages/PaginaBase';

function AppRoutes() {
    return (
        /*BrowserRouter ele avisa que vão existir rotas dentro dele*/
        <BrowserRouter>
            {/*Routes é nosso roteador de rotas, que vai buscando os paths e exibindo os elements de cada um*/}
            <Routes>
                {/*Route é a própria rota em si*/}
                <Route path='/' element={<PaginaBase />}>
                    <Route  index element={<Home />}></Route>
                    <Route path='Favoritos' element={<Favoritos />}></Route>
                    <Route path=':id' element={<Player />}></Route>
                    <Route path='*' element={<NaoEncontrado />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;