import React, { useState } from 'react';

function Click() {
    const [num, setNum] = useState(0);

    function aumentar() {
        let multiplo = document.getElementById('input').value
        setNum(num + Number(multiplo))
    }
    function disminuir() {
        let multiplo = document.getElementById('input').value
        setNum(num - Number(multiplo))
    }

    return (
        <div className='bg-light d-flex justify-content-center '>
            <div>
                <h2>  Click en los botones para aumentar o disminuir  </h2>
                <input type="number" id="input" autoComplete='off'/> <br /><br />
                <button onClick={aumentar}>Aumentar</button>
                <button onClick={disminuir}>Disminuir</button>

                <p>El numero final es:
                    <span className="mx-3 fs-3">{num}</span>
                </p>
            </div>

        </div>
    )
}

export default Click