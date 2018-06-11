import React, { Component } from 'react';

export default class Cards extends Component {
  render() {
    return (
      <div className="cards">
        { this.props.children }
      </div>
    )
  }
}
