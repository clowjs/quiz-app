function StartGame(props) {

  return (
    <div className="start-game-container">
      <h1 className="start-game-title">Video Games Quiz!</h1>
      <p className="start-game-text">Test your general Video Games knowledge by answering 5 questions!</p>
      <button
        onClick={props.startGame}
        className="btn start-btn"
      >Start quiz</button>
    </div>
  )
}

export default StartGame