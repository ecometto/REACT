import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


// importing components 
import Contador from './components/Contador';
import Nav from './components/Nav';
import Memes from './components/Memes.js';
import Employees from './components/Employees'
import FetchJson from './components/FetchJson';


const App = () => {
  return (
    <div >
      <BrowserRouter>

        <Nav />

        <Routes>
          <Route path={"/"} element={<Contador />} />
          <Route path={"memes"} element={ <Memes />} />
          <Route path={"employees"} element={ <Employees />}/>
          <Route path={"json"} element={ <FetchJson />}/>

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;

