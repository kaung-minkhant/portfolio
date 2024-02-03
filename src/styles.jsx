import {styled} from 'styled-components'
import { backgroundColors } from './settings/colors'

export const StickyTop = styled.div`
  position: sticky;
  top: 0;
`

export const MessageConveyer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Message = styled.span`
  font-size: 30px;
  font-weight: 600;
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