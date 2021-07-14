import React, { useEffect } from 'react'

export const Questionaire = ({
  handleNextQuestion,
  data: { question, correct_answer, answers },
}) => {
  useEffect(() => {
    console.log(answers)
  }, [])

  return (
    <div className="card-text text-center">
      <span
        className="h5"
        dangerouslySetInnerHTML={{ __html: question }}
      ></span>
      {answers.map((answer, index) => {
        return (
          <div className="row mt-3">
            <div className="col">
              <button
                className="btn btn-outline-primary w-100"
                dangerouslySetInnerHTML={{ __html: answer }}
                key={index}
              ></button>
            </div>
          </div>
        )
      })}
      <div className="row mt-3">
        <div className="col">
          <button className="btn btn-dark" onClick={handleNextQuestion}>
            Next Question
          </button>
        </div>
      </div>
    </div>
  )
}
