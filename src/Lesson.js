import React, { Component } from 'react'
import background from "./img/video-bg.jpg"
export default class Lesson extends Component {
    render() {
        return (
            <div>
                <section className="lesson">
                    <div className="container">
                    <div className="row">
                    <div className="col-6">
                        <img src={background} />
                        <a href="https://www.youtube.com/watch?v=bGuHgRQSEuk" className="play-btn video-popup">
                            <i class="fa fa-play"></i>
                        </a>
                    </div>
                    <div className="col-6 second">
                        <a>WELCOME TO ONLINE TRAFIC SCHOOL</a>
                        <h2>LOOKING FOR LESSONS?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum vidnas 
                            accumsan lacus vel facilisis.    </p>
                            <button >Learn more</button>
                    </div>
                    </div>
                    </div>
                 
                </section>
            </div>
        )
    }
}
