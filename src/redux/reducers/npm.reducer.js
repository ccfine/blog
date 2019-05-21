const initialState = {
  instructionList: [
    {
      title: "npm init",
      content: "初始化为node包，生成并配置package.json"
    },
    {
      title: "npm install | i [-d]",
      content: "根据package.json的dependencies和devDependencies，安装相应的依赖，i为install的简写，-d：显示安装过程"
    },
    {
      title: "npm install --production",
      content: "只安装package.json中dependencies配置下的依赖，在生产环境下不需要开发依赖"
    },
    {
      title: "npm install 依赖 -g",
      content: "将依赖安装在全局目录，不加-g则会将依赖安装在当前目录的node_modules目录下"
    },
    {
      title: "npm install 依赖 --save | -S",
      content: "安装依赖，并将依赖写在package.json的dependencies配置下，在最新npm版本中，安装依赖时会默认save"
    },
    {
      title: "npm install 依赖 --save-dev | -D",
      content: "安装依赖，并将依赖写在package.json的devDependencies配置下"
    },
    {
      title: "npm uninstall 依赖 [-g]",
      content: "删除node_modules目录下的依赖，同时也会删除package.json中dependencies或devDependencies下的配置，-g：删除全局安装的依赖"
    },
    {
      title: "npm update 依赖",
      content: "更新依赖版本"
    }
  ]
}

export const npm = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}