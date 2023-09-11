import React, { Component } from "react";

import StartFramework from "./Pages/Start_Framework/StartFramework";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";
import Error from "./Pages/Error/Error";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import '@fortawesome/fontawesome-free/css/all.min.css'
//import { FontawesomeObject } from "@fortawesome/fontawesome";
//routing

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/", element: <StartFramework /> },
      { path: "StartFramework", element: <StartFramework /> },
      { path: "About", element: <About /> },
      { path: "Portfolio", element: <Portfolio /> },
      { path: "Contact", element: <Contact /> },
      { path: "*", element: <Error /> },
    ],
  },
]);

export default class App extends Component {
  render() {
    return (
      <div>
        <RouterProvider router={router} />
      </div>
    );
  }
}

// <Navbar />
// <Footer />

/**
 * 
 * import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import StartFramework from "./Pages/Start_Framework/StartFramework";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";
import Error from "./Pages/Error/Error";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
//routing

const router = createBrowserRouter([
  { path: "/", element: <StartFramework /> },
  { path: "StartFramework", element: <StartFramework /> },
  { path: "About", element: <About /> },
  { path: "Portfolio", element: <Portfolio /> },
  { path: "Contact", element: <Contact /> },
  { path: "*", element: <Error /> },
]);

export default class App extends Component {
  render() {
    return (
      <main>
        <Navbar />

        <RouterProvider router={router} />

        <Footer />
      </main>
    );
  }
}

 */
