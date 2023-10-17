
import { useState } from 'react';
import './App.css'


function App() {

  let [counter, setCounter] = useState(15)
  
  const addValue = () => { 
    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
 return (
    <>
     <h1>Hello React</h1>

     <h2>Counter value :{counter}</h2>
     <button onClick={addValue}>add value</button>

     <br/>

     <h2>Counter value :{counter}</h2>
     <button onClick={removeValue}>remove value</button>
     
    </>
  )
}

export default App
