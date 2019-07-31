import React, { createContext, useContext } from 'react'
import Styled from './Styled'
import useControls from './hooks/useControls'
import { VideoCtx } from '..'

const SeekBarCtx = createContext()

function Wrapper({ children }) {
  const { seekPercent, childRef, parentRef, dragging } = useControls()
  return (
    <Styled.Bar ref={parentRef}>
      <SeekBarCtx.Provider value={{ seekPercent, childRef, dragging }}>
        {children}
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
      dragging={dragging}
      percent={dragging ? seekPercent : playedPercent}
      ref={childRef}
    />
  )
}

function SeekBar() {
  return (
    <Wrapper>
      <Progress />
    </Wrapper>
  )
}

// SeekBar.propTypes = {}

SeekBar.Progress = Progress
SeekBar.Wrapper = Wrapper

export default React.memo(SeekBar)
