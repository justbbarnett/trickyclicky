import React, { Component } from 'react';
import "../styles/Cards.css";

export default class Cards extends Component {
render() {
  return (
  
  <div className="card col-sm-4 col-md-3 col-lg-2"
    id = { this.props.id }
    clicked={this.props.clicked}
    onClick={() => this.props.clickHandler(this.props.id)}>
    <div className="img-container">
      <img alt={this.props.name} src={this.props.image} />
    </div>
  </div>
);

}}
