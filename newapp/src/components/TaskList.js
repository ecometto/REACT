import { useState, useEffect } from 'react';
import Form from './Form';
import Task from './Task';


export default function TaskList({ tasklist }) {


    // retorno renderizado ------- 
    return (
        <div className="container ">
            <h1 className="text-center">AGENDA DE TAREAS</h1>
            <div className="row">
                {/* FORMULARIO ----------------  */}
                <div className="col-12 my-2 bg-light ">
                    <Form />
                </div>

                <hr />
                <hr />


                {/* LISTA TAREAS ------------  */}
                <div className="col-8 offset-2">
                    <h4 className="fs-3 text-center fw-bold"> Lista de Tareas: </h4>

                    {/* ------------ listando tareas ----------  */}
                    { tasklist.map(element => {
                            return (
                                <Task key={element.id} data={element} />
                            )
                        })
                    }



                </div>
            </div>
        </div>
    );
}

