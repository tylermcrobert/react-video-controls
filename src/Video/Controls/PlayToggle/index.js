import React, { useContext } from 'react'
import { VideoCtx } from '../..'
import Styled from './Styled'

export function Play(props) {
  const { controls } = useContext(VideoCtx)
  return <Styled.Button onClick={controls.play} {...props} />
}

export function Pause(props) {
  const { controls } = useContext(VideoCtx)
  return <Styled.Button onClick={controls.pause} {...props} />
}
