import { Main } from "./main.styles"
import { NavBarComponent } from "../../components/navbar/navbar.comp"
import { FooterComponent } from "../../components/footer/footer.comp"
import { StickyTop } from "../../styles"
import { Outlet } from "react-router-dom"
import { createContext, useState } from "react"

export const SelectedPathContext = createContext();

export const MainLayout = ({ test }) => {
  const [selectedPath, setSelectedPath] = useState('home');
  return (
    <Main>
      <SelectedPathContext.Provider value={[selectedPath, setSelectedPath]}>
        <StickyTop>
          <NavBarComponent />
        </StickyTop>
        {test}
        <Outlet />
        <FooterComponent />
      </SelectedPathContext.Provider>
    </Main>
  )
}