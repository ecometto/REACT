import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css'

// Importing components 
import TodosLocalStorage from './pages/TodosLocalStorage';
import TodoList from './pages/TodoList';


function App() {
    
    // retorno renderizado ------- 
    return (

        <BrowserRouter>
        <nav className='bg-secondary'>
            <Link className='link' to="/">HOME</Link>
            <Link className='link' to="/task2">TASK 2</Link>
        </nav>
        
            <Routes>
                <Route path="/" element={<TodosLocalStorage />} />
                <Route path="/task2" element={<TodoList />} />
            </Routes>
        </BrowserRouter>

    );
}


export default App;
