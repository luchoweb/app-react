import React, { Component } from 'react';
import Person from "./components/Person";

// Import CSS
import 'bootstrap/scss/bootstrap.scss';
import './App.css';

class App extends Component {
  // create a new state!
  state = {
    persons: [
      { id: '1', name: 'Luis Augusto', age: 31 },
      { id: '2', name: 'Marlie Elena', age: 32 },
      { id: '3', name: 'Mirlei Sofia', age: 5 }
    ],
    showPersons: false
  }

  // Change all persons in the state with new names!
  switchNameHandler = () => {
    // DON'T DO THIS: this.state.persons[0].name = 'Marlie';
    this.setState({
      persons: [
        { id: '1', name: 'Luis', age: 31 },
        { id: '2', name: 'Marlie', age: 32 },
        { id: '3', name: 'Mirlei', age: 5 }
      ]
    })
  }

  // Show or hide all persons with a click event
  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }


  // delete some person in the state with click event
  deletePersonHandler = (index) => {
    const persons = this.state.persons;
    persons.splice(index, 1);

    this.setState({
      persons: persons
    })
  }

  // Change a person's name by input value
  changeNameHandler = ( event ) => {
    // Find index for this input event
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    // save the person with this index in a const
    const person = {
      ...this.state.persons[personIndex]
    };

    // Change the name for this person
    person.name = event.target.value;

    // save the persons state in a const
    const persons = [ ...this.state.persons ];
    // change attrs values for person with index
    persons[personIndex] = person;

    // finally, save the new person to state
    this.setState({ persons: persons });
  }

  render() {

    // create a persons
    let persons = null;

    // if show persons state is true!
    if ( this.state.showPersons ) {
      // add JSX to persons
      persons = (
        <div>
          {
            // mapping persons on state
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
            className={`btn btn-primary`}>
            Change name
          </button>
        </div>
      );
    }

    return (
      <div className={`container App`}>
        <h1>It works!</h1>
        <p>This is really working!</p>
        <!-- Show / Hide Persons -->
        <button
          className={`btn btn-info`}
          onClick={ this.togglePersonsHandler }>
            { this.state.showPersons ? 'Hide' : 'Show' } persons
        </button>
        <hr />
        <!-- Show persons find in the state-->
        { persons }
      </div>
    );
  }
}

export default App;
