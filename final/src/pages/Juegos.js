
import React from 'react';

// modules 
import Contador from '../components/Contador';
import Memes from '../components/Memes';

export default function Juegos() {

    return (
        <div className='container bg-light'>
            <div className='row m-1'>
                <div className='col-md-6 border p-2 '>    <Contador /></div>
                <div className='col-md-6 border p-2 '> <Memes /></div>
            </div>
        </div>
    )
}