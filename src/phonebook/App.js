import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }, "Nimoak"]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    const allNames = persons.map((person) => {
      return person.name;
    });

    const personResource = {
      name: newName,
      number: newNumber,
    };

    if (allNames.includes(newName)) {
      alert(`${newName} is already added to the phone book`);
    } else {
      setPersons(persons.concat(personResource));
      setNewName("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          <label htmlFor="name">name:</label>{" "}
          <input
            placeholder="Add person"
            onChange={handleNameChange}
            id="name"
            value={newName}
          />
        </div>

        <div>
        <label htmlFor="number">Number</label>
          <input
            placeholder="Add number"
            onChange={handleNumberChange}
            id="number"
            type="tel"
            value={newNumber}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={Math.random()}>{person.name} {person.number}</p>
      ))}
    </div>
  );
};

export default App;
