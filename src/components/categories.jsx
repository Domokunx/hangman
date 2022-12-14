import React, { Component } from 'react';

class Categories extends Component {
    state = {
        open: true,
    }

    twoFunctions(category){
        this.toggle();
        this.props.updateWordList(category);
    }

    toggle(){
        const { open } = this.state;
        this.setState({open: !open})
    }

    showCategory(){
        if (this.state.open){
            return (
            <div className='window-wrapper' style={{position:'absolute', display:'flex', flexDirection:'column', background:'#333', translate:"-21px"}}>
                <button style={{width:'232.5px', marginLeft:'auto', marginRight:'auto'}} onClick={() => this.twoFunctions('Christmas')}>Christmas</button>
                <button style={{width:'fit-content', marginLeft:'auto', marginRight:'auto'}} onClick={() => this.twoFunctions('test')}>Random words used in development</button>
            </div>)
        }
        else return;
    }

    render() { 
        return (
            <div class="category">
                <button onClick={() => this.toggle()} className="button">Categories!</button>
                {this.showCategory()}
            </div>
        );
    }
}
 
export default Categories;