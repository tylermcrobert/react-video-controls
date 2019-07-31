import { useState, useEffect, createRef, useContext, useRef } from 'react'
import { VideoCtx } from '../..'

function getValidPercent(num) {
  if (num > 1) return 1
  if (num < 0) return 0
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
  const { controls, state, ref } = useContext(VideoCtx)

  const [dragging, setDragging] = useState(false)

  const parentRef = createRef()
  const childRef = createRef()

  const mouseDown = useRef(false)
  const seekPercent = useRef(0)

  useEffect(
    () => {
      /* get dom elements */
      const $child = childRef.current
      const $parent = parentRef.current
      const $video = ref.current

      /* clear style attr if not dragging */
      if (!dragging) {
        $child.style.transform = null
      }

      /* seek video */
      function seek(e) {
        seekPercent.current = getBarPercent(e, $parent)
        const timeVal = state.duration * seekPercent.current
        const translateVal = seekPercent.current * 100 - 100

        /* Seek react (Slow) */
        controls.seek(timeVal)
        /* Seek video node */
        $video.currentTime = timeVal
        /* Change Bar Style */
        $child.style.transform = `translateX(${translateVal}%)`
      }

      /* Triggers on each mousedown event */
      function handlemouseDown(e) {
        setDragging(true)
        mouseDown.current = true
        seek(e)
      }

      /* Triggers on each mouseup event */
      function handleMouseUp() {
        setDragging(false)
        mouseDown.current = false
      }

      /* Triggers always mouse is moving */
      function handleMouseMove(e) {
        if (mouseDown.current) seek(e)
      }

      /* Bind events */
      $parent.addEventListener('mousedown', handlemouseDown)
      window.addEventListener('mouseup', handleMouseUp)
      window.addEventListener('mousemove', handleMouseMove)

      return () => {
        /* remove events */
        $parent.removeEventListener('mousedown', handlemouseDown)
        window.removeEventListener('mouseup', handleMouseUp)
        window.removeEventListener('mousemove', handleMouseMove)
      }
    },
    [childRef, controls, dragging, parentRef, ref, state.duration]
  )

  return { parentRef, childRef, dragging, seekPercent: seekPercent.current }
}
