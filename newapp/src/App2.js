import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// MODULES 
import Navbar from './components/Navbar.js'

// PAGES 
import HOME from './pages/Home.js';
import Route1 from './pages/Route1';
import Route2 from './pages/Route2';
import NotFound from './pages/NotFound';
import Users from './pages/Users';

const App2 = () => {

    return (

        <BrowserRouter>

            <Navbar />
            <div className='container bg-light p-5'>
                <Routes>
                    <Route path="r1" element={<Route1 />} />
                    <Route path="r2" element={<Route2 />} />
                    <Route path="users" element={<Users />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/" element={<HOME />} />



                </Routes>
            </div>
            <Navbar />
        </BrowserRouter>
    );
}
