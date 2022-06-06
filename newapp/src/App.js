import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// IMPORT MODULES 
import Nav from './components/Nav.js';
import Home from './pages/Home.js';
import Tareas from './pages/Tareas.js';

function App() {
  return (
    <div>

      <BrowserRouter>
        < Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tareas" element={<Tareas />} />
        </Routes>
      </BrowserRouter>


    </div>


  )

}

export default App;
