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

const Bar = styled.div`
  height: 5px;
  width: 100%;
  background: rgba(0, 0, 0, 0.15);
  overflow: hidden;
`

const Progress = styled.div`
  background: orangered;
  width: 100%;
  height: 100%;

  transition: ${props => !props.dragging && '250ms transform linear'};
  transform: translateX(${props => props.percent * 100 - 100}%);
`
export default { Range, Bar, Progress }
