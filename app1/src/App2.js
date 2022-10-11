import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ape: "com",
            name: "edy",
            age: 40
        }
    }

    render() {
        return (
            <div>
                <h1>Hi I'm {this.state.ape + ' ' + this.state.name} adn i'm {this.state.age} years old</h1>

                <button onClick={this.aumentar}>clic par aaumentar</button>
            </div >
        )
    }


    aumentar = () => {
        this.setState((prevState) => (
            {
                age: prevState.age + 1,
                name: prevState.name + "ffff"
            })
        )
    }
}