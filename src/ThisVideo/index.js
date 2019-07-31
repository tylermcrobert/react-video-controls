import React, { useContext, useState } from 'react'
// import PropTypes from 'prop-types'
import VideoProvider, { VideoCtx, SeekBar } from '../VideoProvider'
import Styled from './Styled'
import { FullScreen, Play } from './Icons'

function PrettyVideo({ src, muted, autoPlay, loop }) {
  return (
    <VideoProvider {...{ src, muted, autoPlay, loop }}>
      <VideoContent />
    </VideoProvider>
  )
}

function VideoContent() {
  const { video, state, controls } = useContext(VideoCtx)
  const [hovered, setHovered] = useState(false)

  return (
    <Styled.Wrapper
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div onClick={controls.togglePlay}>{video}</div>
      {!state.isPlaying && (
        <Styled.Play>
          <Play />
        </Styled.Play>
      )}
      <Styled.ControlWrapper enabled={state.isPlaying && hovered}>
        <SeekBar />
        <Styled.ButtonWrapper>
          <div>
            {state.formatted.time} / {state.formatted.duration}
          </div>
          {state.muted ? (
            <Styled.Unmute>Un-Mute</Styled.Unmute>
          ) : (
            <Styled.Mute>Mute</Styled.Mute>
          )}
          <Styled.Fullscreen>
            <FullScreen />
          </Styled.Fullscreen>
        </Styled.ButtonWrapper>
      </Styled.ControlWrapper>
    </Styled.Wrapper>
  )
}

// PrettyVideo.propTypes = {}

export default PrettyVideo
