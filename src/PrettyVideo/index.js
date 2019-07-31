import React, { useContext } from 'react'
// import PropTypes from 'prop-types'
import Video, { VideoCtx, SeekBar } from '../Video'
import Styled from './Styled'

function PrettyVideo({ src, muted, autoPlay, loop }) {
  return (
    <Video {...{ src, muted, autoPlay, loop }}>
      <VideoContent />
    </Video>
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
      {/* <hr /> */}
      {/* <pre style={{ opacity: 0.4 }}>{JSON.stringify(state, null, 2)}</pre> */}
    </div>
  )
}

// PrettyVideo.propTypes = {}

export default PrettyVideo
