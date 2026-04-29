import { useEffect, useRef } from 'react'
import './CursorFollower.css'

const interactiveSelector = 'a, button, input, textarea, select, [role="button"], [tabindex]'

function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const supportsFinePointer = window.matchMedia('(pointer: fine)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!supportsFinePointer || prefersReducedMotion) {
      return
    }

    const cursor = cursorRef.current
    const dot = dotRef.current

    if (!cursor || !dot) {
      return
    }

    let animationFrame = 0
    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let cursorX = mouseX
    let cursorY = mouseY

    const moveCursor = () => {
      cursorX += (mouseX - cursorX) * 0.16
      cursorY += (mouseY - cursorY) * 0.16

      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`

      animationFrame = window.requestAnimationFrame(moveCursor)
    }

    const showCursor = () => {
      document.documentElement.classList.add('custom-cursor-ready')
      cursor.classList.add('cursor-follower--visible')
      dot.classList.add('cursor-dot--visible')
    }

    const hideCursor = () => {
      cursor.classList.remove('cursor-follower--visible')
      dot.classList.remove('cursor-dot--visible')
    }

    const handlePointerMove = (event: PointerEvent) => {
      mouseX = event.clientX
      mouseY = event.clientY
      showCursor()

      const hoveredElement = document.elementFromPoint(mouseX, mouseY)

      if (hoveredElement?.closest(interactiveSelector)) {
        cursor.classList.add('cursor-follower--interactive')
        dot.classList.add('cursor-dot--interactive')
      } else {
        cursor.classList.remove('cursor-follower--interactive')
        dot.classList.remove('cursor-dot--interactive')
      }
    }

    const handlePointerDown = () => {
      cursor.classList.add('cursor-follower--pressed')
      dot.classList.add('cursor-dot--pressed')
    }

    const handlePointerUp = () => {
      cursor.classList.remove('cursor-follower--pressed')
      dot.classList.remove('cursor-dot--pressed')
    }

    animationFrame = window.requestAnimationFrame(moveCursor)
    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerleave', hideCursor)
    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('pointerup', handlePointerUp)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', hideCursor)
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('pointerup', handlePointerUp)
      document.documentElement.classList.remove('custom-cursor-ready')
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor-follower" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  )
}

export default CursorFollower
