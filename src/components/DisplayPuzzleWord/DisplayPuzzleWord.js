import React, { Component } from 'react';

class DisplayPuzzleWord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayWord: this.props.word.split('').map((letter) => { return '  ___  '} )
    }
  }

  // createDisplay() {
  //   console.log(this.state.displayWordSplit);
  //   let returnDisplay = this.state.displayWordSplit.forEach((letter) => {
  //     returnDisplay += '_';
  //   })
  //   return returnDisplay;
  // }

  render() {
    return (
      <div>
        <p>{this.state.displayWord}</p>
      </div>
    )
  }

}

export default DisplayPuzzleWord;
