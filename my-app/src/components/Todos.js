import React, { useState } from 'react'

export default function Todos() {
    const [listaTareas, setListaTareas] = useState([]);
    const [titulo, setTitulo] = useState("");
    const [id, setId] = useState(1)



    // funciones 
    const agregar = () => {
        let nuevaTarea = {
            "id": id,
            "titulo": titulo,
            "finalizado": false
        }
        setListaTareas([...listaTareas, nuevaTarea])
        setId(id + 1)
        document.getElementById('titulo').value = ""
        document.getElementById('titulo').focus()
    }

    const actualizarTitulo = (e) => {
        setTitulo(e.target.value)
    }

    const eliminar = ((e, id) => {

        let confirmar = window.confirm("seguro que desea eliminar?");
        if (confirmar) {
            let msg = document.getElementById('msg')
            msg.innerHTML = "Elemento Eliminado.."
            msg.classList.add('alert-danger')

          setTimeout(() => {
            msg.innerHTML = ""
            msg.classList.remove('alert-danger')
          }, 1500);

            let temp = listaTareas.filter((tarea) => tarea.id != id)
            setListaTareas(temp)
        }
    })
    const editar = (e, id) => {
        let titulo = listaTareas.find(tarea => tarea.id == id)
        let nuevoTitulo = prompt('ingrese el nuevo valor', titulo.titulo)

        titulo.titulo = nuevoTitulo
        let temp = [...listaTareas]
        setListaTareas(temp)
    }

    const cargar = (e) => {
        if (e.keyCode == 13) {
            agregar();
        }
    }

    return (
        <div className='container'>
            <h3 className='text-center m-2 p-2 bg-light'>APLICACION DE TAREAS A REALIZAR</h3>

            <div className="d-flex col-6 offset-md-3">
                <input className='form-control me-2' type="text"
                    name="titulo" id="titulo"
                    placeholder='Ingrese su tarea aqui'
                    onChange={actualizarTitulo}
                    onKeyUp={(e) => cargar(e)}
                />
                <button className='btn btn-success btn-sm' onClick={agregar}>Agregar</button>

            </div>
            <p id='msg' style={{height: "40px"}} className="p-2"></p>
            <h5><u>LISTA DE TAREAS</u></h5>
            <div className='col-8 offset-md-2'>
                {
                    listaTareas.map((tarea) => {
                        return (
                            <li key={tarea.id} className="d-flex justify-content-between bg-light m-1">
                                <p>{tarea.id} - {tarea.titulo} - {tarea.finalizado} </p>
                                <div>
                                    <button onClick={(e) => editar(e, tarea.id)} className='btn btn-sm btn-warning m-1'>Editar</button>
                                    <button onClick={(e) => eliminar(e, tarea.id)} className='btn btn-sm btn-danger m-1'>Eliminar</button>
                                </div>
                            </li>
                        )
                    })
                }
            </div>
        </div>

    )


}
