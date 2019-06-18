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
          <li>
            3、配置nodejs
            <ul>
              <li>npm config set cache "D:\software\NodeJs\npm_config\npm_cache"（设置npm依赖包的缓存目录，不管是全局安装的包还是非全局安装的包，npm都会将包下载缓存在此目录下，并会对不同版本进行区分，下次安装同样的包时可以提升速度）</li>
              <li>npm config set prefix "D:\software\NodeJs\npm_config\npm_global"（设置npm依赖包的全局安装路径）</li>
              <li>npm config set registry https://registry.npm.taobao.org（将npm镜像源设置为淘宝镜像源，推荐使用nrm模块包设置管理镜像源）</li>
              <li>新增系统变量NPM_GLOBAL("D:\software\NodeJs\npm_config\npm_global")，并添加到Path系统变量（设置全局指令路径）</li>
              <li>新增系统变量NODE_PATH("D:\software\NodeJS\npm_config\npm_global\node_modules")（在加载模块时，nodejs会从当前目录递归查询到根目录，若还找不到，则最后会在此变量配置的目录下继续查找）</li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}