import React, { useRef, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './nav.css'


const Nav = () => {
    const [visible, setVisible] = useState("d-flex list-unstyled");
    const ul = useRef('')

    useEffect(() => {
        window.addEventListener('resize', handleResize)
    });
    const handleResize = ()=>{
        let x = window.innerWidth
        if(x > 970){
            ul.current.style.display = "flex"
        } else if(x < 970){
            ul.current.style.display = "none"
        }
        
    }

    const viewMenu = (e)=>{
        if (ul.current.style.display === "flex") {
            ul.current.style.transition = "all 2s";
            ul.current.style.display = "flex";
          } else {
            ul.current.style.transition = "all 2s";
            ul.current.style.display = "flex";
          }
     }
     
    return (
        <div className='navBar container-fluid'>
            {/* <div className='logo'>
                <a className="btn btn-danger" href="https://ecometto.com.ar/portafolio.php">Volver</a>
            </div> */}
            <div>
                <ul className="navUl" ref={ul}  onClick={viewMenu}>
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
                    {/* <li className='navItem'>
                        <NavLink className="link-dark fw-bold" to="/clima">Clima</NavLink>
                    </li> */}
                </ul>
            </div>
            <div className='menu' onClick={viewMenu}>
                menu <br />
                <i className="bi bi-three-dots menuToggle"></i>  
            </div>
        </div>
    );
}

export default Nav;
