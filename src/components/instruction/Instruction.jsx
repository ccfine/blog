import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import styles from "./instruction.css"

export default class Instruction extends PureComponent {
  static propTypes = {
    instructionList: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]).isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    }))
  }

  render () {
    return (
      <ul>
        {
          this.props.instructionList.map(instruction => (
            <li key={ instruction.key } className={ styles.container }>
              <h2>{ instruction.title }</h2>
              <p className={ styles.content }>{ instruction.content }</p>
            </li>
          ))
        }
      </ul>
    )
  }
}