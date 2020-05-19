import React, { Component } from 'react';
import Person from "./components/Person";

// Import CSS
import 'bootstrap/scss/bootstrap.scss';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Lucho Web', age: 30 },
      { id: '2', name: 'Mirlei Sofia', age: 5 }
    ],
    showPersons: false
  }

  switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Marlie';
    this.setState({
      persons: [
        { id: '1', name: 'Luis Augusto', age: 31 },
        { id: '2', name: 'Marlie Elena', age: 32 }
      ]
    })
  }

togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  render() {
    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                name={ person.name }
                age={ person.age }
                key={ person.id }
              />
            })
          }
          <button
            onClick={ this.switchNameHandler }
            className={`btn btn-primary`}>
            Change name
          </button>
        </div>
      );
    }

    return (
      <div className={`container App`}>
        <h1>It works!</h1>
        <button
          className={`btn btn-info`}
          onClick={ this.togglePersonsHandler }>
            { this.state.showPersons ? 'Hide' : 'Show' } persons
        </button>
        <hr />
        { persons }
      </div>
    );
  }
}

export default App;
