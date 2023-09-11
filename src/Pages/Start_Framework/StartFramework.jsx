import React, { Component } from "react";
import "./StartFramework.css";
import ProfilePhoto from "../../Assets/Photos/Profile Pic.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default class StartFramework extends Component {
  render() {
    return (
      <div className="StartFramework text-white ">
        <div className="container">
          <div className="row text-center justify-content-center p-5">
            <img src={ProfilePhoto} alt="profilephoto" className="w-50 mb-5" />
            <h1 className="fw-bold mb-5">Start Framework</h1>

            <div className="text-center mb-5">
              <div className="row text-center justify-content-center">
                <div className="LineBefore col-1"></div>
                <span className="fa-solid fa-star col-1"></span>
                <div className="LineAfter col-1"></div>
              </div>
            </div>

            <p className="mb-5">Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </div>
    ); // align-items-center
  }
}
// d-flex flex-col

/**
 * 
 *           <div className="container">

          <span className="title">

          <span className="mb-5 fa-solid fa-star"></span>
          
          </span>
          </div>
 */
/**
 * import React, { Component } from "react";
import "./StartFramework.css";
import ProfilePhoto from "../../Assets/Photos/Profile Pic.png";
export default class StartFramework extends Component {
  render() {
    return (
      <main className="StartFramework ">
      <div className="container ">
      <img src={ProfilePhoto} alt="PPhoto" className="h-25"/>
      <h1>Start Framework</h1>
      <p></p>

      </div>
      </main>
    );
  }
}
 * 
 */

/**
 * 
 * import React, { Component } from "react";
import "./StartFramework.css";
import ProfilePhoto from "../../Assets/Photos/Profile Pic.png";
export default class StartFramework extends Component {
  render() {
    return (

      <div className="StartFramework text-white">
        <div className="vh-100 container text-center align-items-center">
          <img src={ProfilePhoto} alt="profilephoto" 
          className="h-25 "/>
          <h1>StartFramework</h1>
          
        </div>
      </div>
    );
  }
}

 * 
 */
