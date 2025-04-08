import { forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'

//export default function ResultModal({ ref, result, targetTime }) {
const ResultModal = forwardRef(function ResultModal(
  { result, targetTime, timeRemaining, onRestart },
  ref
) {
  const dialog = useRef()

  const userLost = timeRemaining <= 0
  const formattedTimeRemaining = (timeRemaining / 1000).toFixed(2)
  const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100)

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal() //dev can change the dialog to div or wahtever and can handle here, the main call wil be from TimerChallenge
      },
    }
  })

  return createPortal(
    <dialog ref={dialog} className='result-modal'>
      {userLost && <h2>You Lost</h2>}
      {!userLost && <h2>Your Score : {score}</h2>}
      <p>
        The traget time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You Stopped the timer with{' '}
        <strong>{formattedTimeRemaining} Seconds left</strong>
      </p>
      <form method='dialog' onSubmit={onRestart}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  )
})

export default ResultModal
