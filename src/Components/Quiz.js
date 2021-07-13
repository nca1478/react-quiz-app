import React, { useContext, useEffect } from 'react'
import { QuestionContext } from '../context/QuestionContext'

export const Quiz = () => {
  const { questions, setQuestions } = useContext(QuestionContext)

  useEffect(() => {
    const listQuestions = questions.map((question) => ({
      ...question,
      answers: [question.correct_answer, ...question.incorrect_answers].sort(
        () => Math.random() - 0.5
      ),
    }))

    setQuestions(listQuestions)
  }, [])

  return (
    <div>
      <h1>Quiz</h1>
    </div>
  )
}
