import React, { Component } from 'react';
import Validation from "./components/Validation/Validation";
import Char from "./components/Char/Char";

class App extends Component {
  state = {
    userInput: ''
  }

  inputChangedHandler = ( event ) => {
    this.setState({ userInput: event.target.value });
  }

  deleteCharHandler = ( index ) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updateText = text.join('');
    this.setState( { userInput: updateText } );
  }

  render() {
    const charList = this.state.userInput.split('').map( (ch, index) => {
      return <Char
        character={ ch }
        key={ index }
        clicked={ () => this.deleteCharHandler( index ) }
      />
    });

    return (
      <div className="App">
        <input
          type="text"
          onChange={ this.inputChangedHandler }
          value={ this.state.userInput }
        />
        <p>{ this.state.userInput }</p>
        <Validation inputLength={ this.state.userInput.length } />
        { charList }
      </div>
    );
  }
}

export default App;
