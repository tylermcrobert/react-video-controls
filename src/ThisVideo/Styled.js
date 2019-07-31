import styled, { css } from 'styled-components/macro'
import * as Controls from '../VideoProvider'

const Wrapper = styled.div`
  position: relative;
  color: white;
  overflow: hidden;
  font-family: helvetica;
  font-size: 0.85rem;
  * {
    text-transform: uppercase;
  }
`

const ControlWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  box-sizing: border-box;

  transition: 200ms transform ease-out, 200ms opacity ease-out;
  transform: translateY(${props => (props.enabled ? 0 : 0.75)}rem);
  opacity: ${props => (props.enabled ? 100 : 0)};
`

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  grid-gap: 1rem;
  padding: 1rem;
`

const buttonStyle = css``

const Play = styled(Controls.Play)`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;

  width: 7rem;
  height: 7rem;
  border-radius: 50%;

  border: 2px solid white;

  display: flex;
  justify-content: center;
  align-items: center;

  transform: translate3d(-50%, -50%, 0);
`

const Pause = styled(Controls.Pause)`
  ${buttonStyle}
`

const Mute = styled(Controls.Mute)`
  ${buttonStyle}
`

const Unmute = styled(Controls.Unmute)`
  ${buttonStyle}
`

const Fullscreen = styled(Controls.Fullscreen)`
  ${buttonStyle}
`

export default {
  Play,
  Pause,
  Wrapper,
  Mute,
  Unmute,
  Fullscreen,
  ControlWrapper,
  ButtonWrapper,
}
