import React, { Component } from 'react'
import Randy from "../images/randy.png"

export default class Posts extends Component {
    render() {
        return (
            <div className="content-container">
                <div className="posts-menu">
                    <p>POSTS</p>
                    <p>IGTV</p>
                    <p>SAVED</p>
                    <p>TAGGED</p>
                </div>

                <div className="posts-container">
                    <p>
                        <img src={Randy} className="posts"></img>
                    </p>

                    <p>
                        <img src={Randy} className="posts"></img>
                    </p>

                    <p>
                        <img src={Randy} className="posts"></img>
                    </p>
                </div>
            </div>
        )
    }
}
