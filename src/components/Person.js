import React, { Component } from 'react';

class Person extends Component {
  render() {
    return (
      <p className={`alert alert-warning`}>
        I'm { this.props.name } and I am { this.props.age } years old! { this.props.children }
      </p>
    )
  }
}

export default Person;