import React, { Component } from 'react';

class ClickClass extends Component {
    state = {
        num: 1
    }

    saludar = ()=>{
        let saludo = document.getElementById('saludo')
        let num = document.getElementById('num')
        let nombre = this.props.name
        saludo.innerHTML = nombre + ' hola'
        num.innerHTML += this.setState(this.state.num = this.state.num + 1)
    }
    render() {
        return (
            <div>
                <p>hola {this.props.name} from class</p>
                <button onClick={this.saludar}>Clcik para saludar</button>
                <p id='saludo'></p>
                <p id='num'>{this.state.num}</p>
            </div>
        )
    }

}



export default ClickClass