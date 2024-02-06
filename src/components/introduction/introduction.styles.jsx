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
  text-align: justify;
  @media (max-width: ${screenBreakpoints.desktopM}) {
    font-size: 14px;
  }

  @media (max-width: ${screenBreakpoints.tablet}) {
    
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
  margin-left: auto;
  background: url("./images/cv.jpg") 50% 30% no-repeat;
  background-size: 250px;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  @media (max-width: ${screenBreakpoints.desktopS}) {
    width: 200px;
    height: 200px;
    background-size: 200px;
  }
  @media (max-width: ${screenBreakpoints.tablet}) {
    margin-bottom: 12px;
    margin-left: 0px;
    width: 170px;
    height: 170px;
    background-size: 170px;
  }
  @media (max-width: ${screenBreakpoints.mobile}) {
    width: 170px;
    height: 170px;
    background-size: 170px;
  }
`

// export const CVPhoto = styled.img`
//   flex: 0.7;
//   border-radius: 50%;
//   /* object-fit: contain; */
//   box-shadow: -5px 10px #EDF7FA;
//   width: 100%;
  

//   @media (max-width: ${screenBreakpoints.desktopL}) {
//     flex: 0.85;
//   }
//   @media (max-width: ${screenBreakpoints.desktopM}) {
//     flex: 0.85;
//   }
// `

export const QRContainer = styled.div`
  
`
export const QRImage = styled.img`
  width: 20vw;
  @media (max-width: ${screenBreakpoints.desktopM}) {
    width: 40vw;
  }
  @media (max-width: ${screenBreakpoints.mobile}) {
    width: 80vw;
  }
`