const Header = (props) => {
  
  return (
      <h1>{props.courseName}</h1>
  )
}

const Part = (props) => {

  return (
      <p>{props.name} {props.exercises}</p>
  )
}

const Content = (props) => {
  const parts = props.parts
  return (
      <div>
        <Part name = {parts[0].name} exercises = {parts[0].exercises}/>
        <Part name = {parts[1].name} exercises = {parts[1].exercises}/>
        <Part name = {parts[2].name} exercises = {parts[2].exercises}/>
      </div>
  )
}

const Total = (props) => {
  const total = props.total
  return (
    <p>Number of Exercises is {total[0].exercises + total[1].exercises + total[2].exercises}</p>
  )
}

const App = () => {
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
      <Header courseName = {course.name}/>
      <Content parts = {course.parts}/>
      <Total total = {course.parts}/>
    </div>
  )
}



/*
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header courseName = {course}/>
      <Content parts = {parts}/>
      <Total total = {parts}/>
    </div>
  )
}
*/
export default App