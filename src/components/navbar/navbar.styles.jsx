import {styled} from 'styled-components'
import {screenBreakpoints} from '../../settings/breakpoints'
import { backgroundColors } from '../../settings/colors'

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 27px 60px 20px 60px;
  border-bottom: 1px solid #999999;
  background-color: ${backgroundColors.nav};
  /* position: relative; */
  z-index: 10;

  @media (max-width: ${screenBreakpoints.mobile}) {
    padding: 15px 60px 15px 60px;
    flex-direction: column;
    align-items: center;
  }
`

export const NavItems = styled.div`
  display: flex;
  gap: 34px;
  overflow: hidden;
  transition: max-height 0.5s, padding 0.5s;
  background-color: ${backgroundColors.navItems};
  z-index: 10;

  @media (max-width: ${screenBreakpoints.mobile}) {
    gap: 15px;
    top: 64.5px;
    width: 100%;
    padding: ${props => props.$isNavOpened ? "15px 0" : 0};
    /* outline: 1px solid black; */
    position: absolute;
    flex-direction: column;
    border-bottom: 1px solid #999999;
    max-height: ${props => props.$isNavOpened ? "200px" : 0};
  }
`

export const NavOverlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  /* background-color: blue; */
`

export const NavItem = styled.span`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  color: ${props => props.$isSelected ? backgroundColors.primary : "black"};

  &:hover {
    text-decoration: underline;
  }
`

export const Burger = styled.div`
  display: inline;
  display: none;
  padding-bottom: 10px;
  @media (max-width: ${screenBreakpoints.mobile}) {
    display: inline;
    align-self: flex-end;
  }
`