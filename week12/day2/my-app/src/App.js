import './App.css';
import React, {useState} from "react"
import Home from "./components/Home"
import AboutMe from "./components/AboutMe"
import Blog from "./components/Blog"
import Portfolio from "./components/Portfolio"
import Resume from "./components/Resume"
import Contact from "./components/Contact"
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/aboutme">
            <AboutMe />
          </Route>

          <Route path="/blog">
            <Blog />
          </Route>

          <Route path="/portfolio">
            <Portfolio />
          </Route>

          <Route path="/resume">
            <Resume />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="*">
            <Redirect to ="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
