import React from 'react'
import { Link } from 'react-router-dom'

export const Welcome = () => {
  return (
    <div className="col-auto">
      <div className="card">
        <div className="card-header bg-primary text-light text-center">
          <span className="h3">Welcome to Quiz</span>
        </div>
        <div className="card-body d-flex flex-column justify-content-center align-items-center">
          <h5 className="card-title">
            This is a quiz application built using ReactJS and Bootstrat 5.
          </h5>
          <p className="card-text">
            It will dynamically load the question/answers pair and upload them
            into the components.
          </p>
          <Link to="/config" className="btn btn-dark">
            Config the Quiz
          </Link>
        </div>
      </div>
    </div>
  )
}
