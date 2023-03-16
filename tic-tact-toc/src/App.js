import React from 'react'
import './app.css'

import Button from './components/Button'



export default function App() {

    // funciones 
    const handleClick = (e)=> console.log(e.target.innerText) 


    return (
        <div className='container'>

    
            <div className='fila fila1'>
                <div className='button-container'><Button value='1'/></div>
                <div className='button-container'><Button value='2'/></div>
                <div className='button-container'><Button value='3'/></div>
            </div>
            <div className='fila fila2'>
                <div className='button-container'><Button value='4'/></div>
                <div className='button-container'><Button value='5'/></div>
                <div className='button-container'><Button value='6'/></div>
            </div>
            <div className='fila fila3'>
                <div className='button-container'><Button value='7'/></div>
                <div className='button-container'><Button value='8'/></div>
                <div className='button-container'><Button value='9'/></div>
            </div>
        </div>
    )
}
