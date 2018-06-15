import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
// import cards from './cards.json';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      score: 0,
      topScore: 0,

    }
  }


  setScore() {
    // this.setState({
    //   score: newScore,
    //   topScore: newTopScore
    // })

    

    // if (this.state.clicked === false) {
    //   var newScore = this.state.score + 1

    //   this.setState ({
    //     score: newScore
        
    //   })
    // } else {
    //   alert("Sorry, you lost. Try Again!");
    //   this.setState ({
    //     score : 0
    //   })
    // }
  }


  render() {
    return (
      <div className="App">
        <Navbar  />
        <Header score={this.state.score} topScore={this.state.topScore}/>
        <Main setScore={this.setScore} />



      </div>
    );
  }
}

export default App;
