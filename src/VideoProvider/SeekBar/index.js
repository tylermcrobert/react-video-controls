import React, { createContext, useContext, useEffect } from 'react'
import Styled from './Styled'
import useControls from './hooks/useControls'
import { VideoCtx } from '..'

const SeekBarCtx = createContext()

function SeekBar() {
  const { seekPercent, childRef, parentRef, dragging } = useControls()
  return (
    <Styled.Bar ref={parentRef}>
      <SeekBarCtx.Provider value={{ seekPercent, childRef, dragging }}>
        <Progress />
      </SeekBarCtx.Provider>
    </Styled.Bar>
  )
}

function Progress() {
  const { seekPercent, childRef, dragging } = useContext(SeekBarCtx)
  const { state } = useContext(VideoCtx)
  const playedPercent = state.time / state.duration || 0

  return (
    <Styled.Progress
      percent={dragging ? seekPercent : playedPercent}
      ref={childRef}
    />
  )
}

// SeekBar.propTypes = {}

SeekBar.Progress = Progress
export default React.memo(SeekBar)
