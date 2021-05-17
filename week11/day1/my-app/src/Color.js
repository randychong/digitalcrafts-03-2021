import React, { Component } from 'react'

export default class Color extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: true
        }
    }
    render() {
        return (
            <div>
                <h1>Color.js</h1>
                <p>What color is this paragraph? {this.state.color ? (
          <div className={this.state.color ? "blue" : "red"}>
            <p>This paragraph is blue</p>
          </div>
        ) : (
          <div className={this.state.color ? "blue" : "red"}>
            <p>This paragraph is red</p>
          </div>
        )}
        </p>
        <button onClick={()=>
        this.setState({
            color: false
        })
        }>Change the paragraph color</button>
            </div>
        )
    }
}
