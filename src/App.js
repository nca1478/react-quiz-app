import React, { useEffect, useState } from 'react'
import { AppRouter } from './Routers/AppRouter'
import { QuestionContext } from './context/QuestionContext'
import './index.css'

export const App = () => {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    setQuestions([])
  }, [])

  return (
    <QuestionContext.Provider value={{ questions, setQuestions }}>
      <AppRouter />
    </QuestionContext.Provider>
  )
}
