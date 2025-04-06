import { useState, useRef } from 'react'
import ResultModal from './ResultModal'

export default function TimerChanllenge({ title, targetTime }) {
  const timer = useRef()
  const dialog = useRef()

  const [timerStarted, setTimerStarted] = useState(false)
  const [timerExpired, setTimerExpired] = useState(false)

  function handleTimerStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true)
      dialog.current.showModal()
    }, targetTime * 1000)

    setTimerStarted(true)
  }

  function handleTimerStop() {
    clearTimeout(timer.current)
    setTimerStarted(false)
  }

  return (
    <>
      <ResultModal ref={dialog} result='lost' targetTime={targetTime} />
      <section className='challenge'>
        <h2>{title}</h2>
        {timerExpired && <p>You Lost</p>}
        <p className='challenge-time'>
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerStarted ? handleTimerStop : handleTimerStart}>
            {timerStarted ? 'Stop' : 'Start'} challenge
          </button>
        </p>
        <p className=''>
          {timerStarted ? 'Timer is runing...' : 'Timer inactive'}
        </p>
      </section>
    </>
  )
}
