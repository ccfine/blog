import React, { Component } from "react"
import { connect } from "react-redux"
import { Instruction } from "components"

@connect(
  state => state.git
)

export default class Git extends Component {
  render () {
    return (
      <div>
        <h1>Git常用指令</h1>
        <Instruction instructionList={ this.props.instructionList } />
      </div>
    )
  }
}