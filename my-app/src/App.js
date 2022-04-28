import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


// importing components 
import Contador from './components/Contador';
import Nav from './components/Nav';
import Memes from './components/Memes.js';
import Employees from './components/Employees'
<<<<<<< HEAD
import FetchJson from './components/FetchJson';
=======
import Fetch from './components/Fetch'
>>>>>>> 7ba81f92ee4c27aa00b334c02bc147d591945a4e


const App = () => {
  return (
    <div >
      <BrowserRouter>

        <Nav />

        <Routes>
          <Route path={"/"} element={<Contador />} />
<<<<<<< HEAD
          <Route path={"memes"} element={ <Memes />} />
          <Route path={"employees"} element={ <Employees />}/>
          <Route path={"json"} element={ <FetchJson />}/>
=======
         <Route path={"memes"} element={ <Memes />} />
         <Route path={"employees"} element={ <Employees />}/>
         <Route path={"fetch"} element={ <Fetch />}/>
>>>>>>> 7ba81f92ee4c27aa00b334c02bc147d591945a4e

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;

