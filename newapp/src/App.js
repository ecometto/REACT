import React from "react";

import Contador from './components/Contador.js';
import Presentador from './components/Presentador.js';
import Memes from './components/Memes.js';


const saludar = () => {
  let name = document.getElementById('input').value
  alert(name)
  document.getElementById('saludo').innerHTML = `Hello ${name}!!! Welcome to the Jungle`
}

function App() {
  return (
    <div className="App">

      <Contador
        disminuir="Click -"
        aumentar="Click +"
      />

      <hr />
      <hr />

      <Presentador funcion={saludar} />

      <hr />
      <hr />

    <Memes />

    </div>
  );
}

export default App;
