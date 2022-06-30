import S from './Awards.styled'

import { AppleText, PlaystoreText } from './'

const Awards: React.FC = () => {
  return (
    <S.Awards>
      <PlaystoreText />
      <AppleText />
    </S.Awards>
  )
}

export default Awards
