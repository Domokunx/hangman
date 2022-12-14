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
                <button id="key" onClick={() => this.props.onKeyPress('a')} className="key">A</button>
                <button id="key" onClick={() => this.props.onKeyPress('b')} className="key">B</button>
                <button id="key" onClick={() => this.props.onKeyPress('c')} className="key">C</button>
                <button id="key" onClick={() => this.props.onKeyPress('d')} className="key">D</button>
                <button id="key" onClick={() => this.props.onKeyPress('e')} className="key">E</button>
                <button id="key" onClick={() => this.props.onKeyPress('f')} className="key">F</button>
                <button id="key" onClick={() => this.props.onKeyPress('g')} className="key">G</button>
                <button id="key" onClick={() => this.props.onKeyPress('h')} className="key">H</button>
                <button id="key" onClick={() => this.props.onKeyPress('i')} className="key">I</button>
                <button id="key" onClick={() => this.props.onKeyPress('j')} className="key">J</button>
                <button id="key" onClick={() => this.props.onKeyPress('k')} className="key">K</button>
                <button id="key" onClick={() => this.props.onKeyPress('l')} className="key">L</button>
                <button id="key" onClick={() => this.props.onKeyPress('m')} className="key">M</button>
                <button id="key" onClick={() => this.props.onKeyPress('n')} className="key">N</button>
                <button id="key" onClick={() => this.props.onKeyPress('o')} className="key">O</button>
                <button id="key" onClick={() => this.props.onKeyPress('p')} className="key">P</button>
                <button id="key" onClick={() => this.props.onKeyPress('q')} className="key">Q</button>
                <button id="key" onClick={() => this.props.onKeyPress('r')} className="key">R</button>
                <button id="key" onClick={() => this.props.onKeyPress('s')} className="key">S</button>
                <button id="key" onClick={() => this.props.onKeyPress('t')} className="key">T</button>
                <button id="key" onClick={() => this.props.onKeyPress('u')} className="key">U</button>
                <button id="key" onClick={() => this.props.onKeyPress('v')} className="key">V</button>
                <button id="key" onClick={() => this.props.onKeyPress('w')} className="key">W</button>
                <button id="key" onClick={() => this.props.onKeyPress('x')} className="key">X</button>
                <button id="key" onClick={() => this.props.onKeyPress('y')} className="key">Y</button>
                <button id="key" onClick={() => this.props.onKeyPress('z')} className="key">Z</button>
            </div>
        );
    }
}
 
export default Keyboard;