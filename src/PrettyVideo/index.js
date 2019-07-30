import React, { useContext } from 'react'
// import PropTypes from 'prop-types'
import Video, { VideoCtx, SeekBar, PlayToggle } from '../Video'

function PrettyVideo({ src }) {
  return (
    <Video src={src}>
      <VideoCtx.Consumer>
        {props => (
          <div>
            {props.video}
            <SeekBar />

            <PlayToggle.Pause>PAUSE</PlayToggle.Pause>
            <PlayToggle.Play>PLAY!</PlayToggle.Play>

            {console.log(props)}
          </div>
        )}
      </VideoCtx.Consumer>
    </Video>
  )
}

function Fuck() {
  const data = useContext(VideoCtx)
  console.log(data)
  return 'asdf'
}

// PrettyVideo.propTypes = {}

export default PrettyVideo
