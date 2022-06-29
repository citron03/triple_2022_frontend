import styled, { StyledComponent, keyframes } from 'styled-components'

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const up = keyframes`
  from {
    margin-top: 75px;
  }
  to {
    margin-top: 50px;
  }
`

interface Style {
  Banner: StyledComponent<'div', object>
  LeftSection: StyledComponent<'section', object>
  RightSection: StyledComponent<'section', object>
  LeftImg: StyledComponent<'img', object>
}

const S = {} as Style

S.Banner = styled.div`
  display: flex;
  flex-direction: row;
  margin: 50px;
`

S.LeftSection = styled.section`
  position: relative;
  flex: 1 1 0;
  margin: 50px;
  animation: ${appear} 700ms, ${up} 700ms;
`

S.RightSection = styled.section`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  margin: 50px;
  animation: ${appear} 800ms, ${up} 800ms;
`

S.LeftImg = styled.img`
  max-width: 800px;
  height: auto;
`

export default S
