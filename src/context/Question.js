// Dependencies
import React, { useState } from 'react'

// Context
export const QuestionContext = React.createContext()

const QuestionProvider = (props) => {
  const [questions, setQuestions] = useState([])

  return (
    <QuestionContext.Provider
      value={{
        questions,
        setQuestions,
      }}
    >
      <>{props.children}</>
    </QuestionContext.Provider>
  )
}

export default QuestionProvider
