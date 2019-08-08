# 陈景腾的博客

### 项目描述

技术分享、经验总结、心得体会

### 项目结构

```
blog
    |-- config - webpack配置
        |-- webpack.common.config.js - webpack公共配置
        |-- webpack.dev.config.js - webpack开发环境配置
	    |-- webpack.prod.config.js - webpack生产环境配置
    |-- node_modules - 依赖包
    |-- src - 源码
	    |-- assets - 静态资源
		    |-- iconfont - 阿里图标库
		    |-- favicon.ico - 网站图标
	    |-- components - 公共组件
		    |-- instruction - 指令说明组件
		    |-- loading - 加载效果组件
		|-- css - 公共css
            |-- common.css - 公共css，供css类引用
            |-- global.css - 全局css，可直接使用
            |-- iconfont.css - 阿里图标css
		|-- pages - 页面组件
            |-- css - css详情页
            |-- git - git详情页
            |-- home - 首页
            |-- html - html详情页
            |-- linux - linux详情页
            |-- nodejs - nodejs详情页
            |-- npm - npm详情页
            |-- vim - vim详情页
		|-- redux
            |-- actions - 配置action
            |-- reducers - 配置reducer
            |-- reducer.js - 配置根reducer
            |-- store.js - 配置store
		|-- App.jsx - 配置路由
		|-- index.html - html模版
		|-- index.js - 入口文件
        |-- router.js - 具体路由配置
    |-- .babelrc - 配置babel选项
    |-- .editorconfig - 配置编辑器风格
    |-- .gitignore - git忽略文件
    |-- CHANGELOG.md - 日志说明
    |-- ecosystem.config.js - 配置pm2自动部署
    |-- package.json - node说明
    |-- README.md - 项目说明
    |-- yarn.lock - 依赖包精确说明
```

### 主要技术

* webpack（开发环境、生产环境调试打包）

* react（构建ui界面）

* redux（管理数据）

* redux-thunk（redux的异步处理）

* redux-persist（redux数据持久化）

* react-redux（连接react和redux）

* react-router-dom（管理路由）

* react-loadable(组件异步加载)

* pm2（自动化部署到线上服务器）

### 项目运行

#### 安装依赖

推荐使用yarn，不推荐npm

    cd blog

    yarn

#### 开发环境

本地运行

    yarn start

打包，生成dist目录
	
    yarn run dev

#### 生产环境

打包，生成build目录

    yarn run build

### 线上地址

[http://blog.ccfine24.com](http://blog.ccfine24.com)