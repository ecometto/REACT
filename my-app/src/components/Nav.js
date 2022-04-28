import React from 'react';
import { NavLink } from 'react-router-dom'


import './nav.css';

const paginas = [
    {
        nombre: "contador",
        ruta: "/"
    },
    {
        nombre: "memes",
        ruta: "memes"
    },
    {
        nombre: "employees",
        ruta: "employees"
    },
    {
        nombre: "json",
        ruta: "json"
    },
]

const Nav = () => {
    return (

            <div className='navContainer '>
                <ul className='ul'>
                    {paginas.map((valor, clave) => {
                        return (
                            <li key={clave} className='listItem'>
                                <NavLink to={valor.ruta}>
                                    {valor.nombre}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>

    );
}

export default Nav;
