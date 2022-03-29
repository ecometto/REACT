import React, { useState } from 'react';
import Boton from './Boton.js';
import './Contador.css';

function Contador() {
    const [num, setNum] = useState(0)

    const aumentar = () => setNum(num + 1)

    return (
        <div className='d-flex justify-content-center' >
            <div className='contador-container' >
                {/* <button onClick={aumentar} type='submit'> Aumentar </button> */}
                numero: <span className='fs-3'>{num} </span>
                <Boton 
                onClick={aumentar}
                text = "aceptar"                
                />
            </div>
        </div>

    )
}

export default Contador