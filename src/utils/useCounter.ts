import { useCallback, useEffect } from 'react'

import getIntervalTime from './getIntervalTime'

const useCounter = (setter: (data: number) => void, max: number) => {
  const timer = useCallback(
    (max: number) => {
      let now = max
      const handler = setInterval(() => {
        const newData = Math.ceil(max - now)
        setter(newData)
        const step = now / 10
        now -= step
      }, getIntervalTime(max))
      setTimeout(() => {
        clearInterval(handler)
        setter(max)
      }, 2000)
    },
    [setter],
  )
  useEffect(() => {
    timer(max)
  }, [max, timer])
}

export default useCounter
