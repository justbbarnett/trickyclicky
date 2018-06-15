import React, { Component } from 'react';
import Cards from './Cards.js'
import cards from '../cards.json';
import "../styles/Main.css";


export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  shuffleCards = (arr) => {
    for (let i = (arr.length - 1); i > 0; i--) {
      const k = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[k]] = [arr[k], arr[i]];
    }
  };

  clickHandler = (id) => {
    
    this.setState({
      clicked: true
    });
    this.shuffleCards(cards); 
  }



  render() {
    return (
      
      <div className="main">
        <div className="wrapper row">
        
        {cards.map(card => 
          <Cards
            // clickCount={this.clickCount}
            id={card.id}
            name={card.name}
            image={card.image}
            clicked={card.clicked}
            clickHandler = { this.clickHandler }
          /> 
        )}
        </div>
          
      </div>
     
    )
  }
}

