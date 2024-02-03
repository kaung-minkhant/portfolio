import {styled} from 'styled-components'

export const Footer = styled.footer`
  padding: 25px 0 25px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`

export const FooterIcons = styled.div`
  display: flex;
  gap: 15px;
`
export const FooterIcon = styled.a`
  cursor: pointer;
  &:visited {
    color: black;
  }
`

export const Copyright = styled.span`
  font-size: 14px;
  font-weight: 400;
`