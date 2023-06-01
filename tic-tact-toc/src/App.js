import React, { useEffect, useState } from 'react';

import './appClock.css'

export default function App() {
    const [hora, setHora] = useState(new Date().toLocaleTimeString())
    const [crono, setCrono] = useState(`${new Date().getSeconds()} : ${new Date().getMilliseconds()}`)

    function segundos() {
        setInterval(() => {
            let nuevaHora = new Date().toLocaleTimeString()
            setHora(nuevaHora)
        }, 1000)
    }
    function cronos() {
        setInterval(() => {
            setCrono(`${new Date().getSeconds()} : ${new Date().getMilliseconds()}`)
        }, 100);
    }
    useEffect(() => segundos(), [])
    useEffect(() => cronos(), [])

    return(

        <div className="container">
            <div className="d-flex justify-content-center align-items-center">
                <div>
                    <div className="clock bg-secondary text-light text-center rounded p-3">
                        <h3>Hora  Oficial Argentina  </h3>
                        <h2 style={{ backgroundColor: "rgba(200,200,200,0.5)", borderRadius: "10px", padding: "10px" }}>
                            {hora}
                        </h2>
                    </div>

                    <div className="clock bg-secondary text-light text-center rounded p-3 mt-2">
                        <h3>CRONOMETRO</h3>
                        <h2 style={{ backgroundColor: "rgba(200,200,200,0.5)", borderRadius: "10px", padding: "10px" }}>
                            {crono}
                        </h2>
                    </div>
                </div>
            </div>
        </div>

    )

}
