import { useRef } from 'react'
import { useState } from 'react'

export default function Player() {
  var playerName = useRef()
  const [enteredPlayerName, setEnteredPlayerName] = useState('')

  function handleSubmitClick() {
    setEnteredPlayerName(playerName.current.value)
  }

  return (
    <section id='player'>
      <h2>Welcome {playerName ? enteredPlayerName : 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type='text' />
        <button onClick={handleSubmitClick}>Set Name</button>
      </p>
    </section>
  )
}
