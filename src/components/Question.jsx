import { nanoid } from "nanoid"
import { decode } from "he"

function Question(props) {

  const answersList = props.question.answers.map(answer => {
    return <li key={nanoid()} className="question-answer">{decode(answer.answer)}</li>
  })

  return (
    <div className="question-container">
      <h1 className="question-question">{decode(props.question.question)}</h1>
      <ul className="question-answers">
        {answersList}
      </ul>
    </div>
  )
}

export default Question