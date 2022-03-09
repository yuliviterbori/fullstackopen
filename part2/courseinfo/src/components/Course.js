import React from 'react'
import Content from './Content'
import Header from './Header'
import Sum from './Sum'
const Course = ({course}) => {
  return (
    <div>
        <Header title={course.name}/>
        <Content parts={course.parts} />
        <Sum parts={course.parts}/>
    </div>
  )
}

export default Course