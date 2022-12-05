import React, { Component } from 'react';
import hanger from './hangmanArt/hanger.jpg'
import hanger1 from './hangmanArt/guess 1.jpg'
import hanger2 from './hangmanArt/guess 2.jpg'
import hanger3 from './hangmanArt/guess 3.jpg'
import hanger4 from './hangmanArt/guess 4.jpg'
import hanger5 from './hangmanArt/guess 5.jpg'
import hanger6 from './hangmanArt/guess 6.jpg'


class HangmanDrawing extends Component {
    state = {
        hangman: [hanger, hanger1, hanger2, hanger3, hanger4, hanger5, hanger6]
    }
    render() { 
        return (
            <div className='drawing'>
                <img src={this.state.hangman[this.props.wrongGuesses]} alt="drawing" />
            </div>
        );
    }
}
 
export default HangmanDrawing;