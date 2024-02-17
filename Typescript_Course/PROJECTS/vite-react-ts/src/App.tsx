import { KeyboardEvent, MouseEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Counter from './components/Counter'
import Headings from './components/Headings'
import Section from './components/Section'
import List from './components/List'
import RenderApp from './components/RenderApp'
/****************************************** */

interface User {
  id: number
  profession: string
}
/****************************************** */
type fibFunc = (n: number) => number

const fib: fibFunc = (n) => {
  if (n < 2) return n
  return fib(n - 1) + fib(n - 2) //expensive calculation
}
const myNum: number = 20

/****************************************** */
function App() {
  const [count, setCount] = useState<number>(1)
  const [secondCount, setSecondCount] = useState(0)
  // const [user, setuser] = useState<User>({} as User)    //as object
  // const [users, setusers] = useState<User[] | null>(null) //as array
  // const [secondCount, setSecondCount] = useState<number | null>(null) //as union
  const addtwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => setSecondCount((prev) => prev + 2), [])

  const result = useMemo(() => fib(myNum), [myNum])

  const inputRef = useRef<HTMLInputElement>(null)

  console.log(inputRef?.current)
  console.log(inputRef?.current?.value)

  // useEffect(() => {
  //   console.log('mounting')
  //   return () => console.log('umounting')
  // }, [users])

  return (
    <>
      <RenderApp />
      <Headings title='Hello from TS React' />
      <Section title='Not Default Title'>This is my section</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <h2>Props & Childers</h2>
      <List items={['one', 'two', 'three']} render={(item: string) => <span className='gold'>{item}</span>} />
      <h2>UseCallback (Memoize Function)</h2>
      <p>{secondCount}</p>
      <button onClick={addtwo}>Add 2</button>
      <h2>UseMemo (Memoize Value)</h2>
      <p>Fibonnaci of 37 : {result}</p>
      <h2>UseRef (Ref)</h2>
      <input type='text' ref={inputRef} />
    </>
  )
}

export default App
