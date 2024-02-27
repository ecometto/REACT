import { useState, useEffect, createContext } from "react"
import { OriginalData } from "../assets/data";

// NOMBRE DEL CONTEXTO (SE USA CUANDO SE LLAMA CON 'useContext')
export const Contenedor = createContext()

// NOMBRE DEL COMPONENTE (SE USA CUANDO EN EL main.js PARA ENGLOBAR A app.js)
export function TaskContextProvider(props) {

    const [data, setData] = useState(OriginalData);

    useEffect(() => {
        setData(OriginalData)
    }, [])


    var max = 0

    const addTask = (title, description) => {
        data.map(e => {
            max < e.id ? max = e.id : null
        })

        const newTask = {
            id: max + 1,
            title: title,
            description: description
        }

        setData([...data, newTask])
    }

    const handleEdit = (btn) => {
        let id = parseInt(btn.target.getAttribute('data-id'))
        console.log('edditing' + id)

    }

    const handleDelete = (btn) => {
        let id = parseInt(btn.target.getAttribute('data-id'))
        const confirmDelete = window.confirm('¿Estás seguro de que quieres eliminar la tarea ' + id + ' ?');
        if (confirmDelete) {
            let newTaskArray = data.filter((element) => {
                return element.id !== id
            })
            setData(newTaskArray)
        }
    }

// ver... muy importante agregarlo los datos (values) como props que compartirá con el resto de los componentes) 
    return (
        <Contenedor.Provider value={{
            data,
            setData,
            max,
            addTask,
            handleDelete,
            handleEdit
        }}>
            {props.children}
        </Contenedor.Provider>
    )
    
}
