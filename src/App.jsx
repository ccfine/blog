import React, { Component } from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import Home from "pages/home/Home.jsx"

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      hasError: false
    }
  }

  componentDidCatch () {
    this.setState({
      hasError: true
    })
  }

  render () {
    return this.state.hasError? (
      <div>出错啦。。。</div>
    ): (
      <BrowserRouter>
        <Switch>
          <Route path="/home" exact component={ Home } />
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
    )
  }
}