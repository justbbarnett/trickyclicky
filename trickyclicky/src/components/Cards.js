import React from 'react';
import "../styles/Cards.css";

const Cards = props => (
  <div className="card col-sm-4 col-md-3 col-lg-2" onClick={() => props.clickCount(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Cards;
