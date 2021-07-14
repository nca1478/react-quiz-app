import React, { useContext, useEffect, useState } from 'react'
import { QuestionContext } from '../context/QuestionContext'
import { Questionaire } from './Questionaire'

export const Quiz = () => {
  const { questions, setQuestions } = useContext(QuestionContext)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const listQuestions = questions.map((question) => ({
      ...question,
      answers: [question.correct_answer, ...question.incorrect_answers].sort(
        () => Math.random() - 0.5
      ),
    }))

    setQuestions(listQuestions)
  }, [])

  const handleNextQuestion = () => {
    setCurrentIndex(currentIndex + 1)
  }

  return (
    <div className="col-6">
      <div className="card">
        <div className="card-header bg-primary text-light text-center">
          <span className="h3">{`Question ${currentIndex + 1}/${
            questions.length
          }`}</span>
        </div>
        <div className="card-body">
          {questions.length > 0 && (
            <Questionaire
              handleNextQuestion={handleNextQuestion}
              data={questions[currentIndex]}
            />
          )}
        </div>
      </div>
    </div>
  )
}
