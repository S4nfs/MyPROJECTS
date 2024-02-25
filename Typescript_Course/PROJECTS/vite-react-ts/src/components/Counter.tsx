import React, { ChangeEvent, useReducer, useState } from 'react'
import { useCounter, useCounterText } from '../context/CounterContext'

type CounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>
  children: React.ReactNode
}

const Counter = ({ setCount, children }: CounterProps) => {
  const { count, increment, decrement } = useCounter()
  const { text, handleTextInput } = useCounterText()
  return (
    <>
      <h1>{children}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}> +</button>
      <button onClick={() => setCount((prev) => prev - 1)}> -</button>

      <h1>useReducer Hook with useContext {count}</h1>
      <button onClick={increment}> +</button>
      <button onClick={decrement}> -</button>
      <br></br>
      <input type='text' onChange={handleTextInput} />
      <p>{text}</p>
    </>
  )
}

export default Counter
