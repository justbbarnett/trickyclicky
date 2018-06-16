import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
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




  render() {
    return (
      <div className="App">
        <Navbar  />
        <Main setScore={this.setScore} />


      </div>
    );
  }
}

export default App;
