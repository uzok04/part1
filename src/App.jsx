import { useState } from 'react'

const Statistics = ({good, bad, neutral}) => {
  return (
  <div>
    <StatisticLine text="Good" value={good}/>  
    <StatisticLine text="Neutral" value={neutral}/>  
    <StatisticLine text="Bad" value={bad}/>  
    <StatisticLine text="Average" value={good + neutral + bad}/>  
    <StatisticLine text="All" value={(good + neutral + bad)/3}/>  
    <StatisticLine text="Positive" value={(good / (neutral + bad + good)) * 100 + "%"}/>  
  </div> )
}

const Button = ({func, text}) => {
  return(<button onClick={func}>{text}</button>)
}
const StatisticLine = ({text, value}) => {
  return(<p>{text} {value}<br /></p>)
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const incGood = () => {
    setGood(good + 1)
  }
  const incNeutral = () => {
    setNeutral(neutral + 1)
  }
  const incBad = () => {
    setBad(bad + 1)
  }
  return (
    <div>
      <h1>give feedback</h1>
      <Button func = {incGood} text = "Good" />
      <Button func = {incNeutral} text = "Neutral" />
      <Button func = {incBad} text = "Bad" />
      <h1>statistics</h1>
      {(good > 0 || bad > 0 || neutral || 0) ? <Statistics good = {good} bad = {bad} neutral = {neutral}/>
      : <p>no feedback given</p>}
      
    </div>
  )
}

export default App