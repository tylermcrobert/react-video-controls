import React, { createContext } from 'react'
import { useVideo } from 'react-use'
import PropTypes from 'prop-types'
import Styled from './Styled'
import SeekBar from './SeekBar'
import { Play, Pause, Mute, Unmute } from './Buttons'

import TimeFormat from 'hh-mm-ss'
export const VideoCtx = createContext()

function formatSecs(secs) {
  const rounded = Math.round(secs)
  const formatted = TimeFormat.fromS(rounded)
  return formatted
}

function Video({ src, className, autoPlay, children }) {
  const [video, state, functions, ref] = useVideo(
    /* Could be passed in via children? */
    <Styled.Video src={src} className={className} autoPlay={autoPlay} />
  )

  const togglePlay = state.isPlaying ? functions.pause : functions.play
  const formatted = {
    duration: formatSecs(state.duration),
    time: formatSecs(state.time),
  }

  return (
    <Styled.Wrapper>
      <VideoCtx.Provider
        value={{
          state: { ...state, formatted },
          ref,
          controls: { ...functions, togglePlay },
          video,
        }}
      >
        {children}
      </VideoCtx.Provider>
    </Styled.Wrapper>
  )
}

Video.propTypes = {
  src: PropTypes.string.isRequired,
}

export { Play, Pause, SeekBar, Mute, Unmute }
export default Video
