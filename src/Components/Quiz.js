import React, { useContext, useState } from 'react'
import { QuestionContext } from '../context/Question'
import { EndQuiz } from './EndQuiz'
import { QuizList } from './QuizList'

export const Quiz = () => {
  const { questions } = useContext(QuestionContext)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAnswers, setShowAnswers] = useState(false)
  const [score, setScore] = useState(0)

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
      <div className="col-sm-9 col-md-9 col-lg-6">
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
              <EndQuiz score={score} questions={questions.length} />
            ) : (
              <QuizList
                handleNextQuestion={handleNextQuestion}
                data={questions[currentIndex]}
                handleAnswer={handleAnswer}
                showAnswers={showAnswers}
                questionNumber={currentIndex + 1}
              />
            )}
          </div>
          <div className="card-footer text-center bg-primary text-white fw-bold">
            <span>
              <a
                href="https://nelsoncadenas.netlify.app/"
                rel="noreferrer"
                className="text-white text-decoration-none"
                target="_blank"
              >
                Copyright &copy; 2022 <br />
                Developed by: Nelson Cadenas
              </a>
            </span>
          </div>
        </div>
      </div>
    )
  )
}
