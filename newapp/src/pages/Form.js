import React, { useRef } from 'react'

export default function Form() {

    const nombre = useRef();
    // const apellido = useRef();

    return (
        <div className='text-center margin-auto bg-secondary col-md-6 offset-md-3 p-4 my-4 rounded'>

            <h3>FORMULARIO DE CONTACTO</h3>

            <div className='col-md-6 offset-md-3 p-2'>
                <input className='form-control mb-2'
                    type="text"
                    placeholder='Ingrese su nombre'
                    ref={nombre} 
                    />

                <input className='form-control mb-2'
                    type="text"
                    placeholder='Ingrese su apellido'
                    // ref={apellido} 
                    />
                <button onClick={console.log(nombre.current.value)} className='btn btn-success'>Enviar Datos</button>
            </div>
            {console.log(nombre)}
            <h3></h3>
        </div>
    )
}
