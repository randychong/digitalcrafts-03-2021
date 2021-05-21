import React, { Component } from 'react'
import Pixels from "../images/pixels.png"
import TV from "../images/tv.png"
import Ribbon from "../images/ribbon.png"
import User from "../images/user.png"
import CatAndDoge from "../images/cat-and-doge.png"
import CuteDoge from "../images/cutedoge.png"
import DogeAndElon from "../images/doge-and-elon.png"
import DogeAstronaut from "../images/doge-astronaut.png"
import DogeJawsMeme from "../images/doge-jaws-meme.png"
import DogecoinGiveaway from "../images/dogecoin-giveaway.png"

export default class Posts extends Component {
    render() {
        return (
            <div className="content-container">
                <div className="posts-menu">
                    <p className="post-icon-container">
                        <img src={Pixels} className="post-icons"></img>
                        POSTS
                    </p>
                    <p className="post-icon-container">
                        <img src={TV} className="post-icons"></img>
                        IGTV
                    </p>
                    <p className="post-icon-container">
                        <img src={Ribbon} className="post-icons"></img>
                        SAVED
                    </p>
                    <p className="post-icon-container">
                        <img src={User} className="post-icons"></img>
                        TAGGED
                    </p>
                </div>

                <div className="posts-container">
                    <p>
                        <img src={DogeAndElon} className="posts"></img>
                    </p>

                    <p>
                        <img src={DogecoinGiveaway} className="posts"></img>
                    </p>

                    <p>
                        <img src={CuteDoge} className="posts"></img>
                    </p>

                    <p>
                        <img src={DogeAstronaut} className="posts"></img>
                    </p>

                    <p>
                        <img src={DogeJawsMeme} className="posts"></img>
                    </p>

                    <p>
                        <img src={CatAndDoge} className="posts"></img>
                    </p>

                    <p></p>
                    <p>Loading...</p>
                </div>
            </div>
        )
    }
}
