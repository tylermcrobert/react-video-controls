import React, { createContext } from 'react'
import { useVideo } from 'react-use'
import PropTypes from 'prop-types'
import Styled from './Styled'
import SeekBar from './SeekBar'
import { Play, Pause, Mute, Unmute, Fullscreen } from './Buttons'
import formatSecs from './util/formatSecs'
import screenfull from 'screenfull'

export const VideoCtx = createContext()

function Video({ src, className, autoPlay, children }) {
  const [video, state, functions, ref] = useVideo(
    /* Could be passed in via children? */
    <Styled.Video src={src} className={className} autoPlay={autoPlay} />
  )

  const togglePlay = state.isPlaying ? functions.pause : functions.play

  function fullScreen() {
    if (ref.current && screenfull.enabled) {
      screenfull.request(ref.current)
    }
  }

  return (
    <Styled.Wrapper>
      <VideoCtx.Provider
        value={{
          state: {
            ...state,
            formatted: {
              duration: formatSecs(state.duration),
              time: formatSecs(state.time),
            },
          },
          ref,
          controls: { ...functions, togglePlay, fullScreen },
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

export { Play, Pause, SeekBar, Mute, Unmute, Fullscreen }
export default Video
