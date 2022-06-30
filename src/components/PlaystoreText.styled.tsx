import styled, { StyledComponent } from 'styled-components'

interface Style {
  PlaystoreText: StyledComponent<'div', object>
}

const S = {} as Style

S.PlaystoreText = styled.div`
  display: inline-block;
  font-family: sans-serif;
  background-image: url(/images/play-store2x.png);
  background-position: left top;
  background-repeat: no-repeat;
  color: rgba(58, 58, 58, 0.8);
  font-weight: bold;
  background-size: 54px 54px;
  height: 54px;
  padding: 5px 0px 5px 62px;
  font-size: 14px;
  line-height: 22px;
  margin-right: 39px;
`

export default S
