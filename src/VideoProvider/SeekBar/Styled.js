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
  width: 100%;
  background: rgba(0, 0, 0, 0.15);
  overflow: hidden;
`

const Progress = styled.div.attrs(props => ({
  style: {
    transform: `translateX(${props.percent * 100 - 100}%)`,
  },
}))`
  background: orangered;
  height: 5px;
  width: 100%;

  transition: ${props => !props.dragging && '250ms transform linear'};
`
export default { Range, Bar, Progress }
