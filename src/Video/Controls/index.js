import React, { useContext } from 'react'
import Styled from './Styled'
import { VideoCtx } from '..'
// import PropTypes from 'prop-types'

function Controls() {
  const { state, controls } = useContext(VideoCtx)
  console.log(controls)
  return (
    <Styled.Wrapper>
      <div>
        <pre>{JSON.stringify(state, null, 2)}</pre>
        <PlayToggle />
        <SeekBar />
        <MuteToggle />
      </div>
    </Styled.Wrapper>
  )
}

function SeekBar() {
  const { state } = useContext(VideoCtx)

  return (
    <input
      type="range"
      name="points"
      value={state.time}
      min="0"
      max={state.duration}
    />
  )
}

function PlayToggle() {
  const { state, controls } = useContext(VideoCtx)

  return state.isPlaying ? (
    <button onClick={controls.pause}>Pause</button>
  ) : (
    <button onClick={controls.play}>Play</button>
  )
}

function MuteToggle() {
  const { state, controls } = useContext(VideoCtx)

  return state.muted ? (
    <button onClick={controls.unmute}>Un-mute</button>
  ) : (
    <button onClick={controls.mute}>Mute</button>
  )
}

export function Volume() {
  const { controls } = useContext(VideoCtx)
  return (
    <>
      <button onClick={() => controls.volume(0.1)}>Volume: 10%</button>
      <button onClick={() => controls.volume(0.5)}>Volume: 50%</button>
      <button onClick={() => controls.volume(1)}>Volume: 100%</button>
    </>
  )
}

// Controls.propTypes = {}

export default Controls
