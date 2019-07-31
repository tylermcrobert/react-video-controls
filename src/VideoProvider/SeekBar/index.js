import React from 'react'
import Styled from './Styled'
import useSeek from './hooks/useSeek'

function SeekBar() {
  const { handleChange, value, handleMouseUp, max } = useSeek()
  return (
    <Styled.Range
      type="range"
      max={max}
      min="0"
      onChange={handleChange}
      value={value}
      onMouseUp={handleMouseUp}
    />
  )
}

// SeekBar.propTypes = {}

export default SeekBar
