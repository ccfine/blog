import React, { Component } from "react"
import { connect } from "react-redux"
import { Instruction } from "components"

@connect(
  state => state.npm
)

export default class Npm extends Component {
  render () {
    return (
      <div>
        <h1>Npm常用指令</h1>
        <Instruction instructionList={ this.props.instructionList } />
        <h1>yarn与npm</h1>
        <table border="1">
          <thead>
            <tr>
              <th>yarn</th>
              <th>npm</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>yarn</td>
              <td>npm install</td>
            </tr>
            <tr>
              <td>yarn global add</td>
              <td>npm install -g</td>
            </tr>
            <tr>
              <td>yarn add</td>
              <td>npm install --save</td>
            </tr>
            <tr>
              <td>yarn add --dev</td>
              <td>npm install --save-dev</td>
            </tr>
            <tr>
              <td>yarn remove</td>
              <td>npm uninstall --save(-dev)</td>
            </tr>
            <tr>
              <td>yarn run</td>
              <td>npm run</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}