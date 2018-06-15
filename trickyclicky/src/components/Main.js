import React, { Component } from 'react';
import Cards from './Cards.js'
import cards from '../cards.json';
import "../styles/Main.css";


export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      score : 0,
      highScore : 0,
      cards :cards
    };
  }

  // state = {
  //   userScore: 0,
  //   topScore: 0,
  //   cards :cards 
  // };



  shuffleCards = (arr) => {
    for (let i = (arr.length - 1); i > 0; i--) {
      const k = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[k]] = [arr[k], arr[i]];
    }
  };

  resetClicked = () => {
    this.state.cards.map(card=>
      card.clicked = false
    )
  }

  handleScore = () => {
    
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore
    })
    if (newScore >= this.state.topScore) {
      this.setState({
        topScore: newScore
      })
    }
    if (newScore === 12) {
      this.setState({ score: 0 });
      this.resetClicked();
    }
  };


  clickHandler = (id) => {

    for (var i = 0; i < this.state.cards.length; i++){
      if (id === this.state.cards[i].id){
        if (this.state.cards[i].clicked === false) {
          this.state.cards[i].clicked = true;
          this.handleScore();
        }
        else if (this.state.cards[i].clicked === true) {
          this.setState({ userScore: 0 });
          this.resetClicked();
          alert("May the force be with you. \nClick same twice you should not ");
        }
      }
    }
    
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

