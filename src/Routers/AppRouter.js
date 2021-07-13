import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Welcome } from '../Components/Welcome'
import { Config } from '../Components/Config'
import { Quiz } from '../Components/Quiz'

export const AppRouter = () => {
  return (
    <Router>
      <div className="bg-primary">
        <div className="container bg-light vh-100">
          <div className="row justify-content-center align-items-center vh-100">
            <Switch>
              <Route exact path="/config" component={Config} />
              <Route exact path="/quiz" component={Quiz} />
              <Route path="/" component={Welcome} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  )
}
