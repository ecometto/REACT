import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


// importing components 
import Contador from './components/Contador';
import Nav from './components/Nav';
import Memes from './components/Memes.js';
import Employees from './components/Employees'
import Todos from './components/Todos.js';
import Fetch from './components/Fetch'


const App = () => {
  return (
    <div >

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path={"/"} element={<Contador />} />
          <Route path={"memes"} element={<Memes />} />
          <Route path={"employees"} element={<Employees />} />
          <Route path={"fetch"} element={<Fetch />} />
          <Route path={"tareas"} element={<Todos />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;

