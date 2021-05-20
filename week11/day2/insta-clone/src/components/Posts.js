import React, { Component } from 'react'
import Randy from "../images/randy.png"
import Pixels from "../images/pixels.png"
import TV from "../images/tv.png"
import Ribbon from "../images/ribbon.png"
import User from "../images/user.png"

export default class Posts extends Component {
    render() {
        return (
            <div className="content-container">
                <div className="posts-menu">
                    <p>
                        <img src={Pixels} className="post-icons"></img>
                        POSTS
                    </p>
                    <p>
                        <img src={TV} className="post-icons"></img>
                        IGTV
                    </p>
                    <p>
                        <img src={Ribbon} className="post-icons"></img>
                        SAVED
                    </p>
                    <p>
                        <img src={User} className="post-icons"></img>
                        TAGGED
                    </p>
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
