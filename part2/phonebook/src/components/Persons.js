import React from 'react'
const Person = ({name, number}) => (<li key={name}>{name} {number}</li>)
const Persons = ({filterPersons}) => {
  return (
    <ul>
        {filterPersons.map((person)=>(
          <Person name={person.name} number={person.number}/>
        ))}
    </ul>
  )
}

export default Persons