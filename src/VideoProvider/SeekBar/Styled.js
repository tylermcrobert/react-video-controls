import styled from 'styled-components/macro'

const Range = styled.input`
  background: blue;
  width: 100%;
  appearance: none;
  outline: none;
  height: 10px;

  &::-webkit-slider-thumb {
    opacity: 0.5;
    height: 100%;
  }
`

export default { Range }
