import React from 'react'

export const QuizItem = ({
  showAnswers,
  answer,
  correct_answer,
  handleAnswer,
}) => {
  const btnColor = showAnswers
    ? answer === correct_answer
      ? 'btn-success'
      : 'btn-outline-danger'
    : 'btn-outline-primary'

  return (
    <div className="row mt-3">
      <div className="col">
        <button
          className={`btn ${btnColor} w-100`}
          dangerouslySetInnerHTML={{ __html: answer }}
          onClick={() => handleAnswer(answer)}
        ></button>
      </div>
    </div>
  )
}
