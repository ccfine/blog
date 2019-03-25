const initialState = {
  instructionList: [
    {
      title: "git config --global user.name \"用户名\"",
      content: "设置全局git仓库用户名（一般指github、gitlab、gitee等git服务器的注册用户名）"
    },
    {
      title: "git config --global user.email \"邮箱\"",
      content: "设置全局git仓库邮箱（一般指github、gitlab、gitee等git服务器的注册邮箱）"
    },
    {
      title: "git config --local user.name \"用户名\"",
      content: "设置本地git仓库用户名（一般指github、gitlab、gitee等git服务器的注册用户名）"
    },
    {
      title: "git config --local user.email \"邮箱\"",
      content: "设置本地git仓库邮箱（一般指github、gitlab、gitee等git服务器的注册邮箱）"
    },
    {
      title: "git status [文件]",
      content: "查看git跟踪的文件的状态"
    },
    {
      title: "git diff [文件]",
      content: "对比git跟踪的文件修改前后的具体变化"
    },
    {
      title: "git add .|文件",
      content: "将文件从工作区提交至暂存区"
    },
    {
      title: "git commit -m \"提交说明\"",
      content: "将文件从暂存区提交至本地库，必须加上提交说明"
    },
    {
      title: "git log --oneline --graph",
      content: "查看提交历史"
    },
    {
      title: "git reflog",
      content: "查看命令历史"
    },
    {
      title: "git reset --hard HEAD^|HEAD~|commit_id",
      content: "本地库版本回退"
    },
    {
      title: "git checkout -- .|文件",
      content: "撤销工作区的修改"
    },
    {
      title: "git reset HEAD .|文件",
      content: "撤销暂存区的修改，重新放回工作区"
    },
    {
      title: "git rm 文件",
      content: "删除文件，当删除了工作区的文件，同时也要删除本地库相应的文件"
    }
  ]
}

export const git = (state = initialState, action) => {
  switch (action.type) {
    default: 
      return state
  }
}