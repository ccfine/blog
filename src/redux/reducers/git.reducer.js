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
    },
    {
      title: "git clone url",
      content: "将远程库克隆到本地"
    },
    {
      title: "git remote add origin url",
      content: "关联本地库与远程库，并将远程库命名为origin（默认远程库名为origin），一个本地库可关联多个远程库"
    },
    {
      title: "git remote rm origin",
      content: "删除已关联的名为origin的远程库"
    },
    {
      title: "git remote -v",
      content: "查看远程库信息"
    },
    {
      title: "git push [-u] origin 分支",
      content: "将本地库分支的内容推送到远程库相应到分支，一般为master分支，第一次推送时加上-u"
    },
    {
      title: "git branch",
      content: "查看本地库所有的分支"
    },
    {
      title: "git branch -a",
      content: "查看本地库以及远程库所有的分支"
    },
    {
      title: "git branch 分支 当前分支",
      content: "基于当前分支创建新的分支"
    },
    {
      title: "git branch 分支 origin/分支",
      content: "基于远程库的分支创建新的分支"
    },
    {
      title: "git checkout 分支",
      content: "切换分支"
    },
    {
      title: "git checkout -b 分支 当前分支|origin/分支",
      content: "基于当前分支或远程库的分支创建新的分支，并切换到该分支"
    },
    {
      title: "git branch -d 分支",
      content: "删除分支"
    },
    {
      title: "git branch -D 分支",
      content: "强制删除分支，丢弃一个没有被合并过的分支"
    },
    {
      title: "git merge 分支",
      content: "合并某分支到当前分支"
    },
    {
      title: "git merge --no-ff -m \"\" 分支",
      content: "普通模式合并某分支到当前分支，推荐使用此方法合并分支"
    }
  ]
}

export const git = (state = initialState, action) => {
  switch (action.type) {
    default: 
      return state
  }
}