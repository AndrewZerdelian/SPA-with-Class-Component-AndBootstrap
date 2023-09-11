import React, { Component } from "react";
import "./Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div className=" vh-100 FontColor">
        <div className="container text-center pt-4 mb-5">
          <h1>CONTACT SECTION</h1>

          <div className="row text-center justify-content-center pt-3">
            <div className="ContactLine col-1 "></div>

            <span className="fa-solid fa-star col-1 "></span>

            <div className="ContactLine col-1"></div>
          </div>
        </div>

        <div className="container w-50">
          <form>
            <div className="mb-3">
              <label className="form-label"></label>
              <input
                type="text"
                placeholder="User-Name"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label"></label>
              <input
                type="number"
                placeholder="UserAge"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label For="exampleInputEmail1" className="form-label"></label>
              <input
                type="email"
                placeholder="User-Email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text"></div>
            </div>
            <div className="mb-3">
              <label For="exampleInputPassword1" className="form-label"></label>
              <input
                type="password"
                placeholder="User-Password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" className="btn btn-success">
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  }
}
