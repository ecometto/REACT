import React, {useRef} from 'react'


export default function Form() {

    const input = useRef('')

    const nuevaTarea = (e)=>{
        e.preventDefault()
  
        alert(input.current.value)
    }

    return (
        <>

            <span className="fs-3 text-center fw-bold"> Formulario: </span>
            <form className="form-group" onSubmit={nuevaTarea}>
                <label htmlFor="input"> Descripcion</label>
                <input className="form-control" type="text" ref={input} id="input" placeholder="Ingrese la Tarea" />
                <button type="submit" className="btn btn-success my-2">Ingresar</button>
            </form>

        </>
    )
}


<div className="row">
    <div className="col-8 my-2 ">
        <span className="fs-3 text-center fw-bold"> Formulario: </span>
        <div className="form-group">
            <label htmlFor="input"> Descripcion</label>
            <input className="form-control" type="text" name="" id="input" placeholder="Ingrese la Tarea" />
            <button type="submit" className="btn btn-success my-2">Ingresar</button>
        </div>
    </div>
</div>
