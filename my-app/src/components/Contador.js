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
        setNumero(0)
        setContador(0)
    }
    const incrementar = () => {
        if (document.getElementById('input').value != 0) {
            setNumero(numero + parseInt(valor))
            setContador(contador + 1)
        } else { alert("Debe ingresar un valor válido") }
    }
    const decrementar = () => {
        if (document.getElementById('input').value != 0) {
            setNumero(numero - parseInt(valor))
            setContador(contador - 1)
        } else { alert("Debe ingresar un valor válido") }
    }
    const clear = () => {
        setNumero(0)
        setContador(0)
        document.getElementById('input').focus()
        document.getElementById('input').value = 0
    }


    return (
        <div>
            <div className='mainContainer '>
                <div className='counterContainer'>
                    <p className="fw-bold"> Ingrese el multiplo que quiere incrementar / decrementar </p>
                    <input
                        onChange={actualizaValor}
                        type="number"
                        id='input'
                        autoComplete="off"
                    />

                    <button onClick={incrementar}>Incrementar</button>
                    <button onClick={decrementar}>Decrementar</button>
                    <br />
                    <p>La multiplicacion de  {valor} x {contador} es: </p>
                    <p style={numberStyle}>{numero}</p>
      
                    <button onClick={clear}>Limpiar</button>
                </div>

            </div>
        </div>
    );
}

export default Contador;
