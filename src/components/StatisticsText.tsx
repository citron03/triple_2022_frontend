import { useEffect, useState } from 'react'

const StatisticsText = () => {
  const [user, setUser] = useState(0)
  // const [review, setReview] = useState(0)
  // const [save, setSave] = useState(0)
  const [userTimer, setUserTimer] = useState(0)
  const userMax = 350
  // const reviewMax = 21
  // const saveMax = 650
  const interverTimeUser = 2000 / userMax
  useEffect(() => {
    const plus = setInterval(() => {
      if (userTimer > 2000) {
        clearInterval(plus)
      } else {
        setUserTimer((prev) => prev + interverTimeUser)
        if (2000 - userTimer > 0) {
          setUser((prev) => prev + 1)
        }
      }
    }, interverTimeUser)
    return () => clearInterval(plus)
  }, [userTimer, interverTimeUser])
  return (
    <div>
      <p>
        <strong>{user}만 명</strong>의 사용자
      </p>
      {/* <p>
        <strong>{review}만 개</strong>의 리뷰
      </p>
      <p>
        <strong>{save}만 개</strong>의 저장
      </p> */}
    </div>
  )
}

export default StatisticsText
