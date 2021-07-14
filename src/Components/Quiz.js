import React, { useContext, useEffect, useState } from 'react'
import { QuestionContext } from '../context/QuestionContext'
import { EndQuiz } from './EndQuiz'
import { Questionaire } from './Questionaire'

export const Quiz = () => {
  const { questions, setQuestions } = useContext(QuestionContext)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAnswers, setShowAnswers] = useState(false)
  const [score, setScore] = useState(0)

  useEffect(() => {
    const listQuestions = questions.map((question) => ({
      ...question,
      answers: [question.correct_answer, ...question.incorrect_answers].sort(
        () => Math.random() - 0.5
      ),
    }))

    setQuestions(listQuestions)
  }, [])

  const handleAnswer = (answer) => {
    if (!showAnswers) {
      // prevent double answers
      if (answer === questions[currentIndex].correct_answer) {
        setScore(score + 1)
      }
      setShowAnswers(true)
    }
  }

  const handleNextQuestion = () => {
    setShowAnswers(false)
    setCurrentIndex(currentIndex + 1)
  }

  return (
    questions.length > 0 && (
      <div className="col-6">
        <div className="card">
          <div className="card-header bg-primary text-light text-center">
            <span className="h3">
              {currentIndex < questions.length
                ? `Question ${currentIndex + 1}/${questions.length}`
                : 'Quiz Ended'}
            </span>
          </div>
          <div className="card-body">
            {currentIndex >= questions.length ? (
              <EndQuiz score={score} />
            ) : (
              <Questionaire
                handleNextQuestion={handleNextQuestion}
                data={questions[currentIndex]}
                handleAnswer={handleAnswer}
                showAnswers={showAnswers}
              />
            )}
          </div>
        </div>
      </div>
    )
  )
}
