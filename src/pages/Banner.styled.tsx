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
    margin-top: 25px;
  }
  to {
    margin-top: 0px;
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
  margin: 0px auto;
  width: fit-content;
  min-width: 1200px;
`

S.LeftSection = styled.section`
  animation: ${appear} 700ms, ${up} 700ms;
  position: absolute;
  top: 110px;
  width: 400px;
  height: 338px;
  background-size: 400px 338px;
  font-size: 15px;
  box-sizing: border-box;
  background-image: url(/images/triple2x.png);
  background-repeat: no-repeat;
  text-align: center;
  font-family: sans-serif;
  color: rgba(58, 58, 58, 0.7);
`

S.RightSection = styled.section`
  position: absolute;
  top: 110px;
  animation: ${appear} 800ms, ${up} 800ms;
  margin-left: 623px;
  width: fit-content;
`

export default S
