import React from 'react'

export const Person = (props) => {
  return (
     props.persons?.map((person) => (
        <p key={Math.random()}>
          {person.name} {person.number}
        </p>
      ))
  );
}
