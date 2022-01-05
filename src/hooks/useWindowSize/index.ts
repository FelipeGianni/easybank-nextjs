import { useState, useEffect } from 'react'

interface WindowSize {
  width: number
  height: number
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 1920,
    height: 1080,
  })

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)
      handleResize()

      return () => window.removeEventListener('resize', handleResize)
    }

    return () => {}
  }, [])

  return windowSize
}

export default useWindowSize
