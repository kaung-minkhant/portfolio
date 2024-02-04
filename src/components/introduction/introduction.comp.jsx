import { CVButton, CVPhoto, CVPhotoContainer, Description, InfoWrapper, Introduction, QRContainer, QRImage, Title } from "./introduction.styles"
import { ButtonGroup } from "../../styles"
import Modal from 'react-modal'
import { useEffect, useState } from "react"
import QRCode from 'qrcode'
import { introductionContent } from "../../content/introduction"

export const IntroductionComponent = () => {

  const downloadCV = () => {
    fetch(import.meta.env.VITE_CV_LINK)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob], {
          type: 'application/pdf'
        }))
        const link = document.createElement('a')
        link.href = url
        link.download = "KaungMinKhant_CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        throw new Error("Error fetching the file:" + error);
      });
  }

  // modal code
  const [isModalOpened, setIsModalOpened] = useState(false);
  useEffect(() => {
    Modal.setAppElement('#qr-modal')
  }, [])
  function openModal() {
    setIsModalOpened(true);
  }
  function closeModal() {
    setIsModalOpened(false);
  }

  // generate QR
  const [qrcode, setQrcode] = useState("");
  useEffect(() => {
    QRCode.toDataURL(import.meta.env.VITE_CV_LINK)
    .then(url => {
      // console.log(url)
      setQrcode(url)
    })
  }, [])

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      // marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  return (
    <Introduction>
      <div id="qr-modal"></div>
      <Modal
        isOpen={isModalOpened}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <QRContainer>
          <QRImage src={qrcode} />
        </QRContainer>
      </Modal>
      <InfoWrapper>
        <Title>
          {introductionContent.title()}
        </Title>
        <Description>
          {introductionContent.description()}
        </Description>
        <ButtonGroup>
          <CVButton onClick={downloadCV}>Download Resume</CVButton>
          <CVButton onClick={openModal}>QR</CVButton>
        </ButtonGroup>
      </InfoWrapper>
      <CVPhotoContainer>
        <CVPhoto src="./images/cv.jpg" />
      </CVPhotoContainer>
    </Introduction>
  )
}