import { useState, useEffect, useRef } from 'react'
import './todos2.css'

let tasks = []
const datos = localStorage.getItem('tasks')
if(datos){
    tasks = JSON.parse(datos)
    console.log(tasks);
} 

export default function Todos2() {
    const [Tasks, setTasks] = useState(tasks);
    const titulo = useRef(null)
    const descripcion = useRef(null)


    useEffect(() => {
        sortTasks(Tasks)
    }, [])

    // funciones 
    const sortTasks = (taskList) => {
        const sortedTasks = taskList.sort((a, b) => (a.status > b.status) ? -1 : (a.status === b.status) ? ((a.id > b.id) ? 1 : -1) : 1)
        setTasks([...sortedTasks])
    }

    const finishTask = (taskToFinish) => {
        const provisoria = Tasks.map(cada => {
            console.log(cada.id);
            console.log(taskToFinish);
            return (
                cada.id === taskToFinish
                    ? { ...cada, status: false }
                    : cada)
        }
        )
        console.log(provisoria);
        sortTasks(provisoria)
        console.log(provisoria);

        setTasks([...provisoria])
    }

    const getNext = (taskList) => {
        let max = 0
        taskList.map(cada => {
            cada.id > max
                ? max = cada.id
                : max = max
        }
        )
        return max+1
    }

    const addTask = (e) => {
        e.preventDefault();
        let id =  getNext(Tasks)
        let title = titulo.current.value;
        let description = descripcion.current.value;
        const provisoria = [...Tasks, { id: id, titulo: title, descripcion: description, status: true }]
        console.log(provisoria);
        sortTasks(provisoria)
        setTasks(provisoria)
        let provisoriaText =  JSON.stringify(provisoria)
        localStorage.setItem('tasks',provisoriaText)

        titulo.current.value = ""
        descripcion.current.value=""
        titulo.current.focus()
    }

    const reset = ()=>{
        let res = window.confirm("sure?");
        if(res){
        localStorage.setItem('tasks','')
        setTasks([])}
    }

    return (
        <div className='container'>
            <div className="formulario bg-black text-light py-2 row justify-content-between">
                <div className='col-md-6 offset-md-1 '>
                    <h4 className='text-center'>Create New task</h4>
                    <form className='position-relative' onSubmit={(e) => addTask(e)}>
                        <label htmlFor="titulo">Titulo: </label> <input ref={titulo} className='form-control' id='titulo' type="text" /> <br />
                        <label htmlFor="descripcion">Descripcion:</label> <textarea ref={descripcion} className='form-control' id="descripcion " cols="30" rows="4"></textarea>
                        <button className='btn btn-success col-6 offset-3 my-2'>Create</button>
                        <p className='reset' onClick={reset}>RESET</p>
                    </form>
                </div>
                <div className='col-md-4 text-center d-none d-md-block'>
                    <img className="img-fluid" src="img/logo.svg" alt="" />
                </div>
            </div>

            <div className='listado my-3'>
                <h3>Listado de tareas</h3>
                {Tasks.map(function (tarea) {
                    return (
                        <div key={tarea.id} className={tarea.status === false ? 'bg-success text-decoration-line-through' : ''}>
                            <p className='fw-bold'>{tarea.id} - {tarea.titulo}</p>
                            <p>{tarea.descripcion}</p>
                            {tarea.status === true
                                ? <button className='btn btn-success' onClick={() => finishTask(tarea.id)} >Finalizar</button>
                                : ""
                            }

                            <hr />
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}
