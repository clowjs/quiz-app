function Question() {

  return (
    <div className="question-container">
      <h1 className="question-question">Question!</h1>
      <ul className="question-answers">
        <li className="question-answer">Italy</li>
        <li className="question-answer">Portugal</li>
        <li className="question-answer selected">Transformers</li>
        <li className="question-answer">Cabbage Patch Kids</li>
      </ul>
    </div>
  )
}

export default Question