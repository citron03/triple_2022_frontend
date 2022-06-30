import styled, { StyledComponent, keyframes } from 'styled-components'

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const upStore = keyframes`
  from {
    margin-top: 25px;
  }
  to {
    margin-top: 0px;
  }
`

interface Style {
  Awards: StyledComponent<'div', object>
  RightImg: StyledComponent<'img', object>
}

const S = {} as Style

S.Awards = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: ${appear} 900ms, ${upStore} 900ms;
`

export default S
