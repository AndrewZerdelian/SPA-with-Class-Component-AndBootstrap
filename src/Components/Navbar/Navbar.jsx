import React, { Component } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <main className="sticky-sm-top">
        <nav className="navbar navbar-expand-lg bg-body-tertiary ClearingNavigation">
          <div className="container-fluid Background-Color text-white p-5 ">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link text-success" : "nav-link "
              }
              to="/StartFramework"
            >
              <h2 className="fw-bold">START FRAMEWORK</h2>
            </NavLink>
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
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link text-success fw-bold"
                        : "fw-bold nav-link text-white"
                    }
                    to="/About"
                  >
                    ABOUT
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link text-success fw-bold"
                        : "fw-bold nav-link text-white"
                    }
                    to="/Portfolio"
                  >
                    PORTFOLIO
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link text-success fw-bold"
                        : "fw-bold nav-link text-white"
                    }
                    to="/Contact"
                  >
                    CONTACT
                  </NavLink>
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
 * import React, { Component } from "react";
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
                  <Link className="nav-link text-white fw-bold " to="/Portfolio">
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

 */
