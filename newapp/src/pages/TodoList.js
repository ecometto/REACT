import { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';



function TodoList() {
    // definicion de variables -------- 
    const lista = [
        { id: 1, titulo: "Titulo tarea 1", fechaC: "20/10/2020", fechaV: "21/10/2020", estado: true },
        { id: 2, titulo: "Titulo tarea 2", fechaC: "21/10/2020", fechaV: "22/10/2020", estado: false },
        { id: 3, titulo: "Titulo tarea 3", fechaC: "21/10/2020", fechaV: "25/10/2020", estado: true },
        { id: 4, titulo: "Titulo tarea 4", fechaC: "21/10/2020", fechaV: "25/10/2020", estado: false },
        { id: 5, titulo: "Titulo tarea 5", fechaC: "22/10/2020", fechaV: "26/10/2020", estado: true },
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

            <TaskList tasklist={listaTareas} />

        </div>
    );
}


export default TodoList;
