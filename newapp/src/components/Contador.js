import React from 'react';

class Contador extends React.Component {
    state = {
        nombre: "Edgardo Daniel",
        edad: 42,
        trabajo: false
    }

    cambiarNombre = ()=> {
        this.setState({nombre: "charly", edad:19})
    }
    render() {

        return (
            <div className='d-flex justify-content-center flex-column'>
                hello from component Contador <br />
                <div>
                    Te saludo <b> {this.props.nombre}. </b>
    
                    Te saludo <span> {this.props.nombre}. </span> <br />
       
                    Yo soy {this.state.nombre} y tengo {this.state.edad} años.<br />

                    {this.state.trabajo=== true?"trabajando":"sin trabajar"}

                </div>
                <div>

                    <button onClick={this.cambiarNombre}>Cambiar Nombre</button>

                </div>
            </div>

        )

    }


}


export default Contador