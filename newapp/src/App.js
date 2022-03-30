import React  from "react";

import Contador from './components/Contador.js';
import Presentador from './components/Presentador.js';


function App() {
  return (
    <div className="App">

    <Contador 
        disminuir= "Click -"
        aumentar= "Click +"
     />      
    
    <hr />
    <hr />

     <Presentador />

    </div>
  );
}

export default App;
