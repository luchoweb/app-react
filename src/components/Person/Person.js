import React from 'react';
import styled from "styled-components";

//import './Person.scss';

const StyleDiv = styled.div`
  margin: 0 auto 2rem auto;
  width: 30%;
`;

const Person = ( props ) => {
  return (
    <StyleDiv className={`alert alert-warning`}>
      <p onClick={ props.clicked }>I'm { props.name } and I am { props.age } years old! { props.children }</p>
      <input type="text" onChange={ props.change }/>
    </StyleDiv>
  )
}

export default Person;