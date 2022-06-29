import styled, { StyledComponent } from 'styled-components'

interface Style {
  Banner: StyledComponent<'div', object>
  LeftSection: StyledComponent<'section', object>
  RightSection: StyledComponent<'section', object>
  AwardsDiv: StyledComponent<'div', object>
  LeftImg: StyledComponent<'img', object>
  RightImg: StyledComponent<'img', object>
  StoreDiv: StyledComponent<'div', object>
}

const S = {} as Style

S.Banner = styled.div`
  display: flex;
  flex-direction: row;
`

S.LeftSection = styled.section`
  flex: 1 1 0;
`

S.RightSection = styled.section`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
`

S.AwardsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

S.LeftImg = styled.img`
  max-width: 800px;
  height: auto;
`

S.RightImg = styled.img`
  width: 90px;
  height: auto;
  margin-right: 15px;
`

export default S
