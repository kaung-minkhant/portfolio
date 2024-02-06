import { GIF, No, Valentine, Yes, YesNo } from "./valentine.styles";

export const ValentineComponent = () => {
  return (
    <Valentine>
      <GIF src="https://media1.tenor.com/m/K_E6ORTmXMoAAAAC/milk-and-mocha-love.gif" />
      <YesNo>
        <Yes>Yes</Yes>
        <No>No</No>
      </YesNo>
    </Valentine>
  )
}