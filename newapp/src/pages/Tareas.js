import React, { useEffect, useState } from 'react';
import './tareas.css';

// import modules
import Tarea from './Tarea';

export default function Tareas() {
    const [listaTareas, setListaTareas] = useState([]);
    const [titulo, setTitulo] = useState("");
    const [id, setId] = useState(1)

useEffect(()=>{
    // alert('This is a welcome messagge. Enjoy creating Task')
}

,[])

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

            let temp = listaTareas.filter((tarea) => tarea.id !== id)
            setListaTareas(temp)
        }
    })
    const editar = (e, id) => {
        let titulo = listaTareas.find(tarea => tarea.id === id)
        let nuevoTitulo = prompt('ingrese el nuevo valor', titulo.titulo)

        titulo.titulo = nuevoTitulo
        let temp = [...listaTareas]
        setListaTareas(temp)
    }

    const cargar = (e) => {
        if (e.keyCode === 13) {
            agregar();
        }
    }





    // rendering
    return (
        <div>

            <h1 className='text-center my-4'>ToDo LIST</h1>
            <div className='title-container'>
                <p>Here you can see a classic ToDo list. You'll be able to create, edit and close tasks.</p>
                <p><u><b>Used tools:</b></u> Components, UseState, Props, UseEffect, others</p>
            </div>

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
                <p id='msg' style={{ height: "40px" }} className="p-2"></p>
                <h5 className='text-center'><u>LISTA DE TAREAS</u></h5>
                <div className='col-8 offset-md-2'>
                    
                    {
                        listaTareas.map((tarea) => {
                            return (

                        < Tarea  key={tarea.id} //props: 
                        tarea={tarea} 
                        editar={editar} 
                        eliminar={eliminar}
                        />

    
                )
                        })
                    }
                </div>

            </div>
        </div>

    )
}
