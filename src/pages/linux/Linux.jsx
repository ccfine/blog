import React, { Component } from "react"
import { connect } from "react-redux"
import { Instruction } from "components"

@connect(
  state => state.linux
)

export default class Linux extends Component {
  render () {
    return (
      <div>
        <h1>Linux常用指令</h1>
        <Instruction instructionList={ this.props.instructionList } />
      </div>
    )
  }
}