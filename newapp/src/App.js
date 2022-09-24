import { useState, useEffect } from 'react';
import './App.css'
import Task from './components/Task';



function App() {
    // definicion de variables -------- 
    const lista = [
        { titulo: "Titulo tarea 1", fechaC: "20/10/2020", fechaV: "21/10/2020", estado: true },
        { titulo: "Titulo tarea 2", fechaC: "21/10/2020", fechaV: "22/10/2020", estado: false },
        { titulo: "Titulo tarea 3", fechaC: "21/10/2020", fechaV: "25/10/2020", estado: true },
        { titulo: "Titulo tarea 4", fechaC: "21/10/2020", fechaV: "25/10/2020", estado: false },
        { titulo: "Titulo tarea 5", fechaC: "22/10/2020", fechaV: "26/10/2020", estado: true },
    ]

    const [listaTareas, setListaTareas] = useState(lista);

    useEffect(() => {
        ordenarListaTareas()
    }, [])

    const ordenarListaTareas = () => {
        console.log('lqp');
        const provisoria = listaTareas.sort(function (a, b) {
            if (a.estado > b.estado) {
                return -1;
            }
            if (a.estado < b.estado) {
                return 1;
            }
            else {
                if (a.fechaV > b.fechaV) {
                    return 1;
                }
                if (a.fechaV < b.fechaV) {
                    return -1;
                }
            }
        })
        console.log(provisoria);
        setListaTareas([...provisoria])
    }


    // retorno renderizado ------- 
    return (
        <div className="container ">
            <h1 className="text-center">AGENDA PERSONAL DE TAREAS</h1>
            <div className="row">
                <div className="col-8 my-2 ">
                    <span className="fs-3 text-center fw-bold"> Formulario: </span>
                    <div className="form-group">
                        <label htmlFor="input"> Descripcion</label>
                        <input className="form-control" type="text" name="" id="input" placeholder="Ingrese la Tarea" />
                        <button type="submit" className="btn btn-success my-2">Ingresar</button>
                    </div>
                </div>
                <hr />
                <div className="col-8 offset-2">
                    <h4 className="fs-3 text-center fw-bold"> Lista de Tareas: </h4>

                    {/* ------------ listando tareas ----------  */}
                    {
                        listaTareas.map(element => {
                            return (
                                <Task key={element.titulo} data={element} />
                            )
                        }

                        )
                    }



                </div>
            </div>
        </div>
    );
}


export default App;
