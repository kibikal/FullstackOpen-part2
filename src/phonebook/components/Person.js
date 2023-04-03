import React from 'react'

export const Person = (props) => {

  const deletePerson=()=>{
    
  }
  return (
     props.persons?.map((person) => (
        <p key={Math.random()}>
          {person.name} {person.number}
          <button onClick={props.onClick}>Delete</button>
        </p>
      ))
  );
}
