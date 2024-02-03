import { RouterProvider } from "react-router-dom"
import { mainRouter } from "./router/routes"

function App() {
  return (
    <>
      <RouterProvider router={mainRouter} />
    </>
  )
}

export default App
