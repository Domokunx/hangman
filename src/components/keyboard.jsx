import React, { Component } from 'react';

class Keyboard extends Component {


    render() { 
        return (
            <div className='keyboard'
            style ={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                flexGrow: '1',
                justifyContent: 'center'
            }}
            >
                <button onClick={() => this.props.onKeyPress('a')} className="key">A</button>
                <button onClick={() => this.props.onKeyPress('b')} className="key">B</button>
                <button onClick={() => this.props.onKeyPress('c')} className="key">C</button>
                <button onClick={() => this.props.onKeyPress('d')} className="key">D</button>
                <button onClick={() => this.props.onKeyPress('e')} className="key">E</button>
                <button onClick={() => this.props.onKeyPress('f')} className="key">F</button>
                <button onClick={() => this.props.onKeyPress('g')} className="key">G</button>
                <button onClick={() => this.props.onKeyPress('h')} className="key">H</button>
                <button onClick={() => this.props.onKeyPress('i')} className="key">I</button>
                <button onClick={() => this.props.onKeyPress('j')} className="key">J</button>
                <button onClick={() => this.props.onKeyPress('k')} className="key">K</button>
                <button onClick={() => this.props.onKeyPress('l')} className="key">L</button>
                <button onClick={() => this.props.onKeyPress('m')} className="key">M</button>
                <button onClick={() => this.props.onKeyPress('n')} className="key">N</button>
                <button onClick={() => this.props.onKeyPress('o')} className="key">O</button>
                <button onClick={() => this.props.onKeyPress('p')} className="key">P</button>
                <button onClick={() => this.props.onKeyPress('q')} className="key">Q</button>
                <button onClick={() => this.props.onKeyPress('r')} className="key">R</button>
                <button onClick={() => this.props.onKeyPress('s')} className="key">S</button>
                <button onClick={() => this.props.onKeyPress('t')} className="key">T</button>
                <button onClick={() => this.props.onKeyPress('u')} className="key">U</button>
                <button onClick={() => this.props.onKeyPress('v')} className="key">V</button>
                <button onClick={() => this.props.onKeyPress('w')} className="key">W</button>
                <button onClick={() => this.props.onKeyPress('x')} className="key">X</button>
                <button onClick={() => this.props.onKeyPress('y')} className="key">Y</button>
                <button onClick={() => this.props.onKeyPress('z')} className="key">Z</button>
            </div>
        );
    }
}
 
export default Keyboard;