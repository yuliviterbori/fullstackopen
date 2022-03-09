import React from 'react'
import Part from './Part'
const Content = ({parts}) => {
  return (
    <ul>
        {parts.map((course)=>(
            <Part key={course.id} course={course}/>
        ))}
    </ul>
  )
}

export default Content