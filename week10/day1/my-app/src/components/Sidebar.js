import React, { Component } from 'react'
import "../App.css";

export default class Sidebar extends Component {
    render() {
        return (
            <div className="Sidebar">
                <p>
                <a className="SidebarItem">Home</a>
                </p>                      
                <p>
                <a className="SidebarItem">Projects</a>
                </p>
                <p>
                <a className="SidebarItem">Resume</a>
                </p>
                <p>
                <a className="SidebarItem">Contact</a>
                </p>
            </div>
        );
    }
}
