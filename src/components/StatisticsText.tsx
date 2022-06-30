import { useState } from 'react'

import useCounter from '../utils/useCounter'

import S from './StatisticsText.styled'

const userMax = 700
const reviewMax = 100
const saveMax = 470

const StatisticsText = () => {
  const [user, setUser] = useState(0)
  const [review, setReview] = useState(0)
  const [save, setSave] = useState(0)
  useCounter(setUser, userMax)
  useCounter(setReview, reviewMax)
  useCounter(setSave, saveMax)
  return (
    <S.StatisticsText>
      <p>
        <strong>
          <span>{user}만 명</span>
        </strong>
        의 사용자
      </p>
      <p>
        <strong>
          <span>{review}만 개</span>
        </strong>
        의 리뷰
      </p>
      <p>
        <strong>
          <span>{save}만 개</span>
        </strong>
        의 저장
      </p>
    </S.StatisticsText>
  )
}

export default StatisticsText
