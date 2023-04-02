import { useState } from "react";
import { AddForm } from "./components/AddForm";
import { Person } from "./components/Person";
const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
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
      setNewNumber("");
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>

      <AddForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <Person persons={persons} />
    </div>
  );
};

export default App;
