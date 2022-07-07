import React, { useRef, useState } from 'react';
import {NavLink} from 'react-router-dom'
import './nav2.css';

const Nav2 = () => {
    
const [ShowMenu, setShowMenu] = useState(false);
const navMenu = useRef()
const btnMenu = useRef('Menu')

const togleMenu =()=>{
     if(!ShowMenu){
        navMenu.current.style.marginTop="0px"; btnMenu.current.innerText = "Close"
     } else{
    navMenu.current.style.marginTop="-500px"
    btnMenu.current.innerText = "Menu"
     }
    setShowMenu(!ShowMenu)
}

    return (
        <div className='navHeader'>
            <div className='iconContainer'>
                <img src="react/img/edgardo.jpg" alt="" />
            </div>

            <div className='navMenu' ref={navMenu}>
                <ul onClick={togleMenu}>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink  to="/tareas">ToDo List</NavLink></li>
                    <li><NavLink to="/galery">Galery</NavLink></li>
                    <li><NavLink to="/juegos">Juegos</NavLink></li>
                    <li><NavLink to="/personas">Buscador</NavLink></li>
                    <li><NavLink to="/clima">Clima</NavLink></li>

                </ul>
            </div>
            
            <div className='buttons'>
                <button className='button btn-theme'>Theme</button>
                <button className='button btn-menu' ref={btnMenu} onClick={togleMenu}>Menu</button>
            </div>
        </div>   
    );
}

export default Nav2;
