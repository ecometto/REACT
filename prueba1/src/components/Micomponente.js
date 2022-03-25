
import React, { useState } from 'react';
import micomponente from './Micomponente.css';
import html2canvas from 'html2canvas';
import Click from './Click';


function Micomponente() {
  const [num, setNum] = useState(1);
  const [text, setText] = useState('');
  const [pic, setPic] = useState('./img/1.jpg');


  function escribir(e) {
    setText(e.target.value)
  }

  function changePic(e) {
    // const pic = document.getElementById('pic')
    setPic('./img/' + e.target.value + '.jpg');
  }

  function download() {
    html2canvas(document.querySelector("#capture")).then(canvas => {
      var img = canvas.toDataURL('image/png');
      var link = document.createElement('a')
      link.download = 'meme1.jpg'
      link.href = img
      link.click()

    });
  }


  return (
    <div >

      <div className="memeMaker">
        <h3>MAKING MEMES</h3>
        Elige un meme: <select onChange={changePic} id="meme">
          <option value="">Elige un meme</option>
          <option value="1">fuerza</option>
          <option value="2">mmm</option>
          <option value="3">piensa</option>
          <option value="4">fuck you</option>
        </select>
        <br />
        Escribe un texto:
        <input onChange={escribir} id='input' autoComplete="off" type="text"></input>

        <div id="capture" className='contenedor1'>
          <img id="pic" src={pic} alt="" />
          <p className=''><span className='negrita'>{text}</span></p>
        </div>

        <div>
          <button onClick={download} type="button">Download</button>
        </div>

      </div>

      <Click />


    </div>
  );
}

export default Micomponente;

