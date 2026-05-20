import { Component } from "react";

export class Count extends Component {
    constructor () {
        super();

        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState({count: this.state.count + 1})
    }

    decrement = () => {
        this.setState({count: this.state.count - 1})
    }

    render () {
        return (
            <>
            <center>
                <h1>This is a class component</h1>
                <h2>Counter application</h2>
                <h3>Count value: {this.state.count}</h3>
                <button className="btn btn-primary m-2" onClick={this.increment}>Increment</button>
                <button className="btn btn-danger m-2" onClick={this.decrement}>Decrement</button>
            </center>
            </>
        )
    }
}