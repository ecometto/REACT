import React from 'react';
import {NavLink} from 'react-router-dom'

 function Nav(props){
    return(
        <div>
            hola
            <NavLink to={props.ruta} > holasss</NavLink>    
            {/* <NavLink to={props.ruta}>{props.texto}</NavLink> */}
        </div>

    )
}


export default Nav;