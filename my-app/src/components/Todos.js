
import React from 'react';
import './todos.css';


//GET DATA
var datos = []
var fil = []

// OBTIENE, ALMACENA Y ORDENA LOS DATOS DEL SERVIDOR 
const url = "https://jsonplaceholder.typicode.com/todos"
fetch(url)
    .then(response => response.json())
    .then(data => {

        datos = data

        // FILTRA SOLO 10 PERSONAS 
        var fil = datos.filter(persona => {
            return persona.id < 11
        });

        // ORDENA POR ESTADO Y LUEGO POR TITULO 
        fil.sort(function (a, b) {
            //ordena por "completado"
            if (a.completed > b.completed) return 1;
            if (a.completed < b.completed) return -1;
            //ordena por "titulo"
            else {
                if (a.title > b.title) return 1;
                if (a.title < b.title) return -1;
                return 0;
            }
        });

        console.log(datos);
    })


// ASIGNA FUNCION LUEGO DE AGREGAR LOS DATOS DINAMICAMENTE 
const asignarFuncion = () => {
    var filas = document.querySelectorAll('table tr');

    filas.forEach((element) => {
        element.addEventListener('click', function (e) {
            console.log('ud ha pulsado:');
            console.log(e.target.parentNode.id)
        })
    })
}


export default function FetchJson() {

    var body = document.getElementById('body');

    // var body = document.getElementById('body');
    // body.innerHTML = "";
    // console.log(fil);
    // fil.map((dato, index) => {
    //     return (
    //         body.innerHTML += ` <tr id="${dato.id}" class='${dato.completed ? "completada" : ""}' >
    //                 <td>${dato.id}</td>
    //                 <td>${dato.title}</td>
    //                 <td>${dato.completed ? "finalizada" : "En curso"}</td>
    //                 </tr>                        
    //                 `
    //     )
    // })


    return (
        <div>
            <h3>LISTA DE TAREAS</h3>
            <div id="contenedor">
                <table className='table' id='table'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>title</th>
                            <th>completed</th>
                        </tr>
                    </thead>
                    <tbody id="body">
                        {fil.map((dato, index) => {
                            return (
                                <tr id={dato.id} class={dato.completed ? "completada" : ""}>
                                            <td>{dato.id}</td>
                                            <td>{dato.title}</td>
                                            <td>{dato.completed ? "finalizada" : "En curso"}</td>
                                            </tr>                        
                            )
                            })
                        }

                        {asignarFuncion()}
                    </tbody>
                </table>

            </div>
        </div>
    )


}

