import React, { useContext, useState } from 'react'
import Select from 'react-select'
import { ToastContainer, toast } from 'react-toastify'
import { QuestionContext } from '../context/Question'
import { numQuestions, categories, difficulties, types } from '../data/options'
import getApiUrl from '../config/api'
import 'react-toastify/dist/ReactToastify.css'

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

        if (listQuestions.length === 0) {
          toast.error('Error: Quiz no encontrado, intente nuevamente...')
        } else {
          setQuestions(listQuestions)
          history.replace('/quiz')
        }
      })
      .catch((error) => {
        console.log(error)
        toast.error('Error: No se puede crear el quiz...')
      })
  }

  return (
    <div className="col-sm-9 col-md-9 col-lg-6">
      <div className="card">
        <div className="card-header bg-primary text-light text-center">
          <span className="h3">Configurar el Quiz</span>
        </div>
        <div className="card-body">
          <div className="card-text">
            <form onSubmit={handleStart}>
              <Select
                classNamePrefix="react-select"
                className="mb-3"
                name="questions"
                placeholder="Número de preguntas..."
                onChange={(value) => handleNumQuestion(value)}
                options={numQuestions}
                defaultValue={numQuestions[0].value}
              />
              <Select
                classNamePrefix="react-select"
                className="mb-3"
                name="categories"
                placeholder="Seleccionar categoría..."
                onChange={(value) => handleCategory(value)}
                options={categories}
              />
              <Select
                classNamePrefix="react-select"
                className="mb-3"
                name="difficulties"
                placeholder="Seleccionar dificultad..."
                onChange={(value) => handleDifficulty(value)}
                options={difficulties}
              />
              <Select
                classNamePrefix="react-select"
                className="mb-3"
                name="types"
                placeholder="Seleccionar tipo..."
                onChange={(value) => handleType(value)}
                options={types}
              />

              <input
                type="submit"
                value="Comenzar Quiz"
                className="btn btn-dark btn-block w-100"
                onClick={handleStart}
              />

              <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
