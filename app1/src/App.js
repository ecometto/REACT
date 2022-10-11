import React, { useState } from 'react'


function App(props){
const [edad, setEdad] = useState(30)

const aumentar = () =>{
  setEdad(edad + 1)
}

  return(
    <div>
      <h1>hola {props.nombre}. tienes {edad} añox</h1>
      <button onClick={aumentar}>cumplir</button>
    </div>
  )
}

export default App