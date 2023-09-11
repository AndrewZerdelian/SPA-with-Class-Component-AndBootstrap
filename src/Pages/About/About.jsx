import React, { Component } from "react";
import "./About.css";
export default class About extends Component {
  render() {
    return (
      <div className="AboutBackGround text-white vh-100">
        <div className="vh-100 row text-center justify-content-center  align-items-center  p-5">
          <div className="container">
            <h1>ABOUT COMPONENT</h1>
            <div className="row text-center justify-content-center pt-3">
              <div className="LineBefore col-1"></div>

              <span className="fa-solid fa-star col-1"></span>

              <div className="LineAfter col-1"></div>
            </div>
            <div className="row ">
              <p className="col-6 ">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
              <p className="col-6 ">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
