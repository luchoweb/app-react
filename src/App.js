import React, { Component } from 'react';
import './App.css';
import Person from "./components/Person";

class App extends Component {
  state = {
    persons: [
      { name: 'Lucho Web', age: 30 },
      { name: 'Mirlei Sofia', age: 5 }
    ]
  }

  switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Marlie';
    this.setState({
      persons: [
        { name: 'Luis Augusto', age: 31 },
        { name: 'Marlie Elena', age: 32 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <Person name={ this.state.persons[0].name } age={ this.state.persons[0].age } />
        <Person name={ this.state.persons[1].name } age={ this.state.persons[1].age }>My hobbies: play with toys</Person>
        <button onClick={this.switchNameHandler}>Change name</button>
      </div>
    );

      // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, Im Lucho Web!'));
  }
}

export default App;
