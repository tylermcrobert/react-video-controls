import React, { useContext, createContext } from 'react'

import { VideoCtx } from '../..'
// import PropTypes from 'prop-types'

const ToggleCtx = createContext()
function PlayToggle({ children }) {
  const { state, controls } = useContext(VideoCtx)

  return (
    <ToggleCtx.Provider value={{ toggle: true }}>{children}</ToggleCtx.Provider>
  )
}

function ToggleButton(props) {
  const { children, control, isPauseBtn } = props
  const { state } = useContext(VideoCtx)
  const ctx = useContext(ToggleCtx)
  const toggleEnabled = !!(ctx && ctx.toggle === true)
  const shouldShow = toggleEnabled && state.isPlaying === isPauseBtn

  console.log(!toggleEnabled)
  return (
    shouldShow ||
    (!toggleEnabled && (
      <div onClick={control} {...props}>
        {children}
      </div>
    ))
  )
}

function Play(props) {
  const { controls } = useContext(VideoCtx)
  return <ToggleButton control={controls.play} {...props} isPauseBtn={false} />
}

function Pause(props) {
  const { controls } = useContext(VideoCtx)
  return <ToggleButton control={controls.pause} {...props} isPauseBtn={true} />
}

PlayToggle.Play = Play
PlayToggle.Pause = Pause

// PlayToggle.propTypes = {}

export default PlayToggle
