import React, { Component } from 'react';
import "../styles/Navbar.css";

export default class Navbar extends Component {
  render() {
    return (


    <div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        <div className="mx-auto my-2 order-0 order-md-1 position-relative">
          <a className="mx-auto" href="/">
            <img src="/assets/images/yoda.png" className="rounded-circle yoda" alt="Logo"/>
          </a>
            
        </div>

      </nav>

    </div>

    )
  }
}
