import { Awards, StatisticsText, LeftText } from '../components'

import S from './Banner.styled'

const Banner: React.FC = () => {
  return (
    <S.Banner>
      <S.LeftSection>
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
