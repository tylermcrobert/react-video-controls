import React, { createContext, useRef } from 'react'
import PropTypes from 'prop-types'
import { useVideo } from 'react-use'
import Styled from './Styled'
import SeekBar from './SeekBar'
import { Play, Pause, Mute, Unmute, Fullscreen } from './Buttons'
import useCtxSupliment from './hooks/useCtxSupliment'

export const VideoCtx = createContext()

function VideoProvider({ src, children, autoPlay, loop, muted }) {
  const playerData = useVideo(
    <Styled.Video {...{ autoPlay, src, loop, muted }} />
  )
  const wrapperRef = useRef()
  const ctxVal = useCtxSupliment(playerData, wrapperRef)
  return <VideoCtx.Provider value={ctxVal}>{children}</VideoCtx.Provider>
}

VideoProvider.propTypes = {
  src: PropTypes.string.isRequired,
}

export { Play, Pause, SeekBar, Mute, Unmute, Fullscreen }
export default VideoProvider
