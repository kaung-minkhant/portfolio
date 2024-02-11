import { useEffect, useState } from "react";
import { GIF, No, Valentine, Yes, YesNo } from "./valentine.styles";
import JSConfetti from "js-confetti";

export const ValentineComponent = () => {
  const [didSheSaysYes, setDidSheSaysYes] = useState(false)
  const [confetti, setConfetti] = useState()
  
  useEffect(() => {
    setConfetti(new JSConfetti())
  }, [])

  const sheSaysYes = () => {
    confetti.addConfetti({
      confettiRadius: 4,
      confettiNumber: 500,
    });
    setDidSheSaysYes(true)
  }
  const sheSaysNo = () => {
    setDidSheSaysYes(false)
  }
  return (
    <Valentine>
      { didSheSaysYes ? 
        (<GIF src="https://media1.tenor.com/m/O3QyeZpDgn8AAAAC/yay.gif"/>) : 
        (<GIF src="https://media1.tenor.com/m/K_E6ORTmXMoAAAAC/milk-and-mocha-love.gif" />)
      }
      <YesNo>
        <Yes onClick={sheSaysYes}>Yes</Yes>
        <No onClick={sheSaysNo} disabled={didSheSaysYes} title={didSheSaysYes ? 'No backsie' : ''}>No</No>
      </YesNo>
    </Valentine>
  )
}