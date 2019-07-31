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
  const { video, state, controls } = useContext(VideoCtx)
  return (
    <div>
      <div onClick={controls.togglePlay}>{video}</div>
      <Styled.Wrapper>
        {state.isPlaying ? (
          <Styled.Pause>Pause</Styled.Pause>
        ) : (
          <Styled.Play>Play</Styled.Play>
        )}
        <div>
          {state.formatted.time} / {state.formatted.duration}
        </div>
        <SeekBar />
        {state.muted ? (
          <Styled.Unmute>Un-Mute</Styled.Unmute>
        ) : (
          <Styled.Mute>Mute</Styled.Mute>
        )}
        <Styled.Fullscreen>FullScreen</Styled.Fullscreen>
      </Styled.Wrapper>
    </div>
  )
}

// PrettyVideo.propTypes = {}

export default PrettyVideo
