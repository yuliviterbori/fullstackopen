const App = () => {
  const Header = ({course})=>{
    return <h1>{course}</h1>
  }
  const Content = ({parts})=>{
    const Part = ({name, number})=>{
      return <p>
      {name} {number}
    </p>
    }
    return <>
      {parts.map((item)=>(
        <Part name={item.name} number={item.exercises}/>
      ))}
    </>
  }
  const Total = ({parts})=>{
    return <p>Number of exercises {parts.map((itm)=>itm.exercises).reduce((a,b)=>a+b,0)}</p>
  }
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App