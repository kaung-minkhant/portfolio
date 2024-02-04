import {styled} from 'styled-components'
import { backgroundColors } from '../../settings/colors'
import { pagePaddings } from '../../settings/distances'
import { screenBreakpoints } from '../../settings/breakpoints'

export const FeaturedWorks = styled.div`
  background-color: ${backgroundColors.page};
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

export const Title = styled.span`
  font-size: 22px;
  font-weight: 500;
`