import { useState } from 'react'

import useCounter from '../utils/useCounter'

import S from './StatisticsText.styled'

const userMax = 700
const reviewMax = 100
const scheduleMax = 470

const StatisticsText = () => {
  const [user, setUser] = useState<number>(0)
  const [review, setReview] = useState<number>(0)
  const [schedule, setSchedule] = useState<number>(0)
  useCounter(setUser, userMax)
  useCounter(setReview, reviewMax)
  useCounter(setSchedule, scheduleMax)
  return (
    <S.StatisticsText>
      <p>
        <strong>
          <span>{user}만 명</span>
        </strong>
        의 여행자
      </p>
      <p>
        <strong>
          <span>{review}만 개</span>
        </strong>
        의 여행 리뷰
      </p>
      <p>
        <strong>
          <span>{schedule}만 개</span>
        </strong>
        의 여행 일정
      </p>
    </S.StatisticsText>
  )
}

export default StatisticsText
