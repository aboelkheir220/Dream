import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div className="form">
            <div className="container">
              <a>GIVING BEST OPTIONS FOR YOU</a>  
              <h2>APPLICATION FORM</h2>
              <form>
                  <div className="row">
                     <div className="col-4">
                         <input type="text" placeholder="your name"/>
                     </div>
                     <div className="col-4">
                         <input type="email" placeholder="your email" />
                         </div>
                         <div className="col-4">
                         <input type="number" placeholder="your phone"/>
                         </div>
                  </div>
                  <div className="row">
                     <div className="col-4">
                         <input type="date" placeholder="your name"/>
                     </div>
                     <div className="col-4">
                             <select>
                                <option>Courses type</option>
                                <option>Safe Driving Courses</option>
                                <option>Motorhome Drivers</option>

                             </select>
                         </div>
                         <div className="col-4">
                         <select>
                                <option>Car type</option>
                                <option>Hatchback</option>
                                <option>Sedan </option>
                      </select>           
                      </div>
                  </div>
                  <button>SEND INQUIRY</button>
              </form>
              </div>

            </div>
        )
    }
}
