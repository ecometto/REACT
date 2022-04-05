import React from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom'

import Route1 from './components/Route1';
import Route2 from './components/Route2';
import NotFound from './components/NotFound';
import Users from './components/Users';

const App2 = () => {
    return (
        <BrowserRouter>
            <div>
                <ul>
                    <li><NavLink to="/r1">Ir a Ruta 1</NavLink></li>
                    <li><NavLink to="/r2">Ir a ruta 2</NavLink></li>
                    <li><NavLink to="/users">Ir a ruta USERS</NavLink></li>
                </ul>
            </div>
            <Routes>
                <Route path="/r1" element={<Route1 />} />
                <Route path="/r2" element={<Route2 />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/users" element={<Users />} />
            </Routes>

        </BrowserRouter>
    );
}

export default App2;
