import react, { useState, useEffect, useRef } from 'react'
import './calculator.css'



export default function Calculator() {
    const [display, setDisplay] = useState('')
    const [parcial, setParcial] = useState(0)
    const [total, setTotal] = useState(0)
    const [operacion, setOperacion] = useState('')

    useEffect(() => {
        setDisplay(parcial);
    }, [total])



    function mostrar(e) {
        setDisplay(display + e.target.value)
    }

    function op(e) {
        if (operacion === "") {
            if (parcial === 0) {
                setParcial(parseInt(display))
            }
        } else {
            if (operacion === "+") {
                setParcial(parcial + parseInt(display))
            }
            else if (operacion === "-") {
                setParcial(parcial - parseInt(display))
            }
            else if (operacion === "/") {
                setParcial(parcial / parseInt(display))
            }
            else if (operacion === "*") {
                setParcial(parcial * parseInt(display))
            }
        }
        setOperacion(e.target.value)
        setDisplay('')
    }

    function igual(e) {
        if (operacion === "+") {
            setParcial(parcial + parseInt(display))
        }
        else if (operacion === "-") {
            setParcial(parcial - parseInt(display))
        }
        else if (operacion === "/") {
            setParcial(parcial / parseInt(display))
        }
        else if (operacion === "*") {
            setParcial(parcial * parseInt(display))
        }

        setTotal(parcial)
        setOperacion('')
    }



    function borrar() {
        setDisplay("")
        setOperacion("")
        setParcial(0)
    }


    return (
        <div className='container'>
            <h1 className='text-center'>hello from calc</h1>
            <div className='calculator'>

                <p>Parcial: {parcial}</p>

                <div className='display' >
                    <input type="text" defaultValue={display} />
                </div>

                <div className='teclasContainer'>
                    <div className='teclas'>
                        <div className="fila">
                            <button value="on" onClick={mostrar} className='btn btn-secondary'>on</button>
                            <button value="/" onClick={op} className='btn btn-secondary'>/</button>
                            <button value="*" onClick={op} className='btn btn-secondary'>*</button>
                            <button value="-" onClick={op} className='btn btn-secondary'>-</button>
                        </div>
                        <div className="fila">
                            <button value="7" onClick={mostrar} className='btn btn-secondary' >7</button>
                            <button value="8" onClick={mostrar} className='btn btn-secondary' >8</button>
                            <button value="9" onClick={mostrar} className='btn btn-secondary' >9</button>
                            <button value="+" onClick={op} className='btn btn-secondary' >+</button>
                        </div>
                        <div className="fila">
                            <button value="4" onClick={mostrar} className='btn btn-secondary' >4</button>
                            <button value="5" onClick={mostrar} className='btn btn-secondary' >5</button>
                            <button value="6" onClick={mostrar} className='btn btn-secondary' >6</button>
                            <button value="AC" onClick={borrar} className='btn btn-secondary' >AC</button>
                        </div>
                        <div className="fila">
                            <button value="1" onClick={mostrar} className='btn btn-secondary' >1</button>
                            <button value="2" onClick={mostrar} className='btn btn-secondary' >2</button>
                            <button value="3" onClick={mostrar} className='btn btn-secondary' >3</button>
                            <button value="=" onClick={igual} className='btn btn-secondary' >=</button>
                        </div>
                        <div className="fila">
                            <button value="0" onClick={mostrar} className='btn btn-secondary fila5' >0</button>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

} 