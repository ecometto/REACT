import React, { useState } from 'react';
import html2canvas from 'html2canvas'

import './memes.css';

function Memes() {

    const pictures = ["m1.jpg", "m2.jpg", "m3.jpg", "m4.jpg", "m5.jpg"]

    const [pict, setPict] = useState("m1.jpg");
    const [text, setText] = useState("");
    const [textB, setTextB] = useState("");

    const changePic = () => {
        setPict(document.getElementById('picSelect').value)
    }

    const addTText = () => {
        var textT = document.getElementById('topText')
        setText(textT.value)
    }

    const addBText = () => {
        var textB = document.getElementById('bottomText')
        setTextB(textB.value)
    }

    const capture = ()=>{
    html2canvas(document.querySelector("#capture")).then(canvas => {
        var canvas = document.getElementById("capture");
        var img    = canvas.toDataURL("image/png");

    });

    }
    return (
        <div className='cont d-flex justify-content-center text-center'>
            <div>
                <p className='fs-3'>
                    Hi. THIS IS A MEME MAKER. < br />
                </p>
                CHOSE YOUR PICTURE:
                <select className='mb-3' onChange={changePic} name="pic" id="picSelect">
                    {pictures.map((pic, index) => {
                        return (
                            <option key={index} value={pic}>{pic}</option>
                        )
                    })}
                </select>

                <div className='mb-3'>
                    ADD YOUR TOP TEXT:
                    <input id="topText" onKeyUp={addTText} type="text" />
                </div>
                <div className='mb-3'>
                    ADD YOUR BOTTOM TEXT:
                    <input id="bottomText" onKeyUp={addBText} type="text" />
                </div>

                <div className='imgContainer' id="imgContainer">
                    <span className='text'>{text}</span>
                    <img className='img' src={"img/" + pict} alt="meme1" />
                    <span className='textB'>{textB}</span>
                </div>

                <div id="capture" >
                    <h4 >Hello world! i'll be captured</h4>
                    <button onClick={capture}>click capture</button>
                </div>

                <a download="image.png" href="..."></a>

            </div>
        </div>
    )
}

export default Memes