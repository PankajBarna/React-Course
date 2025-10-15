import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  
  const incValue = () => {
    counter >= 20 ? 20 : setCounter(counter + 1)
    // console.log('value incremented', Math.random())
  }

  const decValue = () => {
    counter <= 0 ? 0 : setCounter(counter - 1)
    // console.log('value decremented', Math.random());
    
  }
  

  return (
    <>
      <h1>Counter Value: {counter}</h1>
      <h3>Count: {counter}</h3>
      <br />
      <button onClick={incValue}> + </button>
      <br /><br />
      <button onClick={decValue}> - </button>
    </>
  )
}

export default App
