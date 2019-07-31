import React, { useContext } from 'react'
// import PropTypes from 'prop-types'
import VideoProvider, { VideoCtx, SeekBar } from '../VideoProvider'
import Styled from './Styled'

function PrettyVideo({ src, muted, autoPlay, loop }) {
  return (
    <VideoProvider {...{ src, muted, autoPlay, loop }}>
      <VideoContent />
    </VideoProvider>
  )
}

function VideoContent() {
  const { video, state } = useContext(VideoCtx)
  return (
    <div>
      {video}
      <Styled.Wrapper>
        <SeekBar />
        <Styled.Pause>Pause</Styled.Pause>
        <Styled.Play>Play</Styled.Play>
        {state.formatted.time} / {state.formatted.duration}
        <Styled.Unmute>Un-Mute</Styled.Unmute>
        <Styled.Mute>Mute</Styled.Mute>
        <Styled.Fullscreen>FullScreen</Styled.Fullscreen>
      </Styled.Wrapper>
    </div>
  )
}

// PrettyVideo.propTypes = {}

export default PrettyVideo
