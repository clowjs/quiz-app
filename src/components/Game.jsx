import Question from "./Question"

function Game() {

  return (
    <div className="game-container">
      <div className="questions-container">
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
      </div>
      <div className="game-footer">
        <div className="btn">Check answers</div>
      </div>
    </div>
  )
}

export default Game