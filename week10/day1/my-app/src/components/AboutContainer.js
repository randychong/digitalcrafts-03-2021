import React, { Component } from 'react'
import "../App.css";
import AboutMe from "./AboutMe"
import ProfileImage from "../images/randy-profile-image.jpeg"

export default class AboutContainer extends Component {
    render() {
        return (
            <div className="AboutContainer">
                <h1>RANDY CHONG</h1>
                <img src={ProfileImage} alt="profile image" className="ProfileImage"></img>
                <p className="AboutHeader">ABOUT</p>
                <AboutMe />
            </div>
        );
    }
}
