import React, { Component } from 'react'
import Randy from "../images/randy.png"
import Settings from "../images/settings.png"

export default class Profile extends Component {
    render() {
        return (
            <div className="profile-container">
                <div className="profile-image-container">
                    <p>
                        <a>
                            <img src={Randy} className="profile-image"></img>
                        </a>
                    </p>
                </div>
                
                <div className="profile-info">
                    <p className="handle">randallchong</p>

                    <button>Edit Profile</button>

                    <p>
                        <img src={Settings} className="settings"></img>
                    </p>

                    <p className="posts">141 posts</p>

                    <p>
                        <a className="followers">
                            281 followers
                        </a>
                    </p>

                    <p>
                        <a className="following">
                            279 following
                        </a>
                    </p>
                    
                    <p className="bio-info">Randy Chong</p>
                    <p className="bio-info">총랜디</p>
                    <p className="bio-info">Web Designer | Traveler | Gamer | Chef</p>
                    <p>
                        <a href="randychong.github.io/chongskitchen" className="bio-info">randychong.github.io/chongskitchen</a>
                    </p>
                </div>
            </div>
        )
    }
}
