import React, {
  useState,
  useRef,
  createContext,
  useContext,
  useEffect,
  createRef,
} from 'react'
import Styled from './Styled'

function useControls() {
  const parentRef = createRef()
  const childRef = createRef()

  const percent = 0.7

  useEffect(
    () => {
      let dragging = false
      const $child = childRef.current
      const $parent = parentRef.current

      function handlemouseDown() {
        dragging = false
      }

      function handleMouseMove(e) {
        const { offsetX } = e

        console.log(offsetX, $parent.offsetLeft)

        $child.style.transform = `translateX(${offsetX}px)`
      }

      $parent.addEventListener('mousedown', handlemouseDown)
      window.addEventListener('mousemove', handleMouseMove)

      return () => {
        $parent.removeEventListener('mousedown', handlemouseDown)
      }
    },
    [childRef, parentRef]
  )

  return { percent, parentRef, childRef }
}

const SeekBarCtx = createContext()

function SeekBar() {
  const { percent, childRef, parentRef } = useControls()
  return (
    <Styled.Bar ref={parentRef}>
      <SeekBarCtx.Provider value={{ percent, childRef }}>
        <Progress />
      </SeekBarCtx.Provider>
    </Styled.Bar>
  )
}

function Progress() {
  const { percent, childRef } = useContext(SeekBarCtx)
  return <Styled.Progress percent={percent} ref={childRef} />
}

// SeekBar.propTypes = {}

SeekBar.Progress = Progress
export default SeekBar
