import {styled} from 'styled-components'
import {backgroundColors} from '../../settings/colors'
import {pagePaddings} from '../../settings/distances'

export const RecentPosts = styled.div`
  background-color: ${backgroundColors.recentPosts};
  padding: 27px ${pagePaddings.horizontal.default};
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