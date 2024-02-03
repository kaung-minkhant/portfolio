import {styled} from 'styled-components'
import { backgroundColors } from '../../settings/colors'
import { pagePaddings } from '../../settings/distances'

export const FeaturedWorks = styled.div`
  background-color: ${backgroundColors.page};
  padding: 27px ${pagePaddings.horizontal.default};
`

export const Title = styled.span`
  font-size: 22px;
  font-weight: 500;
`