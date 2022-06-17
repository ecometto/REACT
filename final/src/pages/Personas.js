import React, { useState, useRef, useEffect } from 'react'

export default function Personas() {
    const [listaPersonas, setlistaPersonas] = useState([]);
    const [filtrado, setFiltrado] = useState([]);
    const [filtro, setFiltro] = useState('');
    const filtro1 = useRef("useref") // USANDO USEREF

    var dataFinal = []
    const getPersonas = async () => {
        const res = await fetch("https://fakerapi.it/api/v1/persons?_quantity=100");
        const data = await res.json()
        dataFinal = data.data
        setlistaPersonas(dataFinal)
        setFiltrado(dataFinal)
    }


    const actualizar = (e) => {
        setFiltro(e)
        const parcial = filtrado.filter(p =>
        (p.firstname.toUpperCase().includes(e.toUpperCase()) 
        || p.lastname.toUpperCase().includes(e.toUpperCase())
        )
        )
        setlistaPersonas(parcial)
    }

    useEffect(() => {
        getPersonas()
    }, []);


    return (
        <div className='container d-flex flex-column align-items-center text-center bg-dark text-light fs-5'>

<div className='d-fixed m-5 container-fluid'>
                <h3 className='bg-info container-fluid'>LISTADO DE PERSONAS</h3>
                Buscar:
                <input className='m-2 col-6' type="text" ref={filtro1} onKeyUp={() => actualizar(filtro1.current.value)} name="filtro" id="filtro" placeholder='Ingrese la persona que busca' />

</div>    
            <ul>
                {
                    listaPersonas.length == 0 ?
                        "cargando..."
                        : listaPersonas.map((p) => {
                            return (
                                <li key={p.id} className="list-unstyled">{p.firstname} - {p.lastname}</li>
                            )
                        })

                }
            </ul>
        </div>
    )
}
