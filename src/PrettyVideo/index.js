import React, { useContext } from 'react'
// import PropTypes from 'prop-types'
import Video, { VideoCtx, SeekBar, Play, Pause } from '../Video'

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
      <Play>Play</Play>
      <Pause>Pause</Pause>
    </div>
  )
}

// PrettyVideo.propTypes = {}

export default PrettyVideo
