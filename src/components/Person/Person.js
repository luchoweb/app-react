import React from 'react';
import Radium from "radium";
import './Person.scss';

const Person = ( props ) => {
  const style = {
    '@media (min-width: 500px)': {
      width: '100%'
    }
  };

  return (
    <div className={`alert alert-warning person-item`} style={ style }>
      <p onClick={ props.clicked }>I'm { props.name } and I am { props.age } years old! { props.children }</p>
      <input type="text" onChange={ props.change }/>
    </div>
  )
}

export default Radium(Person);