import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// IMPORT MODULES 
import Nav from   './components/Nav.js';
import Home from  './pages/Home.js';
import Tareas from './pages/Tareas.js';
import Form from './pages/Form.js'; 
import Galery from "./pages/Galery";
import Juegos from "./pages/Juegos";
import Personas from './pages/Personas';

function App() {
  return (
    <div>

{/* {"backgroundColor":"rgba(220,180,220,0.3)", "height":"100vh"}  */}
<div style={{}}>
        <BrowserRouter>
          < Nav />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/tareas" element={<Tareas />} />
            <Route path="/form" element={<Form />} />
            <Route path="/galery" element={ < Galery />} />
            <Route path="/juegos" element={ < Juegos   />} />
            <Route path="/personas" element={ < Personas   />} />
          </Routes>
        </BrowserRouter>

</div> 

    </div>


  )

}

export default App;
