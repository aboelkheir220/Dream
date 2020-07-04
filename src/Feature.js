import React, { Component } from 'react'
import feature1 from './img/feature/feature-1.png'
import feature2 from './img/feature/feature-2.png'
import feature3 from './img/feature/feature-3.png'

export default class Feature extends Component {
    render() {
        return (
            <div className="feature">
                <div className="container">
                <div className="row">
                    <div className="col-4 start">
                        <a>WHY CHOOSE US ?</a>
                        <h2>OUR FEATURE</h2>
                        <p className="prag">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua viverra maecenas facilisis.</p>
                        <button className="course">see courses</button>
                    </div>
                    <div className="col-4">
                        <div className="col">
                            <img src={feature1} />
                            <p>UNLIMITED CAR SUPPORT</p>
                        </div>
                        <div className="col">
                            <img src={feature2} />
                            <p>DRIVING SCHOOL INSURES</p>
                        </div>
                    </div>
                    <div className="col-4">
                    <div className="col last">
                            <img src={feature3} />
                            <p> ANY TIME ANY LOCATION</p>
                        </div>                
                        </div>
                </div>
                </div>
               
            </div>
        )
    }
}
