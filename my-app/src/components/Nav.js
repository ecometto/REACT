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
        nombre: "Fetch Api",
        ruta: "fetch"
    },
    {
        nombre: "Lista Tareas",
        ruta: "tareas"
    },
]

const Nav = () => {
    return (

        <div className='navContainer '>

        <div>
                <a className="btn btn-danger m-1 p-1" href="https://ecometto.com.ar/portafolio.php">Volver</a>
        </div>

            <ul className='ul d-flex justify-content-center'>


                <div className='d-flex'>
                    {paginas.map((valor, clave) => {
                        return (
                            <li key={clave} className='listItem'>
                                <NavLink to={valor.ruta}>
                                    {valor.nombre}
                                </NavLink>
                            </li>
                        )
                    })}
                </div>
            </ul>
        </div>

    );
}

export default Nav;
