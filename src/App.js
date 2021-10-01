// Dependencies
import React from 'react'

// Router
import { AppRouter } from './Routers/AppRouter'

// Context
import QuestionProvider from './context/Question'

// Styles
import './index.css'

export const App = () => {
  return (
    <QuestionProvider>
      <AppRouter />
    </QuestionProvider>
  )
}
