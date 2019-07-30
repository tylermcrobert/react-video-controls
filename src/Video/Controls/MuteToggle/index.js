import React, { useContext } from 'react'
import { VideoCtx } from '../..'
// import PropTypes from 'prop-types'

function PlayToggle() {
  const { state, controls } = useContext(VideoCtx)

  return state.muted ? (
    <button onClick={controls.unmute}>Un-mute</button>
  ) : (
    <button onClick={controls.mute}>Mute</button>
  )
}

// PlayToggle.propTypes = {}

export default PlayToggle
