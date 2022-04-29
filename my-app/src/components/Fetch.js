import React from 'react';

const url ='https://jsonplaceholder.typicode.com/users'

fetch(url)
    .then(res =>res.json())
    .then(data =>{console.log(data)})

// fetch(url)
//   .then(response => response.json())
//   .then(json =>  listar(json))

//   const listar = (data)=>{
//       var contenedor = document.getElementById('contenedor')
//       contenedor.innerHTML  = ""
//       data.forEach(element => {
//           contenedor.innerHTML += element.name + "</br>"
          
//       });
//     console.log(data);
// }


const Fetch = ()=>{

    return(
        <div id="contenedor">

        </div>
    )
}

export default Fetch