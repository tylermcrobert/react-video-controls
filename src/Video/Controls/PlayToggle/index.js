import React, { useContext } from 'react'
import { VideoCtx } from '../..'
// import PropTypes from 'prop-types'

function PlayToggle() {
  const { state, controls } = useContext(VideoCtx)

  return state.isPlaying ? (
    <button onClick={controls.pause}>Pause</button>
  ) : (
    <button onClick={controls.play}>Play</button>
  )
}

// PlayToggle.propTypes = {}

export default PlayToggle
