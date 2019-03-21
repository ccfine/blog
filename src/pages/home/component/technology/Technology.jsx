import React, { PureComponent } from "react"
import { withRouter } from "react-router-dom"
import PropTypes from "prop-types"
import styles from "./technology.css"

@withRouter

export default class Technology extends PureComponent {
  static propTypes = {
    technology: PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired
    })
  }

  handleEnterDetail = () => {
    const { history, technology: { path } } = this.props
    history.push(path)
  }

  render () {
    const { icon, title } = this.props.technology

    return (
      <li title={ `点击进入${ title }详情页` } onClick={ this.handleEnterDetail }>
        <i dangerouslySetInnerHTML={{ __html: icon }} className={ styles.icon } />
        <span>{ title }</span>
      </li>
    )
  }
}