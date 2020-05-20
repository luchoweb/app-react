import React, { Component } from 'react';
import Person from "./components/Person";

// Import CSS
import 'bootstrap/scss/bootstrap.scss';
import Styles from './App.module.scss';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Luis Augusto', age: 31 },
      { id: '2', name: 'Marlie Elena', age: 32 },
      { id: '3', name: 'Mirlei Sofia', age: 5 }
    ],
    showPersons: false
  }

  switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Marlie';
    this.setState({
      persons: [
        { id: '1', name: 'Luis', age: 31 },
        { id: '2', name: 'Marlie', age: 32 },
        { id: '3', name: 'Mirlei', age: 5 }
      ]
    })
  }

togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }


  deletePersonHandler = (index) => {
    const persons = this.state.persons;
    persons.splice(index, 1);

    this.setState({
      persons: persons
    })
  }

  render() {
    const style = {}

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
                clicked={ () => this.deletePersonHandler(index) }
              />
            })
          }
          <button
            onClick={ this.switchNameHandler }
            className={`${Styles.Button} btn btn-primary`}>
            Change name
          </button>
        </div>
      );
    }

    const assignedClasses = [];
    if ( this.state.persons.length <= 2 ) {
      assignedClasses.push('red');
    }
    if ( this.state.persons.length <= 1 ) {
      assignedClasses.push('bold');
    }

    return (
      <div className={`container ${Styles.App}`}>
        <h1>It works!</h1>
        <p className={ assignedClasses.join(' ') }>This is really working!</p>
        <button
          style={ style }
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
