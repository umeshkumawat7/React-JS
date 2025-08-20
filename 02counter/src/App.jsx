import { useState } from 'react'


import './App.css'

function App() {
  //let counter = 5
  let [counter,setCounter] = useState(0)
  //use state return a stateful value and function we can change name according over conventation
  
  const addValue = ()=>{
    counter = counter + 1
    //setCounter(counter+1)
    setCounter(counter)
    //console.log(counter);
  }
  const removeValue = () => {
    counter = counter -1
    setCounter(counter)
  }

  return (
    <>
      <h1>My Counter app</h1>
      <br /><br />
      <h3>Counter value in top bar : {counter}</h3>
      <button onClick={addValue}>Add-Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove-value</button>
      <br /><br />
      <h3>Counter value in down bar : {counter}</h3>
    </>
  )
}

export default App
