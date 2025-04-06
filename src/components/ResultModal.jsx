import { forwardRef, useImperativeHandle, useRef } from 'react'

//export default function ResultModal({ ref, result, targetTime }) {
const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  const dialog = useRef()

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal() //dev can change the dialog to div or wahtever and can handle here, the main call wil be from TimerChallenge
      },
    }
  })

  return (
    <dialog ref={dialog} className='result-modal'>
      <h2>Your {result}</h2>
      <p>
        The traget time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You Stopped the timer with <strong>X Seconds left</strong>
      </p>
      <form method='dialog'>
        <button>Close</button>
      </form>
    </dialog>
  )
})

export default ResultModal
