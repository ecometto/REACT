import React from 'react';

const nombre = (evento)=>{
    document.getElementById('saludo').innerHTML = evento.target.value
}

const saludar = ()=>{
    let name = document.getElementById('input').value
    document.getElementById('saludo').innerHTML = `Hello ${name}!!! Welcome to the Jungle`
}

function Presentador(){
    return(
        <div>
            hello I'm preentador from functional component.  <br />
            Please enter your name: <input onChange={nombre} type="text" id='input'/> <br />  <br />
            <button onClick={saludar}>Click for Welcome</button>
            <p id='saludo'></p>
        </div>

    )
}




// class Presentador extends React.Component{
//     state = {
//         nombre: ""
//     }

//     presentacion = ()=>{
//         let nombre = document.getElementById('input')
//         document.getElementById('presentacion').innerHTML = ` Hola <b>${nombre.value} </b>. Bienvenido al grupo!!`
//     }

//     render(){
//         return(
//             <div>
//                 <p>hola soy presentador.. ingresa tu nombre</p>
//                 <input  type="text" id="input" /> <br />
//                 <button onClick = {this.presentacion}>Click para presentar</button>
//                 <p id="presentacion"></p>
//             </div>
//         )
//     }
// }

export default Presentador