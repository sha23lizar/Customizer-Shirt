import Canvas from "./canvas/index"
import Custumizer from "./pages/customizer"
import Home from "./pages/home"


function App() {

  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Custumizer />
    </main>
  )
}

export default App
