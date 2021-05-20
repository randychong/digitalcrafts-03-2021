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

                <p>
                    randallchong
                </p>

                <button>Edit Profile</button>

                <p>
                    <img src={Settings} className="settings"></img>
                </p>
            </div>
        )
    }
}
