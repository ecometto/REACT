import React from 'react';
import {useRef} from 'react';
import './nav2.css';

export default function Nav2() {
const theme = useRef('');
const menu = useRef('');


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
        <div>
          <button ref={theme} className='btn toggleTheme dark'>Toggle Theme</button>
          <button ref={menu} className='btn toggleTheme dark'>Menu..</button>
        </div>
</div>
    </div>
  )
}
