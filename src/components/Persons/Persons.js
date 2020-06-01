import React from 'react';
import Person from './Person/Person';

// When the arrow function return only JSX, we can return => ( JSX here )
const Persons = ( props ) =>
  props.persons.map(( person, index ) => {
    return <Person
      click={ () => props.clicked( index ) }
      name={ person.name }
      age={ person.age }
      key={ person.id }
      changed={ ( event ) => props.changed( event, person.id ) }
    />
  });

export default Persons;