import { useState } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')
  const [filterPersons, setFilterPersons] = useState([...persons])
  const addPerson = (event)=>{
    event.preventDefault();
    const allNombres = persons.map(person=>person.name);
    if(allNombres.includes(newName)){
      window.alert(`${newName} is already added to phonebook`);
    }
    else{
      const newPerson = {
        name: newName,
        number: newPhone
      }
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewPhone("")
    }
  };
  const handleFilter = (event)=>{
    let fil = event.target.value;
    setFilter(fil);
    const newFilterPersons = persons.filter((person)=>(
      person.name.toLowerCase().includes(fil.toLowerCase())
    ))
    setFilterPersons(newFilterPersons);
  }
  const handleName = e =>setNewName(e.target.value);
  const handlePhone = e =>setNewPhone(e.target.value);
  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter filter = {filter} handleFilter={handleFilter}/>
      <h2>add a new</h2>
      <PersonForm 
        addPerson={addPerson}
        newName={newName}
        newPhone={newPhone}
        handleName={handleName}
        handlePhone={handlePhone}/>
      <h2>Numbers</h2>
      <Persons filterPersons = {filterPersons}/>
    </div>
  )
}

export default App