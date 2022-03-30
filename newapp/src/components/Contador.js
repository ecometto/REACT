import React from 'react';

class Contador extends React.Component {

    state = {
        numero: 0
    }

    disminuir = () => {
        this.setState({ numero: this.state.numero - 1 })
    }


    aumentar = () => {
        this.setState({ numero: this.state.numero + 1 })
    }

    myStyle = {
        color: "blue",
        fontSize: "25px",
        textDecoration: "underline",
        textShadow: "1px 2px 2px red",
    }

    myMark = { 
        backgroundColor: "green",
        color: "white",
        padding: "5px"
      }

    render() {
        return (
            <div>
                <p style={this.myStyle}>  El numero es : <span style={this.myMark}> {this.state.numero}</span></p>

                <br />
                <button onClick={this.disminuir}>Click -</button>
                <button onClick={this.aumentar}>Click +</button>


            </div>
        )

    }
}

export default Contador