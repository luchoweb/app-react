import React from 'react';
import './Person.scss';

const Person = ( props ) => {
  return (
    <p className={`alert alert-warning person-item`}>
      <span onClick={ props.clicked }>
        I'm { props.name } and I am { props.age } years old! { props.children }
      </span>
      <input type="text" onChange={ props.changed }/>
    </p>
  )
}

export default Person;