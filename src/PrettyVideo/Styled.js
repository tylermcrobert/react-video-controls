import styled, { css } from 'styled-components/macro'
import * as Controls from '../Video'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
`

const buttonStyle = css`
  width: 5rem;
  height: 5rem;
  margin: 1rem;
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

export default { Play, Pause, Wrapper, Mute, Unmute }
