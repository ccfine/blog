import React, { Fragment } from "react"
import styles from "./loading.css"

export const Loading = props => {
  const { error, pastDelay } = props

  let view

  if (error) {
    view = <span>加载页面出错！！！</span>
  } else if (pastDelay) {
    view = (
      <Fragment>
        <i className={ styles.loading }>&#xe61c;</i>
        <span>loading</span>
      </Fragment> 
    )
  } else {
    view = null
  }

  return <div className={ styles.container }>{ view }</div>
}