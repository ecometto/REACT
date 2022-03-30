import React, {useState} from 'react';


function Memes() {
const [pic, setPic] = useState("july")

const picChoice =(e)=>{
    console.log(e.target.value); 
    var src = e.target.value;
    setPic(src)
    
}
    return (
        <div>
            <h2> WELCOME TO MEME'S GAME</h2>
            Select an image:
            <select onChange={picChoice} name="image" id="imgae">
            <option value="">options</option>
                <option value="aha">haaa??</option>
                <option value="what">what??</option>
                <option value="lover">lover</option>
                <option value="july">July</option>
            </select>
            <div id='picture'>
                <img src={"./img/"+pic+".jpg"} />
            </div>
        </div>
    )
}

export default Memes