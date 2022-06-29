import S from './Awards.styled'

import { AppleText, PlaystoreText } from './'

const Awards: React.FC = () => {
  return (
    <S.Awards>
      <S.RightImg src="/images/play-store2x.png" alt="플레이스토어" />
      <PlaystoreText />
      <S.RightImg src="/images/badge-apple4x.png" alt="애플" />
      <AppleText />
    </S.Awards>
  )
}

export default Awards
