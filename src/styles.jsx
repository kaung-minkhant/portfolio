import {styled} from 'styled-components'
import { backgroundColors } from './settings/colors'
import { screenBreakpoints } from './settings/breakpoints'

export const StickyTop = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: ${screenBreakpoints.tablet}) {
    flex-direction: column;
  }
`

////////////////////////////////// message conveyer
export const MessageConveyer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Message = styled.span`
  font-size: 30px;
  font-weight: 600;
  
  @media (max-width: ${screenBreakpoints.mobile}) {
    font-size: 20px;
  }
`
export const MessageTitle = styled.span`
  font-size: 35px;
`
const getBackgroundColorFromTheme = (theme = 'info') => {
  switch (theme) {
    case 'info': 
      return backgroundColors.recentPosts;
    case 'error':
      return backgroundColors.primary;
  }
}
export const MessageContainer = styled.div`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => getBackgroundColorFromTheme(props.$theme)};
`