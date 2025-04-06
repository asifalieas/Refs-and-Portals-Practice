import Player from './components/Player.jsx'
import TimerChanllenge from './components/TimerChallenge.jsx'

function App() {
  return (
    <>
      <Player />
      <div id='challenges'>
        <TimerChanllenge title='Easy' targetTime={1} />
        <TimerChanllenge title='Not Easy' targetTime={5} />
        <TimerChanllenge title='Getting Tough' targetTime={10} />
        <TimerChanllenge title='Pros Only' targetTime={15} />
      </div>
    </>
  )
}

export default App
