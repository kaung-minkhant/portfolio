import { useMediaQuery } from "react-responsive"
import { CVButton, CVPhoto, CVPhotoContainer, Description, InfoWrapper, Introduction, Title } from "./introduction.styles"
import { screenBreakpoints } from "../../settings/breakpoints"

export const IntroductionComponent = () => {
  return (
    <Introduction>
      <InfoWrapper>
        <Title>
          Hi, My name is <br /> Kaung Min Khant
        </Title>
        <Description>
          This is a Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aliquid quod soluta adipisci natus eos maxime quia quidem veniam corrupti eveniet tempora, voluptas laudantium nihil asperiores, dolores possimus et unde!
        </Description>
        <CVButton>Download Resume</CVButton>
      </InfoWrapper>
      <CVPhotoContainer>
        <CVPhoto src="./images/cv.jpg"/>
      </CVPhotoContainer>
    </Introduction>
  )
}