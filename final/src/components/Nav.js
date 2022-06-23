import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './nav.css'

const Nav = () => {

    const [visible, setVisible] = useState("d-flex list-unstyled");

    return (
        <div className='navBar'>
            <div className='logo'>
                <a className="btn btn-danger" href="https://ecometto.com.ar/portafolio.php">Volver</a>
            </div>
            <div className='listas'>
                <ul className="d-flex justify-items-center">
                    <li className='navItem'>
                        <NavLink className="link-dark fw-bold" to="/">Home</NavLink>
                    </li>
                    <li className='navItem'>
                        <NavLink className="link-dark fw-bold" to="/tareas">ToDo List</NavLink>
                    </li>
                    <li className='navItem'>
                        <NavLink className="link-dark fw-bold" to="/galery">Galery</NavLink>
                    </li>
                    <li className='navItem'>
                        <NavLink className="link-dark fw-bold" to="/juegos">Juegos</NavLink>
                    </li>
                    <li className='navItem'>
                        <NavLink className="link-dark fw-bold" to="/personas">Guia Personas</NavLink>
                    </li>
                    <li className='navItem'>
                        <NavLink className="link-dark fw-bold" to="/clima">Clima</NavLink>
                    </li>
                </ul>
            </div>
            <div className='menu'>
                <button id='menuToggle' > MENU  </button>
            </div>
        </div>
    );
}

export default Nav;
