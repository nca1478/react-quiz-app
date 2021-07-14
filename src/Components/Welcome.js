import React from 'react'
import { Link } from 'react-router-dom'

export const Welcome = () => {
  return (
    <div className="col-sm-9 col-md-9 col-lg-6">
      <div className="card">
        <div className="card-header bg-primary text-light text-center">
          <span className="h3">Welcome to Quiz</span>
        </div>
        <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
          <h5 className="card-title">
            This is a quiz application built using ReactJS/Bootstrat 5.
          </h5>
          <p className="card-text">
            You can configure the quiz indicating the number of questions,
            categories, difficulty and the type of questions. It will
            dynamically load the question/answers pair into the react
            components. Have fun...
          </p>
          <Link to="/config" className="btn btn-dark">
            Config the Quiz
          </Link>
        </div>
      </div>
    </div>
  )
}
