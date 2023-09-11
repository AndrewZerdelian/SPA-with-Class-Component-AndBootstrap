import React, { Component } from "react";
import "./Navbar.css";
import { Link,} from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <main className="sticky-sm-top">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid Background-Color text-white p-5 ">
            <Link className="nav-link " to="/StartFramework">
              <h2 className="fw-bold">
              START FRAMEWORK
              </h2>
            </Link>
            <button
              className="navbar-toggler bg-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <li className="nav-item ">
                  <Link className="nav-link text-white fw-bold" to="/About">
                    ABOUT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white fw-bold" to="/Portfolio">
                    PORTFOLIO
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white fw-bold" to="/Contact">
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
      </main>
    );
  }
}

/**
 * 
 * import React, { Component } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
  render() {
    return (
      <main>
      
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-0 ">

      <div className="container-fluid Background-Color p-3  ">
      <div className='container'>
        <a className="navbar-brand text-white fw-bold px-lg-5" href="/">START FRAMEWORK</a>

        </div>

        <div className=''>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon "></span>
      </button>

      </div>
        <div className="collapse navbar-collapse " id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3 ">
            <li className="nav-item">
            <button type="button" className="btn btn-success">ABOUT</button>
            </li>
            <li className="nav-item">
            <button type="button" className="btn btn-success">PORTFOLIO</button>
            </li>
            <li className="nav-item">
            <button type="button" className="btn btn-success">CONTACT</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      </main>
    )
  }
}
 * 
 */

//bg-secondary

/**
 * import React, { Component } from 'react'

export default class Navbar extends Component {
render() {
    return (
    <main>
    
    <nav className="navbar navbar-expand-lg bg-secondary">
    <div className="container-fluid " >

        <a className="navbar-brand text-white fw-bold" href="#=/">START FRAMEWORK</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className='grid text-start '>
        <button type="button" class="btn btn-success">About</button>
        <button type="button" class="btn btn-success">PORTFOLIO</button>
        <button type="button" class="btn btn-success">CONTACT</button>
        </ul>
        
        </div>
    </div>
    </nav>
    </main>
    )
  }
}
 */
