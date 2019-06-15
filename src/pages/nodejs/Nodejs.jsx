import React, { Component } from "react";

export default class Nodejs extends Component {
  render () {
    return (
      <div>
        <h1>windows环境下安装nodejs</h1>
        <div>
          推荐使用nvm下载并管理nodejs版本，<a href="http://download.ccfine24.com/download/nvm-setup" title="点击下载nvm">下载地址</a>
        </div>
        <h2>安装步骤：</h2>
        <ul>
          <li>1、下载安装nvm</li>
          <li>
            2、下载并使用nodejs
            <ul>
              <li>nvm install nodejs版本号（下载指定版本的nodejs） 或 nvm install latest（下载最新版本的nodejs）</li>
              <li>nvm use nodejs版本号（使用已下载的指定版本的nodejs）</li>
            </ul>
          </li>
          <li>3、配置nodejs</li>
        </ul>
      </div>
    )
  }
}