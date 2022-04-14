import React from 'react';

import './new.css';

const paginas = [
    {
        nombre: "contador",
        direccion: "./contador"
    },
    {
        nombre: "meme",
        direccion: "./meme"
    },
    {
        nombre: "employee",
        direccion: "./employee"
    },
]

const Nav = () => {
    return (
        <div className='navContainer '>
            <ul className='ul'>
                {paginas.map((valor, clave) => {
                    return (
                        <li key={clave} className='listItem'>
                            <a href="">
                                {valor.nombre}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Nav;
