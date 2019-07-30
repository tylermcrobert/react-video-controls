import React, { useContext } from 'react'
// import PropTypes from 'prop-types'
import Video, { VideoCtx, SeekBar } from '../Video'
import Styled from './Styled'

function PrettyVideo({ src }) {
  return (
    <Video src={src}>
      <VideoContent />
    </Video>
  )
}

function VideoContent() {
  const { video, state, controls, ref } = useContext(VideoCtx)

  return (
    <div>
      <div onClick={controls.togglePlay}>{video}</div>
      <Styled.Wrapper>
        <PlayToggle />
        <Time />
        <SeekBar />
        <MuteToggle />
      </Styled.Wrapper>
      <hr />
      <pre style={{ opacity: 0.4 }}>{JSON.stringify(state, null, 2)}</pre>
    </div>
  )
}

function Time() {
  const { state } = useContext(VideoCtx)
  return (
    <div>
      {state.formatted.time} / {state.formatted.duration}
    </div>
  )
}

function PlayToggle() {
  const { state } = useContext(VideoCtx)
  return state.isPlaying ? (
    <Styled.Pause>Pause</Styled.Pause>
  ) : (
    <Styled.Play>Play</Styled.Play>
  )
}

function MuteToggle() {
  const { state } = useContext(VideoCtx)
  return state.muted ? (
    <Styled.Unmute>Un-Mute</Styled.Unmute>
  ) : (
    <Styled.Mute>Mute</Styled.Mute>
  )
}
// PrettyVideo.propTypes = {}

export default PrettyVideo
