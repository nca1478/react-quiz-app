import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { QuestionContext } from '../context/Question'

export const EndQuiz = ({ score, questions }) => {
  const { setQuestions } = useContext(QuestionContext)

  const handleReset = () => {
    setQuestions([])
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <h3 className="text-center mb-3">
        Tu puntaje es {score} / {questions}
      </h3>

      <Link to="/" className="btn btn-dark" onClick={handleReset}>
        Intentar Nuevamente
      </Link>
    </div>
  )
}
