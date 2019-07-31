import React, { createContext, useContext } from 'react'
import Styled from './Styled'
import useControls from './hooks/useControls'
import { VideoCtx } from '..'

const SeekBarCtx = createContext()

function SeekBar({ children, className }) {
  const { seekPercent, childRef, parentRef, dragging } = useControls()
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
  console.log({ seekPercent })

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

SeekBar.Progress = Progress

export default SeekBar
