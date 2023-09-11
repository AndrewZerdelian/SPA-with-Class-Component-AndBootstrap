import React, { Component } from "react";
import photo0 from "../../Assets/Photos/asset 0.png";
import photo1 from "../../Assets/Photos/asset 1.png";
import photo2 from "../../Assets/Photos/asset 2.png";
import "./Portfolio.css";

export default class Portfolio extends Component {
  state = {
    Data: [
      { Photo: photo0, id: 1 },
      { Photo: photo1, id: 2 },
      { Photo: photo2, id: 3 },

      { Photo: photo0, id: 4 },
      { Photo: photo1, id: 5 },
      { Photo: photo2, id: 6 },

      { Photo: photo0, id: 7 },
      { Photo: photo1, id: 8 },
      { Photo: photo2, id: 9 },
    ],
  };

  render() {
    return (
      <div className=" text-black">
        <div className="container text-center pt-4">
          <h1>PORTFOLIO COMPONENT</h1>

          <div className="row text-center justify-content-center pt-3 mb-5">
            <div className="btates1 col-1 "></div>

            <span className="fa-solid fa-star col-1 "></span>

            <div className="btates2 col-1 "></div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {this.state.Data.map((item) => (
              <div className="col-lg-4 col-md-6 mb-4" key={item.id}>
                <div className="card d-flex justify-content-center">
                  {" "}
                  {/* Apply d-flex and justify-content-center here */}
                  <img src={item.Photo} className="card-img-top" alt="photos" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
