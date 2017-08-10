import React, { Component } from 'react';

class DisplayPuzzleWord extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>{this.props.word}{this.props.guessedLetters}</p>
      </div>
    )
  }

}

export default DisplayPuzzleWord;
