import React, { Component } from 'react';
import HangmanDrawing from "./components/hangmanDrawing";
import HangmanWord from "./components/hangmanWord";
import Keyboard from "./components/keyboard";
import list from "./components/list.js"   

let correctLettersGuessedSet = new Set();

class App extends Component {
  state = {
    wrongGuesses: 0,
    word: list[Math.floor(Math.random() * list.length)],
    correctLettersGuessed:[],
    lettersGuessed: [],
    lettersToGuess:['filler'],
  } 

  handleKeyPress = (key) => {
    this.setState({lettersGuessed: [...this.state.lettersGuessed, key]})
    this.setState({lettersToGuess: [...new Set(this.state.word)]})

    if (this.state.word.includes(key)){
      return this.handleCorrectGuess(key);
    }

    else {
      return this.handleWrongGuess();
    }
  }

  handleWrongGuess() {
    let {wrongGuesses: count} = this.state;
    if (count < 6) {
      count++;
    }
    this.setState({wrongGuesses: count});

    let currentWord = this.state.word.split('');
    currentWord = currentWord.map(letter => (this.state.correctLettersGuessed.includes(letter) ? letter : '_'))
    this.setState({currentWord})
  }

  handleCorrectGuess(key) {
    correctLettersGuessedSet.add(key)
    this.setState({correctLettersGuessed: [...correctLettersGuessedSet]})

    let currentWord = this.state.word.split('');
    currentWord = currentWord.map(letter => (this.state.correctLettersGuessed.includes(letter) ? letter : '_'))
    this.setState({currentWord})
  }

  handleResult() {
    if (this.state.correctLettersGuessed.length === this.state.lettersToGuess.length){
      return 'You Win!'
    }

    else if (this.state.wrongGuesses >= 6){
      return 'You Lose!'
    }
    else return 'Guessing...'
  }

  refreshPage() {
    window.location.reload(false);
  }

  render() { 
    return (      
      <div 
      className="App" 
      style={{
      display: 'flex',
      maxWidth: '800px',
      flexDirection: 'column',
      margin: '0 auto',
      alignItems: 'center'
      }}
    >

    <div style={{ fontSize: '2rem', textAlign:'center'}}>{this.handleResult()}{(((this.handleResult() === 'You Win!') || this.handleResult() === 'You Lose!') ? <button style={{margin:'5px'}} onClick={this.refreshPage}>New Game</button> : '')}</div>
    <HangmanDrawing wrongGuesses={this.state.wrongGuesses}/>
    <HangmanWord correctLettersGuessed={this.state.correctLettersGuessed} word={this.state.word} wrongGuesses={this.state.wrongGuesses}/>
    <Keyboard word={this.state.word} onKeyPress={this.handleKeyPress}/>
</div>
    );
  }
}
 
export default App; 