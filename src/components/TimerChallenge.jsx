import { useState } from 'react'

export default function TimerChanllenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false)
  const [timerExpired, setTimerExpired] = useState(false)

  function handleTimerStart() {
    setTimeout(() => {
      setTimerExpired(true)
    }, targetTime * 1000)

    setTimerStarted(true)
  }

  return (
    <section className='challenge'>
      <h2>{title}</h2>
      {timerExpired && <p>You Lost</p>}
      <p className='challenge-time'>
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={handleTimerStart}>
          {timerStarted ? 'Stop' : 'Start'} challenge
        </button>
      </p>
      <p className=''>
        {timerStarted ? 'Timer is runing...' : 'Timer inactive'}
      </p>
    </section>
  )
}
