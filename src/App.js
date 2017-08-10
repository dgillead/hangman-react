import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WORDS from './words'
import DisplayPuzzleWord from './components/DisplayPuzzleWord/DisplayPuzzleWord';

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
          <DisplayPuzzleWord word={this.state.puzzleWord} guessedLetters={this.state.guessedLetters} />
        </p>
      </div>
    );
  }
}

export default App;
