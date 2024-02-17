import React, { useReducer, useState } from 'react'

type CounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>
  children: React.ReactNode
}

const initialState = { count: 0 }
const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
}
type ReducerAction = {
  type: REDUCER_ACTION_TYPE
}
const reducer = (state: typeof initialState, action: ReducerAction): typeof initialState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 }
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 }
    default:
      throw new Error()
  }
}
const Counter = ({ setCount, children }: CounterProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <h1>{children}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}> +</button>
      <button onClick={() => setCount((prev) => prev - 1)}> -</button>

      <h1>useReducer Hook {state.count}</h1>
      <button onClick={() => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT })}> +</button>
      <button onClick={() => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT })}> -</button>
    </>
  )
}

export default Counter
