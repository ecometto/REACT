import React from 'react';

function Boton(props){
    return(

            <button onClick={props.funcion} className={props.clase=="aumentar"?"btn btn-primary": "btn btn-danger"}>
                {props.descripcion}
            </button>

    )

}

export default Boton;