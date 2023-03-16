import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css'

// Importing components 
import TodosLocalStorage from './pages/TodosLocalStorage';


function App() {
    
    // retorno renderizado ------- 
    return (

        <BrowserRouter>
        <nav className='bg-secondary'>
            <Link className='link' to="/">HOME</Link>
        </nav>
        
            <Routes>
                <Route path="/" element={<TodosLocalStorage />} />
     
            </Routes>
        </BrowserRouter>

    );
}


export default App;
