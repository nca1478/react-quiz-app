import React from 'react'

export const Questionaire = ({
  showAnswers,
  handleAnswer,
  handleNextQuestion,
  data: { question, correct_answer, answers },
}) => {
  return (
    <div className="card-text text-center">
      <span
        className="h5"
        dangerouslySetInnerHTML={{ __html: question }}
      ></span>
      {answers.map((answer, index) => {
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
                key={index}
              ></button>
            </div>
          </div>
        )
      })}

      <div className="row mt-3">
        <div className="col">
          <button
            className="btn btn-dark"
            onClick={handleNextQuestion}
            style={
              showAnswers ? { visibility: 'visible' } : { visibility: 'hidden' }
            }
          >
            Next Question
          </button>
        </div>
      </div>
    </div>
  )
}
