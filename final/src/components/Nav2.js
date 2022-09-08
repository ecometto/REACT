import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom'
import './nav2.css';

const Nav2 = () => {

    const [ShowMenu, setShowMenu] = useState(false);
    const navMenu = useRef()
    const btnMenu = useRef('Menu')

    const togleMenu = () => {
        if (!ShowMenu) {
            navMenu.current.style.marginTop = "0px"; btnMenu.current.innerText = "Close"
        } else {
            navMenu.current.style.marginTop = "-500px"
            btnMenu.current.innerText = "Menu"
        }
        setShowMenu(!ShowMenu)
    }

    return (
        <div className='navHeader'>
            <div className='iconContainer'>
                <img src="react/img/edgardo.jpg" alt="" />
            </div>

            return (
            <div className=' toggleable dark'>
                <div className='nav'>
                    <div className='iconContainer'>
                        <img src="react/img/m1.jpg" alt="" />
                    </div>
                    <div className='menu'>
                        <ul>
                            <li><a href="#">enlace</a></li>
                            <li><a href="#">enlace</a></li>
                            <li><a href="#">enlace</a></li>
                            <li><a href="#">enlace</a></li>
                        </ul>
                    </div>
                    <div className='buttons'>
                        <button ref={} className='btn toggleTheme dark'>Toggle Theme</button>
                        <button ref={} className='btn toggleTheme dark'>Menu..</button>
                    </div>
                </div>
            </div>
            )
        </div>
    )
}

export default Nav2;
