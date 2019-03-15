import React, { Component } from "react"
import { connect } from "react-redux"
import Technology from "./component/technology/Technology.jsx"

@connect(
  state => state.home
)

export default class Home extends Component {
  render () {
    return (
      <div>
        <ul>
          { this.props.technologyList.map(technology => <Technology key={ technology.key } technology={ technology } />) }
        </ul>
      </div>
    )
  }
}