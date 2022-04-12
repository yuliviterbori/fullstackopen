import { useState, useEffect } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personsServices from './services/persons';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]); 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')
  const [filterPersons, setFilterPersons] = useState([])
  const [notifi, setNotifi] = useState({message: null, isGood:true})
  useEffect(()=>{
    personsServices
    .getAll()
    .then(res => {
      setPersons(res);
      setFilterPersons(res);
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
    const ps = persons.find(e => e.name === newName);
    console.log(ps);
    if(ps!==undefined){
      replaceNumber(ps,newPhone);
    }
    else{
      const newPerson = {
        name: newName,
        number: newPhone
      }
      personsServices
      .create(newPerson)
      .then(response => {
        setPersons(persons.concat(response));
        setNewName("");
        setNewPhone("");
        setNotifi({message: `Added ${response.name}`, isGood: true});
        setTimeout(()=>{
          setNotifi({message:null});
        },5000)
      })
    }
  };
  
  const handleName = e =>setNewName(e.target.value);
  const handlePhone = e =>setNewPhone(e.target.value);
  const handleDelete = person => {
    const confirm = window.confirm(`Are you sure to delete ${person.name}?`);
    if(confirm){
      personsServices
      .deleteP(person.id)
      .then(response => {
        setPersons(persons.filter(p=>p.id!==person.id));
        console.log(response);
        setNotifi({message: `Removed ${person.name}`, isGood: false});
        setTimeout(()=>{
          setNotifi({message:null});
        },5000)
      })
      .catch(error => {
        //console.log(error);
        setPersons(persons.filter(p=>p.id!==person.id));
        setNotifi({message: `Information of ${person.name} has already been removed from server`, isGood: false});
        setTimeout(()=>{
          setNotifi({message:null});
        },5000)
      });
    }
  }
  const replaceNumber = (person, newNumber) =>{
    const confirm = window.confirm(`${person.name} is already added to phonebook, replace the old number with a new one?`);
    if(confirm){
      const newPerson = {
        ...person,
        number: newNumber
      }
      personsServices
      .update(person.id, newPerson)
      .then(response => {
        const newPersons =persons.map((itm) => (
          itm.name!==response.name ? itm : response
        ));
        setPersons(newPersons);
        setNewName("");
        setNewPhone("");
        setNotifi({message: `Replace number of ${response.name}`, isGood: true});
        setTimeout(()=>{
          setNotifi({message:null});
        },5000)
      });
    }
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notifi.message} isGood={notifi.isGood} />
      <Filter filter = {filter} handleFilter={e=>setFilter(e.target.value)}/>
      <h2>add a new</h2>
      <PersonForm 
        addPerson={addPerson}
        newName={newName}
        newPhone={newPhone}
        handleName={handleName}
        handlePhone={handlePhone}/>
      <h2>Numbers</h2>
      <Persons filterPersons = {filterPersons} handleDelete = {handleDelete}/>
    </div>
  )
}

export default App