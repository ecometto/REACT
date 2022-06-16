import React from 'react'

export default function Tarea({ tarea, editar, eliminar, estado }) {


    if (estado === "pendiente") {
        return (

            <div>
                <li className="d-flex justify-content-between bg-light m-1">
                    <p>{tarea.id} - {tarea.titulo} - {!tarea.finalizado ? "pendiente" : "finalizada"} </p>
                    <div>
                        <button onClick={(e) => editar(e, tarea.id)} className='btn btn-sm btn-warning m-1'>Editar</button>
                        <button onClick={(e) => eliminar(e, tarea.id)} className='btn btn-sm btn-danger m-1'>Eliminar</button>
                    </div>
                </li>
            </div>
        )
    }
    else {
        return (

            <div>
                <li className="d-flex justify-content-between bg-light m-1">
                    <p>{tarea.id} - {tarea.titulo} - {!tarea.finalizado ? "pendiente" : "finalizada"} </p>
                    {/* <div>
                        <button onClick={(e) => editar(e, tarea.id)} className='btn btn-sm btn-warning m-1'>Editar</button>
                        <button onClick={(e) => eliminar(e, tarea.id)} className='btn btn-sm btn-danger m-1'>Eliminar</button>
                    </div> */}
                </li>
            </div>
        )
    }

}    

