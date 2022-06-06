import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = () => {
    return (
        <div className='d-flex justify-content-start align-items-center bg-light'>
            <ul className='d-flex list-unstyled '>
                <li className='m-1 p-2 bg-secondary rounded'><NavLink className="link-light fw-bold" to="/">Home</NavLink></li>
                <li className='m-1 p-2 bg-secondary rounded'><NavLink className="link-light fw-bold" to="/tareas">Tareas</NavLink></li>
            </ul>

        </div>

    );
}

export default Nav;