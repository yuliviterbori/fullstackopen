import axios from 'axios';
import { useState, useEffect } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]); 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')
  const [filterPersons, setFilterPersons] = useState([])

  useEffect(()=>{
    axios
    .get("http://localhost:3001/persons")
    .then(res => {
      setPersons(res.data);
      setFilterPersons(res.data);
      
    })
  },[])
  useEffect(()=>{
    const newFilterPersons = persons.filter((person)=>(
      person.name.toLowerCase().includes(filter.toLowerCase())
    ));
    setFilterPersons(newFilterPersons);
  }, [persons, filter]);
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
      setNewPhone("");
    }
  };
  
  const handleName = e =>setNewName(e.target.value);
  const handlePhone = e =>setNewPhone(e.target.value);
  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter filter = {filter} handleFilter={e=>setFilter(e.target.value)}/>
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