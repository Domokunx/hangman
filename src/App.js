import React, { Component } from 'react';
import HangmanDrawing from "./components/hangmanDrawing";
import HangmanWord from "./components/hangmanWord";
import Keyboard from "./components/keyboard";
import list from "./components/Lists/list.js"   
import christmas from './components/Lists/christmas';
import Categories from './components/categories';

let correctLettersGuessedSet = new Set();

class App extends Component {
  state = {
    wrongGuesses: 0,
    correctLettersGuessed:[],
    word: christmas[Math.floor(Math.random() * list.length)],
    lettersGuessed: [],
    lettersToGuess:['filler'],
  } 

  handleKeyPress = (key) => {
    this.setState({lettersGuessed: [...this.state.lettersGuessed, key]})
    this.setState({lettersToGuess: [...new Set(this.state.word)]})

    document.addEventListener('click', function handleClick(event) {
      if (event.target.classList.contains('key')){
        event.target.classList.add('clicked');
      }
    });    

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

  handleWordList = (category) => {
    if (category === 'Christmas'){
      this.setState({
        word: christmas[Math.floor(Math.random() * list.length)],
      } )
    }

    else{
      this.setState({word: list[Math.floor(Math.random() * list.length)]})
    }

    this.setState({
      wrongGuesses: 0,
      correctLettersGuessed:[],
      lettersGuessed: [],
      lettersToGuess:['filler'],
    })

    let keyboard = document.querySelectorAll('.key');
    keyboard.forEach(key =>
      key.classList.remove('clicked')
    )
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
      <head><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7516443638604831"
     crossorigin="anonymous"></script></head>

    <div style={{ fontSize: '2rem', textAlign:'center'}}>{this.handleResult()}{(((this.handleResult() === 'You Win!') || this.handleResult() === 'You Lose!') ? <button style={{margin:'5px'}} onClick={this.refreshPage}>New Game</button> : '')}</div>
    <Categories updateWordList={this.handleWordList}/>
    <HangmanDrawing wrongGuesses={this.state.wrongGuesses}/>
    <HangmanWord correctLettersGuessed={this.state.correctLettersGuessed} word={this.state.word} wrongGuesses={this.state.wrongGuesses}/>
    <Keyboard word={this.state.word} onKeyPress={this.handleKeyPress}/>
</div>
    );
  }
}
 
export default App; 