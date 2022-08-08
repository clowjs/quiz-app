import { useEffect, useState } from "react"
import Question from "./Question"
import { nanoid } from "nanoid"

function Game() {

  const url = "https://opentdb.com/api.php?amount=5&category=15&type=multiple"

  const [questions, setQuestions] = useState([])


  function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  useEffect(() => {
    async function createQuestions() {
      const response = await fetch(url)
      const data = await response.json()

      let allQuestions = await data.results.map(result => {
        let answers = result.incorrect_answers.map(answer => ({
          correct: false,
          answer: answer
        }))

        answers.push({ correct: true, answer: result.correct_answer })

        const finalQuestions = {
          id: nanoid(),
          question: result.question,
          answers: shuffle(answers)
        }

        return finalQuestions
      })
      console.log(allQuestions)

      setQuestions(allQuestions)
    }

    createQuestions()
  }, [])

  const questionElements = questions.map(question => {
    return <Question question={question} key={question.id} />
  })

  return (
    <div className="game-container">
      <div className="questions-container">
        {questionElements}
      </div>
      <div className="game-footer">
        <div className="btn">Check answers</div>
      </div>
    </div>
  )
}

export default Game