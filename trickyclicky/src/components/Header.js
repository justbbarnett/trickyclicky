import React, { Component } from 'react';
import "../styles/Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="navbar navbar-expand-lg navbar-dark bg-light">
        <div className="mx-auto my-2 order-0 order-md-1">
          <ul className="navbar-nav ml-auto text-center">
            <li className="nav-item ">
              Your score : {this.props.score} 
            </li>
          </ul>
        </div>
        <div className="mx-auto my-2 order-0 order-md-1">
          <ul className="navbar-nav ml-auto text-center">
            <li className="nav-item text-green">
            win with different clicks you will
            </li>
          </ul>
        </div>
        <div className="mx-auto my-2 order-0 order-md-1">
              <ul className="navbar-nav mr-auto text-center">
                  <li className="nav-item ">
                    Top score : {this.props.topScore}
                  </li>
              </ul>
          </div>
        </div>

      </div>
    )
  }
}

// 