import { useCallback, useEffect } from 'react'

const useCounter = (
  setter: (data: number) => void,
  max: number,
  intervalTime: number,
) => {
  const timer = useCallback(
    (max: number) => {
      let now = max
      const handler = setInterval(() => {
        setter(Math.ceil(max - now))
        if (now < 0) {
          clearInterval(handler)
        }
        const step = now / 10
        now -= step
      }, intervalTime)
      setTimeout(() => clearInterval(handler), 2000)
    },
    [setter, intervalTime],
  )
  useEffect(() => {
    timer(max)
  }, [max, timer])
}

export default useCounter
