import React from 'react';
import './Person.scss';

const Person = ( props ) => {
  return (
    <p className={`alert alert-warning person-item`}>
      I'm { props.name } and I am { props.age } years old! { props.children }
    </p>
  )
}

export default Person;