import { useState } from "react"

const HighestVotesInfo = ({highestVotes, arr, obj}) => {
  return (
    <div>
      <h1>Anecdote with the most votes</h1>
    <p>
        {arr[highestVotes]} <br />
        has {obj[highestVotes] || 0} votes
    </p>  
    </div>
    
  )
}

const App = () => {
    const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({})
  const voting = () => {
    const newVotes = {...votes}
    newVotes[selected] = (newVotes[selected] || 0) + 1
    setVotes(newVotes)              
  }
  
    const highestVotes = () => {
      let maxIndex = 0
      let maxVotes = 0;
      for (let i = 0; i < anecdotes.length; i++) {   
        const v = votes[i] || 0
        if (v > maxVotes) {
          maxIndex = i
          maxVotes = v
        } 
      }
      return maxIndex
    }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>
        {anecdotes[selected]} <br/>
        has {votes[selected] || 0} votes
      </p>
      <button onClick = {voting}>vote</button>
      <button onClick={() => {setSelected(Math.floor(Math.random() * (anecdotes.length - 1)))}}>next anecdote</button>
      {Object.keys(votes).length != 0 ? <HighestVotesInfo arr = {anecdotes} obj = {votes} highestVotes = {highestVotes()}/> : <p>no votes yet</p>}
      
    </div>
    )
}

export default App