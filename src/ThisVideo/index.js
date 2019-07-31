import React, { useContext, useState } from 'react'
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

const FullScreen = () => (
  <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
    <g stroke="#FFF" stroke-width="1.5" fill="none">
      <path d="M1 8V1h7M13 6v7H6" />
    </g>
  </svg>
)

const Play = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    x="0"
    y="0"
    viewBox="0 0 17.2 20.6"
    width="14"
    fill="white"
  >
    <polygon points="0 0 0 20.6 17.2 10.3 " />
  </svg>
)

// PrettyVideo.propTypes = {}

export default PrettyVideo
