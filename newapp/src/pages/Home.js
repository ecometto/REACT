import React from 'react';

export default function Home() {
    const myStyle = {
        "backgroundColor": "rgba(50,50,50,0.5)",
        "fontSize": "1.5em",
        "fontStyle": "oblique",
        "boxShadow": "10px 10px 10px rgba(0,0,254,0.5), 30px 30px 10px rgba(100,100,254,0.5)"
    }

    const myImg = {
        "height": "60px",
        "borderRadius": "50%",
        // "float": "left"
    }

    return (
        <div style={myStyle} className='container text-center m-3 p-5 mx-auto'>
            <h1 className='p-3'>HELLO.. </h1>

            <p className='p-3'> This is a SPA (Single Page Application) created in React Js, as part of a set of tests I have made learning this wonderful framework</p>
            <h5 className='p-3'>TANK YOU FOR READ ME !!</h5>
            <br />
            <hr />
            <div className='d-flex justify-content-between'>
                <img style={myImg} src="img/ced.jpg" alt="Foto ECometto" />
                <p className='text-end mx-2 fs-3'>Lic. Edgado Cometto.</p>
            </div>
        </div>
    )

}