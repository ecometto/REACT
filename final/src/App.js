import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// IMPORT MODULES 
// import Nav2 from   './components/Nav2.js';
import Nav from   './components/Nav.js';
import Home from  './pages/Home.js';
import Tareas from './pages/Tareas.js';
import Galery from "./pages/Galery";
import Juegos from "./pages/Juegos";
import Personas from './pages/Personas';
// import Clima from './pages/Clima.js';


function App() {
  return (
    <div>

{/* {"backgroundColor":"rgba(220,180,220,0.3)", "height":"100vh"}  */}
<div style={{}}>
        <BrowserRouter>
          < Nav />
          {/* <Nav2 /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tareas" element={<Tareas />} />
            <Route path="/galery" element={ < Galery />} />
            <Route path="/juegos" element={ < Juegos   />} />
            <Route path="/personas" element={ < Personas   />} />
            {/* <Route path="/clima" element={ <Clima />} /> */}
          </Routes>
        </BrowserRouter>

</div> 

    </div>


  )

}

export default App;
