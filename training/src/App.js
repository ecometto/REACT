import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Fotos } from "./components/Fotos";
import Calculator from './components/Calculator';
import Cripto from './components/Cripto';
import NavBar from "./components/NavBar";
import DatatableMUI from "./components/DatatableMUIadvance";
import Home from "./components/Home";
import Error from './components/Error';

function App() {
    return (

        <BrowserRouter>
            <NavBar />

            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'home'} element={<Home />} />
                <Route path={'cripto'} element={<Cripto />}></Route>
                <Route path={'fotos'} element={<Fotos />}></Route>
                <Route path={'datatable'} element={<DatatableMUI />}></Route>
                <Route path={'calculator'} element={<Calculator />}></Route>

                <Route path={'/*'} element={<Error />} />
            </Routes>

        </BrowserRouter>
    );
}

export default App;
