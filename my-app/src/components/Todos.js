import React, { useState } from 'react'

export default function Todos() {
    const [id, setId] = useState(1);
    const [titulo, setTitulo] = useState("");
    const [listaTareas, setListaTareas] = useState([]);

    // funciones 
    const handleAgregar = () => {
        let titulo = document.getElementById('input').value
        let datos = { "id": id, "titulo": titulo, "done": false }
        let temp = [...listaTareas]
        temp.push(datos)
        setListaTareas(temp)
        setId(id + 1)
    }

    const handleUpdate = (e, id) => {
        console.log(id);
        console.log(e.target.value);
        let temp = [...listaTareas]
        let fila = temp.find(item => item.id == id)
        fila.titulo = e.target.value 
        console.log(temp);
        setListaTareas(temp)
        setTitulo(e.target.value)

    }

    // const handleEditar = (id) => {
    //     let inputTitulo = document.getElementById('')
    //     let temp = [...listaTareas]
    //     let fila = temp.find(item => item.id == id)
    //     fila.titulo = inputTitulo
    //     console.log(temp);
    // }

    const handleEliminar = (id) => {
        console.log(id);
        let temp = listaTareas.filter((item) => item.id != id)

        console.log(temp)
        setListaTareas(temp)

    }

    return (
        <div className='d-flex  justify-items-center flex-column align-items-center text-center'>
            <input id="input" type="text" placeholder='ingrese descripcion de tarea' />
            <button onClick={handleAgregar}>Agregar</button>
            <div>
                <ul>
                    {
                        listaTareas.map((item) => {
                            return (
                                <li key={item.id} className="d-flex gap-3">
                                    <input id={item.id} onChange={(e) => handleUpdate(e, item.id)} type="text" value={item.titulo} />
                                    <button className='btn btn-sm btn-warning' onClick={() => handleEditar(item.id)}>Editar</button>
                                    <button className='btn btn-sm btn-danger' onClick={() => handleEliminar(item.id)}>Eliminar</button>
                                </li>
                            )
                        }

                        )
                    }
                </ul>

                <p>numero de registros: {id} <br />
                    titulo actual: {titulo}</p>

            </div>
        </div>
    )
}
