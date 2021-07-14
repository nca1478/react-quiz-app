import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { QuestionContext } from '../context/QuestionContext'

export const EndQuiz = ({ score }) => {
  const { setQuestions } = useContext(QuestionContext)

  const handleReset = () => {
    setQuestions([])
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <h3 className="text-center mb-3">Your Score is {score}</h3>

      <Link to="/" className="btn btn-dark w-25" onClick={handleReset}>
        Try Again
      </Link>
    </div>
  )
}