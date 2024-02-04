import {styled} from 'styled-components'
import {backgroundColors} from '../../settings/colors'
import {pagePaddings} from '../../settings/distances'
import { screenBreakpoints } from '../../settings/breakpoints'

export const RecentPosts = styled.div`
  background-color: ${backgroundColors.recentPosts};
  padding: 27px ${pagePaddings.horizontal.default};
  @media (max-width: ${screenBreakpoints.desktopL}) {
    padding: 27px ${pagePaddings.horizontal.desktopL};
  }
  @media (max-width: ${screenBreakpoints.desktopM}) {
    padding: 27px ${pagePaddings.horizontal.desktopM};
  }
  @media (max-width: ${screenBreakpoints.desktopS}) {
    padding: 27px ${pagePaddings.horizontal.desktopS};
  }
  @media (max-width: ${screenBreakpoints.tablet}) {
    padding: 27px ${pagePaddings.horizontal.tablet};
  }
  @media (max-width: ${screenBreakpoints.mobile}) {
    padding: 27px ${pagePaddings.horizontal.mobile};
  }
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Title = styled.span`
  font-size: 22px;
  font-weight: 500;
`
export const ViewAll = styled.span`
  font-size: 16px;
  color: ${backgroundColors.secondary};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`