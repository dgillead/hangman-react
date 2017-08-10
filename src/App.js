import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WORDS from './words'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      puzzleWord: WORDS[Math.floor(Math.random()*WORDS.length)],
      guessedLetters: []
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <h1>{this.state.puzzleWord}</h1>
        </p>
      </div>
    );
  }
}

export default App;
