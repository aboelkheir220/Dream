import React, { Component } from 'react'
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <Router>
                <section className="head">
              <nav className="navbar">
              <a><span>D</span><span>ream</span></a>

                  <ul>

                      <li>
                      <Link to="/">Home</Link>
                      </li>
                      <li>
                      <Link to="/courses">courses</Link>
                      </li>
                      <li>
                      <Link to="/pages">pages</Link>
                      </li>
                      <li>
                      <Link to="/news">news</Link>
                      </li>
                      <li>
                      <Link to="/contacts">contacts</Link>
                      </li>
                  </ul>
                  <ul className="icon list-unstyled ">
                  <li>
                   <a href="#"><i class="fa fa-search"></i></a>
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
            <button>Get Started</button>

              </nav>
          </section>
            </Router>
          
        )
    }
}
