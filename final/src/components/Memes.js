import React, { useState } from 'react';
import html2canvas from 'html2canvas';


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

    const capture = () => {
        html2canvas(document.querySelector("#imgContainer")).then(canvas => {
            let img = canvas.toDataURL("image/png");
            var link = document.createElement('a');
            link.download = "meme.jpg";
            link.href = img;
            link.click();

        });
    }


    return (
        <div className='contenedor'>
            <div className='contenedor1'>
                <div className='contenedor2'>
                    <h5 >
                        Hi. THIS IS A MEME MAKER. < br />
                    </h5>
                    <div className='mb-2'>
                        <label> CHOSE YOUR PICTURE:</label> <br />
                        <select className='mb-3' onChange={changePic} name="pic" id="picSelect">
                            {pictures.map((pic, index) => {
                                return (
                                    <option key={index} value={pic}>{pic}</option>
                                )
                            })}
                        </select>
                    </div>


                    <div className='mb-2'>
                        <label> ADD YOUR TOP TEXT:</label> <br />
                        <input className='me-4' id="topText" onKeyUp={addTText} type="text" />
                    </div>

                    <div className='mb-2'>
                        <label> ADD YOUR BOTTOM TEXT:</label> <br />
                        <input className='me-4' id="bottomText" onKeyUp={addBText} type="text" />
                    </div>


                    <div className='imgContainer' id="imgContainer">
                        <span className='text'>{text}</span>
                        <img className='img' src={"img/" + pict} alt="meme1" />
                        <span className='textB'>{textB}</span>
                    </div>

                    <div id="capture" >
                        <button onClick={capture}>click capture</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Memes