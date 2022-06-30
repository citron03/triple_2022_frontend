import styled, { StyledComponent } from 'styled-components'

interface Style {
  StatisticsText: StyledComponent<'div', object>
}

const S = {} as Style

S.StatisticsText = styled.div`
  flex: 1 1 0;
  p {
    font-size: 36px;
    line-height: 1;
    margin-top: 0px;
  }
`

export default S
