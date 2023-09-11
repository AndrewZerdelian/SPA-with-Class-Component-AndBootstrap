import React, { Component } from "react";
import "./Portfolio.css";

export default class Portfolio extends Component {
  render() {
    return (
      <div className="Portfoliobackground vh-100 text-white">
        <div className="container text-center pt-4">
          <h1>PORTFOLIO COMPONENT</h1>

          <div className="row text-center justify-content-center pt-3">
            <div className="LineBefore col-1"></div>

            <span className="fa-solid fa-star col-1"></span>

            <div className="LineAfter col-1"></div>
          </div>
        </div>

        <div className="container">
        Hello This is mapping 
        </div>
      </div>
    );
  }
}
