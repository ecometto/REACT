import React, { useState } from 'react';
import Boton from './Boton.js';
import './Contador.css';

function Contador() {
    const [num, setNum] = useState(0)

    const aumentar = () => {
        if ( num < 10 ) {
        setNum(num + 1)
        } else{
            alert ('ha llegado al liminte')
        }
    }
    return (
        <div className='d-flex justify-content-center m-5' >
            <div className='contador-container' >

                numero: <span className='fs-3'>{num} </span>

                <Boton funcion= {aumentar}
                text = "aceptar"                
                />
            </div>
        </div>

    )
}

export default Contador