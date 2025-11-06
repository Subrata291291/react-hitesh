import { useState } from 'react';

import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  //let counter = 15;
  const increaeValue = () => {
    console.log('Value Increaed',counter);
    //counter = counter + 1
    setCounter(counter + 1)
  };
  const decreaseValue = () => {
    console.log('Value Decreased',counter);
    //counter = counter - 1
    setCounter(counter - 1)
  }

  return (
    <>
      <h2>Couter Value {counter}</h2>
      <button onClick={increaeValue}>Increae Value</button>
      <button onClick={decreaseValue}>Decrase Value</button>
    </>
  )
}

export default App
