import React from 'react'
import { QuizItem } from './QuizItem'
import { uid } from 'uid'

export const QuizList = ({
  showAnswers,
  handleAnswer,
  handleNextQuestion,
  data: { question, correct_answer, answers },
  questionNumber,
}) => {
  return (
    <div className="card-text text-center">
      <span className="h5">{`${questionNumber}. `}</span>
      <span
        className="h5"
        dangerouslySetInnerHTML={{ __html: question }}
      ></span>
      {answers.map((answer) => (
        <QuizItem
          showAnswers={showAnswers}
          answer={answer}
          correct_answer={correct_answer}
          handleAnswer={handleAnswer}
          key={uid()}
        />
      ))}

      <div className="row mt-3">
        <div className="col">
          {showAnswers ? (
            <button className="btn btn-dark w-100" onClick={handleNextQuestion}>
              Next Question
            </button>
          ) : (
            <button type="button" className="btn btn-dark w-100" disabled>
              Please select an answer...
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
