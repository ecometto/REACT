import react, { useState, useEffect } from 'react'

const tasks = [
    { id: 1, titulo: "titulo tarea1", descripcion: "descripcion de la tarea 2. esta debe ser mas larga... saludos", status: true },
    { id: 2, titulo: "tarea2", descripcion: "Ahora cambio la descripcion de la tarea 2. esta debe ser mas larga... saludos", status: false },
    { id: 3, titulo: "titulo3", descripcion: "Des. Esta es la tarea3. desripcion de la tarea 3. esta debe ser mas larga... saludos", status: false },
    { id: 4, titulo: "titulo4", descripcion: "Des. Esta es la tarea4. desripcion de la tarser mas larga... saludos", status: true },
]

export default function Todos2() {
    const [Tasks, setTasks] = useState(tasks);

    
        useEffect(() => {
            sortTasks()
        },[])
    
    // funciones 
    const sortTasks = ()=>{
        const sortedTasks = tasks.sort((a, b) => (a.status > b.status) ? -1 : (a.status === b.status) ? ((a.id > b.id) ? 1 : -1) : 1)
        setTasks([...sortedTasks])
    }
    
    const finishTask = (taskToFinish)=>{
        console.log(Tasks);
 
        const provisoria = Tasks.map(cada=>{
               if(cada.id===taskToFinish){
                alert('encontrado' + cada.id)
            //    cada.status=false
            }
            })
            console.log(provisoria);
            setTasks([...provisoria])
        }

    return (
        <div className='container'>
            <div className="formulario bg-black text-light py-2 row justify-content-between">
                <div className='col-md-6 offset-md-1 '>
                    <h4 className='text-center'>Create New task</h4>
                    <div className=''>
                        <label htmlFor="titulo">Titulo: </label> <input className='form-control' id='titulo' type="text" /> <br />
                        <label htmlFor="descripcion">Descripcion:</label> <textarea className='form-control' id="descripcion " cols="30" rows="4"></textarea>
                        <button className='btn btn-success col-6 offset-3 my-2'>Create</button>
                    </div>
                </div>
                <div className='col-md-4 text-center d-none d-md-block'>
                    <img className="img-fluid" src="img/logo.svg" alt="" />
                </div>
            </div>
            <div className='listado my-3'>
                <h3>Listado de tareas</h3>
                {Tasks.map(function (tarea) {
                    return (
                        <div key={tarea.id} className={tarea.status===false?'bg-success text-decoration-line-through':''}>
                            <p className='fw-bold'>{tarea.id} - {tarea.titulo}</p>
                            <p>{tarea.descripcion}</p>
                            {tarea.status===true
                            ? <button className='btn btn-success' onClick={()=>finishTask(tarea.id)} >Finalizar</button>
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
