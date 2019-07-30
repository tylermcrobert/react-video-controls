import React, { createContext } from 'react'
import { useVideo } from 'react-use'
import PropTypes from 'prop-types'
import Styled from './Styled'
import SeekBar from './SeekBar'
import { Play, Pause, Mute, Unmute } from './Buttons'
export const VideoCtx = createContext()

function Video({ src, className, autoPlay, children }) {
  const [video, state, functions, ref] = useVideo(
    /* Could be passed in via children? */
    <Styled.Video src={src} className={className} autoPlay={autoPlay} />
  )

  return (
    <Styled.Wrapper>
      <VideoCtx.Provider value={{ state, ref, controls: functions, video }}>
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
