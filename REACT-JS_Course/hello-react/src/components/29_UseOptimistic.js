import { useState, useTransition, useEffect } from 'react'

function UseOptimistic() {
  const [name, setName] = useState('')
  const [optimisticName, setOptimisticName] = useState('')
  const [isPending, startTransition] = useTransition()

  const handleChange = (event) => {
    const newValue = event.target.value
    setName(newValue) // Update the actual state

    // Use startTransition to update the optimistic state
    startTransition(() => {
      setOptimisticName(newValue)
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    // Simulate async submission
    await new Promise((resolve) => setTimeout(resolve, 5000))

    // Update state after server confirmation (replace with actual logic)
    setOptimisticName('Rolled backe to the actual text') // Sync optimistic state with the actual state
  }

  useEffect(() => {
    console.log('rerenders')
  }, [])

  return (
    <>
      <h2>UseOptimistic Hook</h2>
      {isPending ? <p>...</p> : <p>Optimistic Name: {optimisticName}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:{'  '}
          <input type='text' value={name} onChange={handleChange} />
        </label>
        {'  '}
        <button type='submit'>Submit</button>
      </form>
      {isPending && <p>Submitting...</p>}
    </>
  )
}

export default UseOptimistic
