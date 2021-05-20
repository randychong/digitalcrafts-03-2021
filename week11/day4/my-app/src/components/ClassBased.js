import React, { Component } from 'react'

export default class ClassBased extends Component {
    state = {
        loadingMessage: "loading",
    };

    render() {
        return (
            <div>
                <h1>Class Based Components</h1>
                {this.state.loadingMessage}
                <button onClick={() => this.setState({loadingMessage: "finished"})}></button>
            </div>
        )
    }
}
