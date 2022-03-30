import React from 'react';

const mystyle = {
    color: "red",
    fontSize: "25px",
    borderRadius: "10px",
    boxShadow: "2px 2px 2px blue"
}

function Boton(props) {
    return (
        <div>
            <button style={mystyle} onClick = {props.funcion} type='submit'> {props.text} </button>
        </div>
    )

}

export default Boton;