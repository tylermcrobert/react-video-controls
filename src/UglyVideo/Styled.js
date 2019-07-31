import styled, { css } from 'styled-components/macro'
import * as Controls from '../VideoProvider'

const Wrapper = styled.div``

const buttonStyle = css`
  display: inline-block;
  padding: 0.25rem;
  appearance: button;
  background: #eee;
  border: 1px solid #ccc;
  margin-right: 0.2rem;
`

const Play = styled(Controls.Play)`
  ${buttonStyle}
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

export default { Play, Pause, Wrapper, Mute, Unmute, Fullscreen }
