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
  const { video, state } = useContext(VideoCtx)

  return (
    <div>
      {video}
      <Styled.Wrapper>
        {state.isPlaying ? (
          <Styled.Pause>Pause</Styled.Pause>
        ) : (
          <Styled.Play>Play</Styled.Play>
        )}
        <SeekBar />
        {state.muted ? (
          <Styled.Unmute>Un-Mute</Styled.Unmute>
        ) : (
          <Styled.Mute>Mute</Styled.Mute>
        )}
      </Styled.Wrapper>
    </div>
  )
}

// PrettyVideo.propTypes = {}

export default PrettyVideo
