//export default function ResultModal({ ref, result, targetTime }) {
const ResultModal = function ResultModal({ ref, result, targetTime }) {
  return (
    <dialog ref={ref} className='result-modal'>
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
}

export default ResultModal
