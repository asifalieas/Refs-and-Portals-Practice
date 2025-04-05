import { useState } from 'react'

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleNameChange(e) {
    setSubmitted(false)
    setEnteredPlayerName(e.target.value)
  }

  function handleSubmitClick() {
    setSubmitted(true)
  }

  console.log('entered Name : ', enteredPlayerName)
  console.log('submited flag : ', submitted)

  return (
    <section id='player'>
      <h2>Welcome {submitted ? enteredPlayerName : 'unknown entity'}</h2>
      <p>
        <input
          onChange={handleNameChange}
          type='text'
          value={enteredPlayerName}
        />
        <button onClick={handleSubmitClick}>Set Name</button>
      </p>
    </section>
  )
}
