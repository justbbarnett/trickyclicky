import React, { Component } from 'react';
import Cards from './Cards.js'
import cards from '../cards.json';
import "../styles/Main.css";


export default class Main extends Component {
  render() {
    return (
      
      <div className="main">
        <div className="wrapper row">
        
        {cards.map(card => 
          <Cards
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          /> 
        )}
        </div>
          
      </div>
     
    )
  }
}

