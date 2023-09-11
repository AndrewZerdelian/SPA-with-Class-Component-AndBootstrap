import React, { Component } from "react";

export default class Error extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div>
          <h1>OHH NO!</h1>
          <h3>
            it looks like this page is not available return back to{" "}
            <a href="StartFramework">Homepage</a>
          </h3>
        </div>
      </div>
    );
  }
}
