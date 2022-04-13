import React, { useState } from 'react';



const Contador = () => {
    
    const [numero, setNumero] = useState(0);
    const [contador, setContador] = useState(0);

    let valor = parseInt(document.getElementById('input').value)

    const incrementar = ()=>{
        setNumero(numero + valor)
    }

    const decrementar = ()=>{
        setNumero(numero - valor)
    }


    return (
        <div>
            <div className='container d-flex justify-content-center m-5'>
                <div className='d-flex justify-content-center p-5 flex-column'>
                    Ingrese el numero que quiere incrementar / decrementar <br />
                    <input type="text" id='input'/>

                    <br />
              
                    <p>La multiplicacion de {contador} x {valor} es: </p>
                    <p>{numero}</p>

                    <button onClick={decrementar}>Decrementar</button>
                    <button onClick={incrementar}>Incrementar</button>
                </div>

            </div>
        </div>
    );
}

export default Contador;
