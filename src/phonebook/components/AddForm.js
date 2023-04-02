import React from "react";

export const AddForm = (props) => {
  
  const handleNameChange = (event) => {
    props.setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    props.setNewNumber(event.target.value);
  };
  return (
    <form onSubmit={props.addPerson}>
      <h2>Add New</h2>
      <div>
        <label htmlFor="name">name:</label>{" "}
        <input
          placeholder="Add person"
          onChange={handleNameChange}
          id="name"
          value={props.newName}
        />
      </div>

      <div>
        <label htmlFor="number">Number</label>
        <input
          placeholder="Add number"
          onChange={handleNumberChange}
          id="number"
          type="tel"
          value={props.newNumber}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
