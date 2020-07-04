import React, { Component } from 'react'
import team1 from "./img/team/team-1.png"
import team2 from "./img/team/team-2.png"
import team3 from "./img/team/team-3.png"
import team4 from "./img/team/team-4.png"

export default class Our extends Component {
    render() {
        return (
            <div className="our">
                <div className="container">
                <div className="row">
                <div className="col-6">
                  <span>OUR GREAT TEAM</span>
                  <h2>OUR INSTRUCTORS</h2>
                  </div>  
                  <div className="col-6">
                  <button>view all</button>
                  </div>  
                </div>
                <div className="row info">
                    <div className="col-6">
                        <div className="row">
                        <div className="col-4">
                        <img src={team1} />
                        </div>
                        <div className="col-8">
                            <h5>DAVID WARNER</h5>
                            <span>Instructor</span>
                            <p>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor.</p>
                            <ul className="icon list-unstyled ">
                  <li>
                   <a href="#"><i class="fa fa-instagram"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-facebook"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-youtube"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                </li>
            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                        <div className="col-4">
                        <img src={team2}/>
                        </div>
                        <div className="col-8">
                            <h5>DAVID WARNER</h5>
                            <span>Instructor</span>
                            <p>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor.</p>
                            <ul className="icon list-unstyled ">
                  <li>
                   <a href="#"><i class="fa fa-instagram"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-facebook"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-youtube"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                </li>
            </ul>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="row info">
                    <div className="col-6">
                        <div className="row">
                        <div className="col-4">
                        <img src={team3} />
                        </div>
                        <div className="col-8">
                            <h5>DAVID WARNER</h5>
                            <span>Instructor</span>
                            <p>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor.</p>
                            <ul className="icon list-unstyled ">
                  <li>
                   <a href="#"><i class="fa fa-instagram"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-facebook"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-youtube"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                </li>
            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                        <div className="col-4">
                        <img src={team4} />
                        </div>
                        <div className="col-8">
                            <h5>DAVID WARNER</h5>
                            <span>Instructor</span>
                            <p>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor.</p>
                            <ul className="icon list-unstyled ">
                  <li>
                   <a href="#"><i class="fa fa-instagram"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-facebook"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-youtube"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                </li>
            </ul>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
              
            </div>
        )
    }
}
