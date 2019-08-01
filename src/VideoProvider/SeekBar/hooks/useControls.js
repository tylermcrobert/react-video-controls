import { useState, useEffect, useRef } from 'react'
import Hammer from 'hammerjs'

function getValidPercent(num) {
  if (num > 1) return 1
  if (num < 0) return 0
  return num
}

export default function useControls(duration, videoRef) {
  const [dragging, setDragging] = useState(false)
  const parentRef = useRef()
  const childRef = useRef()
  const seekPercent = useRef(0)

  useEffect(() => {
    const $video = videoRef.current
    const $wrapper = parentRef.current
    const $bar = childRef.current

    const hammer = new Hammer($wrapper)

    function DOMUpdate(time, percent) {
      $bar.style.transform = `translateX(${percent * 100 - 100}%)`
      $video.currentTime = time
    }

    function seek(mouseX) {
      const { left, width } = $wrapper.getBoundingClientRect()
      const percent = getValidPercent((mouseX - left) / width)
      const time = duration * percent

      setDragging(true)
      DOMUpdate(time, percent)
    }

    function clearSeek() {
      setDragging(false)
    }

    function onPan(e) {
      seek(e.srcEvent.clientX)
    }

    function onPanEnd() {
      clearSeek()
    }

    hammer.on('pan', onPan)
    hammer.on('tap', onPan)
    hammer.on('panend', onPanEnd)

    return () => {
      hammer.off('pan')
      hammer.off('tap', onPan)
      hammer.off('panend')
    }
  }, [duration, parentRef, videoRef])

  return { parentRef, childRef, dragging, seekPercent: seekPercent.current }
}
