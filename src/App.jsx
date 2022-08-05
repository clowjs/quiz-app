import { useState } from "react"
import Game from "./components/Game"
import StartGame from "./components/StartGame"

function App() {
  const [started, setStarted] = useState(false)

  function startGame() {
    console.log("Started game")
    setStarted(true)
  }

  return (
    started
      ? <Game />
      : <StartGame startGame={startGame} />
  )
}

export default App
