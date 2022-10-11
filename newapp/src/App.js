import { useState, useEffect } from 'react';
import './App.css'
import Todos2 from './pages/Todos2';
// import TodoList from './pages/TodoList';


function App() {
    
    // retorno renderizado ------- 
    return (
        <div className="container ">
            <Todos2 />
            {/* <TodoList /> */}
        </div>
    );
}


export default App;
