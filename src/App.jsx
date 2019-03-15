import React, { Component } from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import Loadable from "react-loadable"
import { Loading } from "components/loading/Loading.jsx"

const Home = Loadable({
  loader: () => import("pages/home/Home.jsx"),
  loading: Loading
})

const Git = Loadable({
  loader: () => import("pages/git/Git.jsx"),
  loading: Loading
})

const Linux = Loadable({
  loader: () => import("pages/linux/Linux.jsx"),
  loading: Loading
})

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
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
    )
  }
}