import React, { Component } from 'react';

class DisplayPuzzleWord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayWord: this.updateWord()
    }
  }

  updateWord() {
    let splitWord = this.props.word.split('');
    let returnWord = '';
    this.props.guessedLetters.forEach((letterGuessed) => {
      splitWord.forEach((letter) => {
        if (letter === letterGuessed) {
          returnWord += letterGuessed;
        } else {
          returnWord += '_ ';
        }
      })
    })
    return returnWord;
  }

  render() {
    return (
      <div>
        <p>{this.state.displayWord}</p>
      </div>
    )
  }
}

export default DisplayPuzzleWord;
