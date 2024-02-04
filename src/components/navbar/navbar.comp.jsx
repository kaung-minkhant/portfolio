import { useContext, useState } from "react"
import { Nav, NavItems, NavItem, Burger, NavOverlay } from "./navbar.styles"
import { useMediaQuery } from "react-responsive";
import { screenBreakpoints } from "../../settings/breakpoints";
import { useNavigate } from "react-router-dom";
import { SelectedPathContext } from "../../layouts/main/main.layout";

export const NavBarComponent = () => {
  const [isNavOpened, SetIsNavOpened] = useState(false);
  const [selectedPath, setSelectedPath] = useContext(SelectedPathContext)
  const navigate = useNavigate();
  const isMobile = useMediaQuery({
    query: `(max-width: ${screenBreakpoints.mobile})`
  })
  function toggleNavbar() {
    SetIsNavOpened((isOpened) => !isOpened)
  }
  function click(navFunc, path, key) {
    return function() {
      SetIsNavOpened((isOpened) => !isOpened)
      navFunc(path);
      setSelectedPath(key)
    }
  }
  return (
    <>
      <Nav>
        <Burger onClick={toggleNavbar}>Burger</Burger>
        <NavItems $isNavOpened={isNavOpened}>
          <NavItem $isSelected={selectedPath === 'home'} onClick={click(navigate, '/', 'home')}>Home</NavItem>
          <NavItem $isSelected={selectedPath === 'works'} onClick={click(navigate, 'works', 'works')}>Works</NavItem>
          <NavItem $isSelected={selectedPath === 'blogs'} onClick={click(navigate, 'blogs', 'blogs')}>Blogs</NavItem>
          <NavItem $isSelected={selectedPath === 'contact'} onClick={click(navigate, 'contact', 'contact')}>Contact</NavItem>
        </NavItems>
      </Nav>
      {
        isMobile && isNavOpened && (
          <NavOverlay onClick={() => isNavOpened && toggleNavbar()}></NavOverlay>
        )
      }
    </>
  )
}