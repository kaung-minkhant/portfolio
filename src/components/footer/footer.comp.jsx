import { Copyright, Footer, FooterIcon, FooterIcons } from "./footer.styles"
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export const FooterComponent = () => {
  return (
    <Footer>
      <FooterIcons>
        <FooterIcon href="https://www.linkedin.com/in/kaung-minkhant/" target="_blank">
          <FaInstagram size={"2em"} />
        </FooterIcon>
        <FooterIcon href="https://www.linkedin.com/in/kaung-minkhant/" target="_blank">
          <FaLinkedin size={"2em"} />
        </FooterIcon>
      </FooterIcons>
      <Copyright>
        Copyright &copy;2024 All rights reserved
      </Copyright>
    </Footer>
  )
}