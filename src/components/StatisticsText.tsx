import { useState } from 'react'

import useCounter from '../utils/useCounter'

import S from './StatisticsText.styled'

const userMax = 350
const reviewMax = 21
const saveMax = 650

const StatisticsText = () => {
  const [user, setUser] = useState(0)
  const [review, setReview] = useState(0)
  const [save, setSave] = useState(0)
  useCounter(setUser, userMax, 35)
  useCounter(setReview, reviewMax, 65)
  useCounter(setSave, saveMax, 30)
  return (
    <S.StatisticsText>
      <p>
        <strong>{user}만 명</strong>의 사용자
      </p>
      <p>
        <strong>{review}만 개</strong>의 리뷰
      </p>
      <p>
        <strong>{save}만 개</strong>의 저장
      </p>
    </S.StatisticsText>
  )
}

export default StatisticsText
