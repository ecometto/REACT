import React, {useState} from 'react';

function Click() {

    const [num, setNum] = useState(1);  
  
    function aumentar(){
      var numero = document.getElementById('input').value
      alert(numero)
    //   setNum(num + (numero*1))
    }
    function disminuir(){
      var numero = document.getElementById('input').value
      setNum(num - (numero*1))
    }


    return (
        <div >

            <div className='juegoNumeros'>
                <h2>MICOMPONENTE hola.. soy el componente. desde </h2>

                <input type="number"   id="input" />

                <button onClick={aumentar}>Click para aumentar</button>
                <button onClick={disminuir}>Click para disminuir</button>

                <p>El numero es: <span className="num">{num}</span></p>

            </div>
        </div>
    );
}

export default Click;