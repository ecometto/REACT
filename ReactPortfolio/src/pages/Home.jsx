import React from 'react';
import EcomettoImg from '../img/edgardo.jpg'

export default function Home() {
    const myStyle = {

        "maxWidth": "800px",
        "backgroundColor": "rgba(50,50,50,0.5)",
        "fontSize": "1.2em",
        "fontStyle": "oblique",
        "boxShadow": "10px 10px 10px rgba(0,0,254,0.5), 30px 30px 10px rgba(100,100,254,0.5)",
        "borderRadius": "5px",

    }

    const myImg = {
        "height": "80px",
        "borderRadius": "50%",
    }

        return (
            <div style={myStyle} className='mx-auto text-center p-3'>

                <h1 className='p-2'>HELLO.. </h1>

                <p className='p-3'> This is a Single Page Application (S.P.A.) created in React Js.</p>
                <p>Browse betweeen differents projects from de Top Navigation Bar</p>
                <h5 className='p-2'>THANK YOU FOR READ ME !!</h5>
                <br />
                <hr />
                <div className='d-flex justify-content-between'>
                    <img style={myImg} src={EcomettoImg} alt="Foto ECometto" />
                    <p className='text-end mx-2 fs-3'>Lic. Edgardo Cometto.</p>
                </div>

                <div className='fixed-bottom bg-secondary p-2 fw-bold fs-6 text-end px-4'>
                    Powered by Edgardo Cometto - ecometto@hotmail.com
                </div>
            </div>
        )

}