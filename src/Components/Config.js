import React, { useState } from 'react'
import axios from '../config/axios'
import Select from 'react-select'
import { numQuestions, categories, difficulties, types } from '../data/options'

export const Config = () => {
  const [numQuestion, setNumQuestion] = useState({})
  const [category, setCategory] = useState({})
  const [difficulty, setDifficulty] = useState({})
  const [type, setType] = useState({})
  const [questions, setQuestions] = useState([])

  const handleNumQuestion = (selected) => {
    setNumQuestion(selected)
  }

  const handleCategory = (selected) => {
    setCategory(selected)
  }

  const handleDifficulty = (selected) => {
    setDifficulty(selected)
  }

  const handleType = (selected) => {
    setType(selected)
  }

  const handleStart = (e) => {
    e.preventDefault()

    axios
      .get(
        `?amount=${numQuestion.value}` +
          `&category=${category.value}` +
          `&difficulty=${difficulty.value}` +
          `&type=${type.value}`
      )
      .then(function ({ data }) {
        setQuestions(data.results)
        console.log(questions)
        // setStartTrivia(true)
        // setShowForm(false)
      })
      .catch(function (error) {
        console.log(error)
      })
      .then(function () {
        // always executed
      })
  }

  return (
    <div className="col-6">
      <div className="card">
        <div className="card-header bg-primary text-light text-center">
          <span className="h3">Config the Quiz</span>
        </div>
        <div className="card-body">
          <div className="card-text">
            <form onSubmit={handleStart}>
              <Select
                classNamePrefix="react-select"
                className="mb-2"
                name="questions"
                placeholder="Number of Questions..."
                onChange={(value) => handleNumQuestion(value)}
                options={numQuestions}
                defaultValue={numQuestions[0].value}
              />
              <Select
                classNamePrefix="react-select"
                className="mb-2"
                name="categories"
                placeholder="Select Category..."
                onChange={(value) => handleCategory(value)}
                options={categories}
              />
              <Select
                classNamePrefix="react-select"
                className="mb-2"
                name="difficulties"
                placeholder="Select Difficulty..."
                onChange={(value) => handleDifficulty(value)}
                options={difficulties}
              />
              <Select
                classNamePrefix="react-select"
                className="mb-2"
                name="types"
                placeholder="Select Type..."
                onChange={(value) => handleType(value)}
                options={types}
              />

              <input
                type="submit"
                value="Start Quiz"
                className="btn btn-dark btn-block w-100"
                onClick={handleStart}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
