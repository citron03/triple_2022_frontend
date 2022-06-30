const endTime = 2000

const getIntervalTime = (max: number) => {
  let now = max
  let count = 0
  while (Math.ceil(max - now) !== max) {
    const step = now / 10
    now -= step
    count++
  }
  return endTime / count
}

export { getIntervalTime, endTime }
