import React, { Component } from 'react'
import "../App.css";

export default class Sidebar extends Component {
    render() {
        return (
            <div className="Sidebar">
                <p className="SidebarItem">Home</p>
                <p className="SidebarItem">Projects</p>
                <p className="SidebarItem">Resume</p>
                <p className="SidebarItem">Contact</p>
            </div>
        );
    }
}
