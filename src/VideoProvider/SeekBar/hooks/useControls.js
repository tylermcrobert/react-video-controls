import { useState, useEffect, createRef, useContext, useRef } from 'react'
import { VideoCtx } from '../..'

function getValidPercent(num) {
  if (num > 1) return 1
  else if (num < 0) return 0
  return num
}

function getBarPercent(e, el) {
  const { left, width } = el.getBoundingClientRect()
  const objX = e.clientX - left
  const percent = objX / width
  const validPercent = getValidPercent(percent)
  return validPercent
}

export default function useControls() {
  const [dragging, setDragging] = useState(false)
  const parentRef = createRef()
  const childRef = createRef()
  const { controls, state, ref } = useContext(VideoCtx)
  const seekPercent = 0
  const mouseDown = useRef(false)

  useEffect(
    () => {
      const $child = childRef.current
      const $parent = parentRef.current
      const $video = ref.current

      if (!dragging) {
        $child.style.transform = null
      }

      function handlemouseDown(e) {
        setDragging(true)
        mouseDown.current = true
        seek(e)
      }

      function handleMouseUp() {
        setDragging(false)
        mouseDown.current = false
      }

      function handleMouseMove(e) {
        if (mouseDown.current) seek(e)
      }

      function seek(e) {
        const seekPercent = getBarPercent(e, $parent)
        const timeVal = state.duration * seekPercent

        controls.seek(timeVal)
        $video.currentTime = timeVal
        $child.style.transform = `translateX(${seekPercent * 100 - 100}%)`
      }

      $parent.addEventListener('mousedown', handlemouseDown)
      window.addEventListener('mouseup', handleMouseUp)
      window.addEventListener('mousemove', handleMouseMove)

      return () => {
        $parent.removeEventListener('mousedown', handlemouseDown)
        window.removeEventListener('mouseup', handleMouseUp)
        window.removeEventListener('mousemove', handleMouseMove)
      }
    },
    [childRef, controls, dragging, parentRef, ref, state.duration]
  )

  return { seekPercent, parentRef, childRef, dragging }
}
