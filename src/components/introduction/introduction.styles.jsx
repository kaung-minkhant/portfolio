import { styled } from 'styled-components'
import { screenBreakpoints } from '../../settings/breakpoints'
import {pagePaddings} from '../../settings/distances.js'
import { backgroundColors } from '../../settings/colors.js'

export const Introduction = styled.div`
  display: flex;
  margin-bottom: 10px;
  padding: 50px ${pagePaddings.horizontal.default};
  align-items: flex-start;
  /* align-items: center; */
  @media (max-width: ${screenBreakpoints.desktopL}) {
    padding: 50px ${pagePaddings.horizontal.desktopL};
  }
  @media (max-width: ${screenBreakpoints.desktopM}) {
    padding: 50px ${pagePaddings.horizontal.desktopM};
  }
  @media (max-width: ${screenBreakpoints.desktopS}) {
    padding: 50px ${pagePaddings.horizontal.desktopS};
  }
  @media (max-width: ${screenBreakpoints.tablet}) {
    flex-direction: column-reverse;
    align-items: center;
    padding: 30px ${pagePaddings.horizontal.tablet};
  }
  @media (max-width: ${screenBreakpoints.mobile}) {
    padding: 30px ${pagePaddings.horizontal.mobile};
  }
`

export const InfoWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  @media (max-width: ${screenBreakpoints.tablet}) {
    width: 100%;
    padding-top: 20px;
  }
  @media (max-width: ${screenBreakpoints.mobile}) {
    align-items: center;
  }
`
export const Title = styled.h1`
  font-size: 44px;
  font-weight: 700;
  line-height: 50px;
  margin-bottom: 30px;

  @media (max-width: ${screenBreakpoints.desktopL}) {
    font-size: 35px;
    margin-bottom: 10px;
  }

  @media (max-width: ${screenBreakpoints.desktopM}) {
    line-height: 40px;
  }

  @media (max-width: ${screenBreakpoints.tablet}) {
    text-align: center;
  }
`

export const Description = styled.span`
  display: block;
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 30px;
  @media (max-width: ${screenBreakpoints.desktopM}) {
    font-size: 14px;
  }

  @media (max-width: ${screenBreakpoints.tablet}) {
    text-align: justify;
    line-height: 20px;
    margin-bottom: 15px;
  }
`

export const CVButton = styled.button`
  flex-grow: 0;
  width: fit-content;
  border: none;
  background-color: ${backgroundColors.primary};
  color: white;
  padding: 12px 21px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;

  @media (max-width: ${screenBreakpoints.tablet}) {
    align-self: center;
  }
`

export const CVPhotoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: ${screenBreakpoints.tablet}) {
    width: 50%;
    margin-bottom: 12px;
  }
`

export const CVPhoto = styled.img`
  flex: 0.7;
  border-radius: 50%;
  object-fit: contain;
  box-shadow: -5px 10px #EDF7FA;

  @media (max-width: ${screenBreakpoints.desktopL}) {
    flex: 0.85;
  }
  @media (max-width: ${screenBreakpoints.desktopM}) {
    flex: 0.85;
  }
`