const initialState = {
  instructionList: [
    {
      key: "1",
      title: "git config --global user.name \"用户名\"",
      content: "设置全局git仓库用户名（一般指github、gitlab、gitee等git服务器的注册用户名）"
    },
    {
      key: "2",
      title: "git config --global user.email \"邮箱\"",
      content: "设置全局git仓库邮箱（一般指github、gitlab、gitee等git服务器的注册邮箱）"
    },
    {
      key: "3",
      title: "git config --local user.name \"用户名\"",
      content: "设置本地git仓库用户名（一般指github、gitlab、gitee等git服务器的注册用户名）"
    },
    {
      key: "4",
      title: "git config --local user.email \"邮箱\"",
      content: "设置本地git仓库邮箱（一般指github、gitlab、gitee等git服务器的注册邮箱）"
    },
    {
      key: "5",
      title: "git status [文件]",
      content: "查看git跟踪的文件的状态"
    },
    {
      key: "6",
      title: "git diff [文件]",
      content: "对比git跟踪的文件修改前后的具体变化"
    },
    {
      key: "7",
      title: "git add .|文件",
      content: "将文件从工作区提交至暂存区"
    },
    {
      key: "8",
      title: "git commit -m \"提交说明\"",
      content: "将文件从暂存区提交至本地库，必须加上提交说明"
    }
  ]
}

export const git = (state = initialState, action) => {
  switch (action.type) {
    default: 
      return state
  }
}