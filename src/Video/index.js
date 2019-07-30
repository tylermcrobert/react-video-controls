import React, { createContext } from 'react'
import { useVideo } from 'react-use'
import PropTypes from 'prop-types'
import Styled from './Styled'
import Controls from './Controls'

export const VideoCtx = createContext()

function Video({ src, className, autoPlay }) {
  const [video, state, functions, ref] = useVideo(
    /* Could be passed in via children? */
    <Styled.Video src={src} className={className} autoPlay={autoPlay} />
  )

  console.log({ state, functions, ref })
  return (
    <Styled.Wrapper>
      <VideoCtx.Provider value={{ state, controls: functions }}>
        {video}
        <Controls />
      </VideoCtx.Provider>
    </Styled.Wrapper>
  )
}

Video.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Video
