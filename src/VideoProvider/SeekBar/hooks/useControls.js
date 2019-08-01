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

    function onPan(e) {
      const { left, width } = $wrapper.getBoundingClientRect()
      const percent = getValidPercent((e.srcEvent.clientX - left) / width)
      const time = duration * percent

      DOMUpdate(time, percent)
    }

    function onPanEnd() {
      // $video.play()
      setDragging(false)
    }

    function onPanStart() {
      // $video.pause()
      setDragging(true)
    }

    hammer.on('pan', onPan)
    hammer.on('tap', onPan)
    hammer.on('panend', onPanEnd)
    hammer.on('panstart', onPanStart)

    return () => {
      hammer.off('pan')
      hammer.off('tap')
      hammer.off('panend')
      hammer.off('panstart')
    }
  }, [duration, parentRef, videoRef])

  return { parentRef, childRef, dragging, seekPercent: seekPercent.current }
}
