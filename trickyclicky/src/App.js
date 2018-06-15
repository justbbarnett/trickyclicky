import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      score: 0,
      topScore: 0,
      clicked: []
    }
  }

  setScore = (newScore, newTopScore) => {
    this.setState({
      score: newScore,
      topScore: newTopScore
    })
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
