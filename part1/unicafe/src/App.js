import { tab } from '@testing-library/user-event/dist/tab'
import { useState } from 'react'
const Button = ({handleClick, text})=>{
  return (
    <button onClick={handleClick}>{text}</button>
  )
}
const StatisticLine = ({text, value}) => (<tr><td>{text}</td><td>{value}</td></tr>)
const Statistics = ({good, neutral, bad}) => {
  if(good===0 && neutral===0 && bad ===0){
    return(
      <>
        <h3>statistic</h3>
        <p>No feedback given</p>
      </>
    )
  }
  
  return(
    <>
      <h3>statistic</h3>
      <table>
        <tbody>
          <StatisticLine text={"good"} value={good} />
          <StatisticLine text={"neutral"} value={neutral} />
          <StatisticLine text={"bad"} value={bad} />
          <StatisticLine text={"all"} value={good+neutral+bad} />
          <StatisticLine text={"average"} value={(good-bad)/(good+neutral+bad)} />
          <StatisticLine text={"positive"} value={(good*100)/(good+neutral+bad)} />
        </tbody>
      </table>
    </>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={()=>setGood(good+1)} text={"good"} />
      <Button handleClick={()=>setNeutral(neutral+1)} text={"neutral"} />
      <Button handleClick={()=>setBad(bad+1)} text={"bad"} />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
