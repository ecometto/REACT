import React, { useState, useEffect } from 'react';


const Fetch = () => {

    const [person, setPerson] = useState()


    const fetchUsers = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        setPerson(data)
    }

    const delToDo = (indexItem) => {

            setPerson((person) =>
              person.filter(todo =>
                  todo.id !== (indexItem-1)
              )
            
                  );

    
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div id="contenedor">
            <h1>listado de Personas</h1>
            <h3>From 'https://jsonplaceholder.typicode.com/users'</h3>
            <hr />
            <ul id="listTodo">
                {!person ? "cargando Data" :
                    person.map((persona) => {
                        return (
                            <li key={persona.id} id={persona.id}>ID: {persona.id} - Datos Personales: {persona.name} - {persona.email}. 
                                <button onClick={()=>delToDo(persona.id)} className='d-inline px-1 mx-2'>X</button>
                            </li>

                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Fetch