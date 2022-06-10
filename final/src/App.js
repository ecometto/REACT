import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// IMPORT MODULES 
import Nav from   './components/Nav.js';
import Home from  './pages/Home.js';
import Tareas from './pages/Tareas.js';
import Form from './pages/Form.js'; 

function App() {
  return (
    <div>

      <BrowserRouter>
        < Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tareas" element={<Tareas />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>


    </div>


  )

}

export default App;
