import React from 'react'

const Part = ({course}) => {
  return (
    <li>{course.name} {course.exercises}</li>
  )
}

export default Part