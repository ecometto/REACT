import React from 'react';
import { NavLink } from 'react-router-dom';

const Li = (props) => {
    return (

        <li className="nav-item">
            <NavLink className="nav-link link-light" aria-current="page" to={props.ruta}>{props.texto}</NavLink>
        </li>

    );
}

export default Li;