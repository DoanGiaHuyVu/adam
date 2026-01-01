import { useEffect, useRef, useState } from 'react'

import { isClient } from '../lib/utils'

const CALL_THRESHOLD_MS = 0

type UseViewportSizeProps = {
  callTreshhold?: number
  ignoreVerticalResize?: boolean
}

export const useViewportSize = (
  { callTreshhold = CALL_THRESHOLD_MS, ignoreVerticalResize = false }: UseViewportSizeProps = {}
) => {
  const resizeTimeout = useRef<NodeJS.Timeout | null>(null)
  const [windowSize, setWindowSize] = useState<{
    width: number
    height: number
    aspect: number
  }>({
    width: 0,
    height: 0,
    aspect: 0
  })

  useEffect(() => {
    const handleResize = () => {
      if (resizeTimeout.current) {
        clearTimeout(resizeTimeout.current)
      }
      resizeTimeout.current = setTimeout(() => {
        setWindowSize((prev) => {
          const newWidth = window.innerWidth
          const newHeight = window.innerHeight

          // If we want to prevent updates when only height changes (mobile address bar)
          if (ignoreVerticalResize && newWidth === prev.width && newHeight !== prev.height) {
            return prev
          }
          
          return {
            width: newWidth,
            height: newHeight,
            aspect: newWidth / newHeight
          }
        })
      }, callTreshhold)
    }

    window.addEventListener('resize', handleResize, { passive: true })

    // Initial set
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
      aspect: window.innerWidth / window.innerHeight
    })

    return () => {
      window.removeEventListener('resize', handleResize)

      if (resizeTimeout.current) {
        clearTimeout(resizeTimeout.current)
      }
    }
  }, [callTreshhold])

  return windowSize
}
