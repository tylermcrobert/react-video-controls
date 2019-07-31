import { useState, useEffect } from 'react'

export default function useMouseDown() {
  const [mouseDown, setMouseDown] = useState(false)

  const handleMouseDown = () => setMouseDown(true)
  const handleMouseUp = () => setMouseDown(false)

  useEffect(() => {
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    return () => {
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  })

  return mouseDown
}
