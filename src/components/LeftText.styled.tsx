import styled, { StyledComponent } from 'styled-components'

interface Style {
  LeftText: StyledComponent<'div', object>
}

const S = {} as Style

S.LeftText = styled.div`
  position: absolute;
  left: 50%;
  bottom: 10%;
  transform: translate(-50%, -50%);
  p {
    margin: 0;
    font-size: 20px;
    color: #696666;
  }
`

export default S
