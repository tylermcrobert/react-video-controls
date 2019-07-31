import styled, { css } from 'styled-components/macro'
import * as Controls from '../VideoProvider'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr auto auto;
  align-items: center;
  grid-gap: 1rem;
`

const buttonStyle = css`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
`

const Play = styled(Controls.Play)`
  ${buttonStyle};
  background: orange;
`

const Pause = styled(Controls.Pause)`
  ${buttonStyle}
  background: green;
`

const Mute = styled(Controls.Mute)`
  ${buttonStyle}
  background: blue;
`

const Unmute = styled(Controls.Unmute)`
  ${buttonStyle}
  background: purple;
`

const Fullscreen = styled(Controls.Fullscreen)`
  ${buttonStyle}
  background: red;
`

export default { Play, Pause, Wrapper, Mute, Unmute, Fullscreen }
