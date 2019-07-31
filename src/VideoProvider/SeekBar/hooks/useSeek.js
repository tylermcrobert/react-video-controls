import { useState, useContext } from 'react'
import useMouseDown from './useMouseDown'
import { VideoCtx } from '../..'

const STEPS = 100

export default function useSeek() {
  const {
    state: { duration, time },
    ref,
  } = useContext(VideoCtx)

  const [uiPercent, setUiPercent] = useState(0)
  const [dragging, setDragging] = useState(false)
  const mouseDown = useMouseDown()

  const handleMouseUp = () => setDragging(false)

  function handleChange(e) {
    const { value } = e.target
    const valuePercent = value / STEPS
    const secondsSeek = valuePercent * duration
    const setVideoTime = () => (ref.current.currentTime = secondsSeek)

    setDragging(mouseDown ? true : false)
    setUiPercent(valuePercent)
    setVideoTime()
  }

  const value = dragging ? uiPercent * STEPS : (time / duration) * STEPS

  return { handleChange, handleMouseUp, value, max: STEPS }
}
