import React from "react";

export const Course = ({ course }) => {
    const {parts}= course;
  return (
    <div>
      <h1>{course.name}</h1>
      {parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
      <h3>
        Total of {parts.reduce(
          (accumulator, {exercises}) => accumulator + exercises,0
        )} exercises
      </h3>
    </div>
  );
};
