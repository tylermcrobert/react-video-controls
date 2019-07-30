import React, { useContext } from 'react'
import TimeFormat from 'hh-mm-ss'

import Styled from './Styled'
import { VideoCtx } from '..'
import SeekBar from './SeekBar'
import { Play, Pause } from './PlayToggle'
import MuteToggle from './MuteToggle'
// import PropTypes from 'prop-types'

function Controls() {
  const { state } = useContext(VideoCtx)

  return (
    <Styled.Wrapper>
      <div>
        <Time>{state.time}</Time> / <Time>{state.duration}</Time>
        <SeekBar />
        <MuteToggle />
      </div>
    </Styled.Wrapper>
  )
}

const Time = ({ children }) => TimeFormat.fromS(Math.ceil(children))

// Controls.propTypes = {}

export { SeekBar, MuteToggle, Play, Pause }
export default Controls
