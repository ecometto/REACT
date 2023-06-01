import React from 'react';

export default function Boton(props){

    return(
    
            <button className={props.name == "Aumentar"?"btn btn-success":"btn btn-danger"}
                    onClick={props.onClick}>
                {props.name}
            </button>

    )

}