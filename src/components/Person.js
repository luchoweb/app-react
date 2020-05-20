import React from 'react';
import './Person.scss';

const Person = ( props ) => {
  return (
    <p className={`alert alert-warning person-item`} onClick={ props.clicked }>
      I'm { props.name } and I am { props.age } years old! { props.children }
      <input type="text" onChange={ props.change }/>
    </p>
  )
}

export default Person;