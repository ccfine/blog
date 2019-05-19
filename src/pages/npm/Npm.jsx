import React, { Component } from "react"
import { connect } from "react-redux"
import Instruction from "components/instruction/Instruction.jsx"

@connect(
  state => state.npm
)

export default class Npm extends Component {
  render () {
    return (
      <div>
        <h1>Npm常用指令</h1>
        <Instruction instructionList={ this.props.instructionList } />
      </div>
    )
  }
}