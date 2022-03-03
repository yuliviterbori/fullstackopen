import { useState } from 'react'
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  
  const [selected, setSelected] = useState(0)
  const [votes,setVotes] = useState(Array(anecdotes.length).fill(0))
  const [maximo, setMaximo] = useState(0);
  const handleRandomSelectd = () =>{
    let number = Math.floor(Math.random() * anecdotes.length);
    console.log(number)
    setSelected(number);
  }
  const handleVote = (actual)=>{
    const copy = [...votes];
    copy[actual] += 1;
    console.log(copy);
    setVotes(copy);
    if(copy[actual]>votes[maximo]){
      setMaximo(actual);
    }
  }
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <div>
        <button onClick={()=>handleVote(selected)}>vote</button>
        <button onClick={handleRandomSelectd}>next anecdote</button>
      </div>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[maximo]}</p>
    </div>
  )
}

export default App
