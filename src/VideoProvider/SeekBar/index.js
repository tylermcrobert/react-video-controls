import React, { createContext, useContext, useMemo } from 'react'
import Styled from './Styled'
import useControls from './hooks/useControls'
import { VideoCtx } from '..'

const SeekBarCtx = createContext()

function ContextMemoizer(props) {
  const { state, ref } = useContext(VideoCtx)

  return useMemo(
    () => <SeekBarInner {...props} videoRef={ref} duration={state.duration} />,
    [props, ref, state.duration]
  )
}

function SeekBarInner({ children, className, duration, videoRef }) {
  const { seekPercent, childRef, parentRef, dragging } = useControls(
    duration,
    videoRef
  )
  return (
    <Styled.Bar ref={parentRef} className={className}>
      <SeekBarCtx.Provider value={{ seekPercent, childRef, dragging }}>
        {children || <Progress />}
      </SeekBarCtx.Provider>
    </Styled.Bar>
  )
}

function Progress({ className }) {
  const { seekPercent, childRef, dragging } = useContext(SeekBarCtx)
  const { state } = useContext(VideoCtx)
  const playedPercent = state.time / state.duration || 0

  return (
    <Styled.Progress
      className={className}
      dragging={dragging}
      percent={dragging ? seekPercent : playedPercent}
      ref={childRef}
    />
  )
}

// SeekBar.propTypes = {}

const SeekBar = ContextMemoizer
SeekBar.Progress = Progress

export default SeekBar
