import React, { Component } from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import * as router from "./router"

const { Home, Git, Linux, Vim, Nodejs, Npm, Html, Css } = router

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
      <div>出错啦！！！</div>
    ): (
      <BrowserRouter>
        <Switch>
          <Route path="/home" exact component={ Home } />
          <Route path="/git" exact component={ Git } />
          <Route path="/linux" exact component={ Linux } />
          <Route path="/vim" exact component={ Vim } />
          <Route path="/nodejs" exact component={ Nodejs } />
          <Route path="/npm" exact component={ Npm } />
          <Route path="/html" exact component={ Html } />
          <Route path="/css" exact component={ Css } />
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
    )
  }
}