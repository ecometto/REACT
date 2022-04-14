import React, { useState } from 'react';

import './contador.css'


const Contador = () => {

    const numberStyle = {
        margin: "20px auto",
        width: "100px",
        background: "black",
        color: "rgb(254,254,254)",
        fontSize: "30px",
        padding: "10px",

        textAlign: "center",
    }
    const [numero, setNumero] = useState(0);
    const [contador, setContador] = useState(0);
    const [valor, setValor] = useState(0);

    const actualizaValor = () => {
        setValor(document.getElementById('input').value)
    }
    const incrementar = () => {
        setNumero(numero + parseInt(valor))
        setContador(contador + 1)
    }
    const decrementar = () => {
        setNumero(numero - parseInt(valor))
        setContador(contador - 1)
    }


    return (
        <div>
            <div className='mainContainer '>
                <div className='counterContainer'>
                    <p className="fw-bold"> Ingrese el multiplo que quiere incrementar / decrementar <br /></p>
                    <input 
                    onChange={actualizaValor} 
                    type="number" 
                    id='input' 
                    autocomplete="off"
                    />

                    <button onClick={decrementar}>Decrementar</button>
                    <button onClick={incrementar}>Incrementar</button>
                    <br />
                    <p>La multiplicacion de  {valor} x {contador} es: </p>
                    <p style={numberStyle}>{numero}</p>

                </div>

            </div>
        </div>
    );
}

export default Contador;
