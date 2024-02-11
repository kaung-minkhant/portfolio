import { RouterProvider } from "react-router-dom"
import { mainRouter } from "./router/routes"

function App() {
  return (
    <>
      <RouterProvider router={mainRouter} />
      {/* <EditorView /> */}
    </>
  )
}

export default App
