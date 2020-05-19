import React from 'react';

const Person = ( props ) => {
  return (
    <p className={`alert alert-warning`}>
      I'm { props.name } and I am { props.age } years old! { props.children }
    </p>
  )
}

export default Person;