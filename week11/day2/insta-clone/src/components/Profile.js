import React, { Component } from 'react'
import Randy from "../images/randy.png"
import Settings from "../images/settings.png"

export default class Profile extends Component {
    render() {
        return (
            <div>
                <p>
                    <a>
                        <img src={Randy} className="profile-image"></img>
                    </a>
                </p>
                
                <div className="profile-info">
                    <p>randallchong</p>

                    <button>Edit Profile</button>

                    <p>
                        <img src={Settings} className="settings"></img>
                    </p>

                    <p>141 posts</p>

                    <p>281 followers</p>

                    <p>279 following</p>
                    
                    <p>Randy Chong</p>
                    <p>총랜디</p>
                    <p>Web Designer | Traveler | Gamer | Chef</p>
                    <p>
                        <a href="randychong.github.io/chongskitchen">randychong.github.io/chongskitchen</a>
                    </p>
                </div>
            </div>
        )
    }
}
