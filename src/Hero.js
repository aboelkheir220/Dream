import React, { Component } from 'react'
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import herobachground from './img/hero-bg.jpg'

export default class Hero extends Component {
    render() {
        return (
            <Router>
                <div className="hero">
                <img src={herobachground} />
                <p>BEST OPTIONS FOR YOU</p>
                <h2>DRIVE SAFE & GET LICENSE</h2>
                <Link to="/contact us">
                <button className="contact">CONTACT US </button>
                </Link>
                <Link to="/see cource">
                <button className="course"> SEE COURSES</button>
                </Link>
            </div>
            </Router>
            
        )
    }
}
