import React, { Component } from 'react'
import Doge from "../images/doge.png"
import Settings from "../images/settings.png"

export default class Profile extends Component {
    render() {
        return (
            <div className="profile-container">
                <div className="profile-image-container">
                    <p>
                        <a>
                            <img src={Doge} className="profile-image"></img>
                        </a>
                    </p>
                </div>
                
                <div className="profile-info">
                    <div className="handle-container">
                        <p className="handle">doge</p>

                        <button className="edit">Edit Profile</button>

                        <p>
                            <img src={Settings} className="settings"></img>
                        </p>
                    </div>

                    <div className="profile-stats">
                        <p className="posts-stats">
                            <strong>420</strong> posts</p>

                        <p>
                            <a className="followers">
                                <strong>420M</strong> followers
                            </a>
                        </p>

                        <p>
                            <a className="following">
                                <strong>420K</strong> following
                            </a>
                        </p>
                    </div>

                    <p className="name">
                        <strong>Kabosu</strong>
                    </p>
                    
                    <p className="bio">                               Doge | Crypto Leader | Influencer | Memelord
                    </p>

                    <p>
                        <a href="randychong.github.io/chongskitchen" className="bio-link">doge.com</a>
                    </p>
                </div>
            </div>
        )
    }
}
