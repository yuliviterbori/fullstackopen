import React from 'react'

const Sum = ({parts}) => {
  return (
    <h3>total of {parts.reduce((prev,act)=>(prev+act.exercises),0)} exersices</h3>
  )
}

export default Sum