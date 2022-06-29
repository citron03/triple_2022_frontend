import styled, { StyledComponent } from 'styled-components'

interface Style {
  StatisticsText: StyledComponent<'div', object>
}

const S = {} as Style

S.StatisticsText = styled.div`
  flex: 1 1 0;
  p {
    font-size: 50px;
    line-height: 1;
  }
`

export default S
