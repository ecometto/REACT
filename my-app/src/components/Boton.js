import React from 'react';

function Boton(props) {
    return (
        <div>
            <button onClick = { props.funcion} type='submit'> {props.text} </button>
        </div>
    )

}

export default Boton;