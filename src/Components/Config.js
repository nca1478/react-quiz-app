import React, { useContext, useState } from 'react'
import Select from 'react-select'
import { QuestionContext } from '../context/QuestionContext'
import { numQuestions, categories, difficulties, types } from '../data/options'
import getApiUrl from '../config/api'

export const Config = ({ history }) => {
  const { setQuestions } = useContext(QuestionContext)
  const [numQuestion, setNumQuestion] = useState({})
  const [category, setCategory] = useState({})
  const [difficulty, setDifficulty] = useState({})
  const [type, setType] = useState({})

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

    const API_URL = getApiUrl(
      numQuestion.value,
      category.value,
      difficulty.value,
      type.value
    )

    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const listQuestions = data.results.map((question) => ({
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers,
          ].sort(() => Math.random() - 0.5),
        }))

        setQuestions(listQuestions)
        history.replace('/quiz')
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
