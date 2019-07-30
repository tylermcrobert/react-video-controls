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
  const { children } = props
  const ctx = useContext(ToggleCtx)
  const toggleEnabled = !!(ctx && ctx.toggle === true)

  console.log(toggleEnabled)
  return (
    <div onClick={props.control} {...props}>
      {children}
    </div>
  )
}

function Play(props) {
  const { controls } = useContext(VideoCtx)
  return <ToggleButton control={controls.play} {...props} />
}

function Pause(props) {
  const { controls } = useContext(VideoCtx)
  return <ToggleButton control={controls.pause} {...props} />
}

PlayToggle.Play = Play
PlayToggle.Pause = Pause

// PlayToggle.propTypes = {}

export default PlayToggle
