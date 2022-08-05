import { useState } from "react"
import Game from "./components/Game"
import StartGame from "./components/StartGame"

function App() {
  const [started, setStarted] = useState(false)

  function startGame() {
    setStarted(true)
  }

  return (
    started
      ? <Game />
      : <StartGame setStarted={startGame} />
  )
}

export default App
