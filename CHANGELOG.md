# 更新日志

## [1.0.0] - 2019-01-29

### 初始化

## [1.0.1] - 2019-03-05

### 初次部署

## [1.0.2] - 2019-03-06

### 修复

* 热更新只在webpack.dev.config.js中配置babel options，生产环境文件不配置

## [1.0.3] - 2019-03-11

### 修复

* 生产环境关闭`redux`的控制台调试功能

## [1.0.4] - 2019-03-13

### 新增

* 使用`react-loadable`异步加载组件

* 使用`iconfont`矢量图标

## [1.0.5] - 2019-03-15

### 修复

* 修复`redux-persist`的用法配置错误的问题

### 优化

* 使用新的`redux`控制台调试API，替换旧的即将被移除的API

## [1.0.6] - 2019-05-21

### 优化

* webpack开发环境将SourceMap改为`cheap-module-eval-source-map`

* webpack生产环境添加SourceMap配置，值为`cheap-module-source-map`