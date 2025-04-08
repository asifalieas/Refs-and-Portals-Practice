import { useState, useRef } from 'react'
import ResultModal from './ResultModal'

export default function TimerChanllenge({ title, targetTime }) {
  const timer = useRef()
  const dialog = useRef()

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)

  const timerIsActiv = timeRemaining > 0 && timeRemaining < targetTime * 1000

  if (timeRemaining <= 0) {
    clearInterval(timer.current)
    //setTimeRemaining(targetTime * 1000)
    dialog.current.open()
  }

  function handleTimerStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10)
    }, 10)
  }

  function handleTimerStop() {
    clearInterval(timer.current)
    dialog.current.open()
  }

  function handleRestart() {
    setTimeRemaining(targetTime * 1000)
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        result='lost'
        targetTime={targetTime}
        timeRemaining={timeRemaining}
        onRestart={handleRestart}
      />
      <section className='challenge'>
        <h2>{title}</h2>
        {/* {timerExpired && <p>You Lost</p>} */}
        <p className='challenge-time'>
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerIsActiv ? handleTimerStop : handleTimerStart}>
            {timerIsActiv ? 'Stop' : 'Start'} challenge
          </button>
        </p>
        <p className=''>
          {timerIsActiv ? 'Timer is runing...' : 'Timer inactive'}
        </p>
      </section>
    </>
  )
}
