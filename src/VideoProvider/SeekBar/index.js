import React, { useContext, useState, useEffect } from 'react'
import Styled from './Styled'
import { VideoCtx } from '..'

// import PropTypes from 'prop-types'

const STEPS = 100

function useMouseDown() {
  const [mouseDown, setMouseDown] = useState(false)

  const handleMouseDown = () => setMouseDown(true)
  const handleMouseUp = () => setMouseDown(false)

  useEffect(() => {
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    return () => {
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  })

  return mouseDown
}

function SeekBar() {
  const {
    state: { duration, time },
    ref,
  } = useContext(VideoCtx)

  const [uiPercent, setUiPercent] = useState(0)
  const [dragging, setDragging] = useState(false)
  const mouseDown = useMouseDown()

  function handleDrag(e) {
    const { value } = e.target
    const valuePercent = value / STEPS
    const secondsSeek = valuePercent * duration
    const setVideoTime = () => (ref.current.currentTime = secondsSeek)

    setDragging(mouseDown ? true : false)
    setUiPercent(valuePercent)
    setVideoTime()
  }

  return (
    <Styled.Range
      type="range"
      max={STEPS}
      min="0"
      onChange={handleDrag}
      value={dragging ? uiPercent * STEPS : (time / duration) * STEPS}
      onMouseUp={() => setDragging(false)}
    />
  )
}

// SeekBar.propTypes = {}

export default SeekBar
