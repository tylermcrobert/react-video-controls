import { useEffect, useRef, useContext } from 'react'
import Hammer from 'hammerjs'
import { MemoizedCtx } from '..'

function getValidPercent(num) {
  if (num > 1) return 1
  if (num < 0) return 0
  return num
}

export default function useControls() {
  const { duration, videoRef, setSeeking } = useContext(MemoizedCtx)
  const parentRef = useRef()
  const childRef = useRef()
  const seekPercent = useRef(0)

  useEffect(() => {
    const $video = videoRef.current
    const $wrapper = parentRef.current
    const $bar = childRef.current

    const hammer = new Hammer($wrapper)

    function DOMUpdate(time, percent) {
      $bar.style.width = `${percent * 100}%`
      $video.currentTime = time
    }

    function onPan(e) {
      const { left, width } = $wrapper.getBoundingClientRect()
      const percent = getValidPercent((e.srcEvent.clientX - left) / width)
      const time = duration * percent

      DOMUpdate(time, percent)
    }

    function onPanEnd() {
      $video.play()
      setSeeking(false)
    }

    function onPanStart() {
      $video.pause()
      setSeeking(true)
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
  }, [duration, parentRef, setSeeking, videoRef])

  return { parentRef, childRef, seekPercent: seekPercent.current }
}
