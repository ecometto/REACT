import React, { useState, useEffect } from 'react';
import './galery.css'

const Galery = () => {

    const [pic, setPic] = useState()

    const getData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data1 = await res.json()
        console.log(data1);
        setPic(data1)
    }


    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='container bg-light'>
            <h1>listado de fotos</h1>
            <h3>From 'https://jsonplaceholder.typicode.com/photos'</h3>
            <hr />
            <div className='margin-auto text-center'>
                <ul className='d-flex flex-wrap justify-content-center' id="listTodo">
    
                    {!pic ? "cargando Data" :
                    pic.map((pic) => {
                        return (
                            <li className="list-item" key={pic.id} >
                                <p className='fw-bold'>ID: {pic.id}  </p>
                                <p className='picTitle'>Title: {pic.title} </p>
                                <img 
                                className='rounded-circle'
                                src={pic.thumbnailUrl}
                                alt="foto de algo"
                                />
                                <hr />
                            </li>
                        )
                    })
                } 
                </ul>
            </div>
        </div>
    )
}

export default Galery