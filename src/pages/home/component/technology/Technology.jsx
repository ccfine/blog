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
      <li onClick={ this.handleEnterDetail } title={ `点击进入${ title }详情页` }>
        <i className={ styles.icon } dangerouslySetInnerHTML={{ __html: icon }} />
        <span>{ title }</span>
      </li>
    )
  }
}