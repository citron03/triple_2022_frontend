import { Awards, StatisticsText, LeftText } from '../components'

import S from './Banner.styled'

const Banner: React.FC = () => {
  return (
    <S.Banner>
      <S.LeftSection>
        <S.LeftImg src="/images/triple2x.png" alt="트리플_이미지" />
        <LeftText />
      </S.LeftSection>
      <S.RightSection>
        <StatisticsText />
        <Awards />
      </S.RightSection>
    </S.Banner>
  )
}

export default Banner
