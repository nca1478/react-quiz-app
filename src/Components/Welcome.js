import React from 'react'
import { Link } from 'react-router-dom'

export const Welcome = () => {
  return (
    <div className="col-sm-9 col-md-9 col-lg-6">
      <div className="card">
        <div className="card-header bg-primary text-light text-center">
          <span className="h3">Bienvenidos a React Quiz App</span>
        </div>
        <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
          <h5 className="card-title">
            Esta es un aplicación quiz usando ReactJS/Bootstrat 5.
          </h5>
          <p className="card-text">
            Puedes configurar el quiz indicando el número de preguntas,
            categorías, dificultad y el tipo de preguntas. Cargará dinámicamente
            el par de preguntas/respuestas. Que te diviertas...
          </p>
          <Link to="/config" className="btn btn-dark">
            Configurar el Quiz
          </Link>
        </div>
        <div className="card-footer text-center bg-primary text-white fw-bold">
          <span>
            <a
              href="https://nelsoncadenas.netlify.app/"
              rel="noreferrer"
              className="text-white text-decoration-none"
              target="_blank"
            >
              Copyright &copy; 2022 <br />
              Desarrollado por: Nelson Cadenas
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}
