import React from 'react';

export default function Home() {
    const myStyle = {
        "max-width": "1000px",
        "backgroundColor": "rgba(50,50,50,0.5)",
        "fontSize": "1.2em",
        "fontStyle": "oblique",
        "boxShadow": "10px 10px 10px rgba(0,0,254,0.5), 30px 30px 10px rgba(100,100,254,0.5)",
        "border-radius":"5px"
    }

    const myImg = {
        "height": "80px",
        "borderRadius": "50%",
    }

    return (
        <div style={myStyle} className='container text-center m-2 p-3 mx-auto'>
            <h1 className='p-2'>HELLO.. </h1>

            <p className='p-3'> This is a SPA (Single Page Application) created in React Js, as part of a set of tests I have made learning this wonderful framework<br />
            For each page I'll try to explain briefly the concepts and tools applied. I hope you enjoy it.</p>
            <h5 className='p-2'>THANK YOU FOR READ ME !!</h5>
            <br />
            <hr />
            <div className='d-flex justify-content-between'>
                <img style={myImg} src="img/ced.jpg" alt="Foto ECometto" />
                <p className='text-end mx-2 fs-3'>Lic. Edgardo Cometto.</p>
            </div>
        </div>
    )

}