import React, { Component } from 'react';

class HangmanWord extends Component {
    state = {
        word: this.props.word,
    }

    updateWord() {
        if (this.props.wrongGuesses === 6){
            return this.state.word;
        }

        let id = 0;
        let currentWord = this.state.word.split('');
        currentWord = currentWord.map(letter => <div key={id++}>{this.getLetter(letter)}</div>)
        return currentWord;
    }

    getLetter(letter) {
        return letter = (this.props.correctLettersGuessed.includes(letter) ? letter : '_')
    }

    updateColor(){
         if (this.props.wrongGuesses === 6) return 'red'
         else return 'white'
    }

    render() { 
        return (
            <div className='guessWord' style={{fontSize:'64px', letterSpacing:'10px', color: this.updateColor(), display:'flex'}}>
                {this.updateWord()}
            </div>
        );
    }
}
 
export default HangmanWord;