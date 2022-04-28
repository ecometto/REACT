
import React from 'react'

function getData() {

    const url = "https://jsonplaceholder.typicode.com/todos"
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        
        var contenedor = document.getElementById('contenedor')

        
            data.map((dato, index) => {
                return (
                    contenedor.innerHTML += ` * Tarea numero ${dato.id} - ${dato.title} - ${dato.completed}  </br>`
                )

            })


        })
}



export default function FetchJson() {

    getData()

    return (
        <div>
            <h3>LISTA DE TAREAS</h3>
            <div id="contenedor"></div>
        </div>
    )
}
