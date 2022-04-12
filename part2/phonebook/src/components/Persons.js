import React from 'react'
const Person = ({person, handleDelete}) => (<li>{person.name} {person.number} <button onClick={()=>handleDelete(person)}>delete</button></li>)
const Persons = ({filterPersons, handleDelete}) => {
  return (
    <ul>
        {filterPersons.map((person)=>(
          <Person key={person.name} person={person} handleDelete={handleDelete} />
        ))}
    </ul>
  )
}

export default Persons