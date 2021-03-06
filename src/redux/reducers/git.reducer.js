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
      content: "删除已关联的名为origin的远程库地址"
    },
    {
      title: "git remote -v",
      content: "查看远程库信息"
    },
    {
      title: "git remote show origin",
      content: "查看remote地址，远程分支，还有本地分支与之相对应关系等信息"
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
      title: "git branch -r",
      content: "查看远程库所有的分支"
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
      title: "git push origin --delete 分支",
      content: "删除远程分支"
    },
    {
      title: "git remote prune origin",
      content: "删除本地远程仓库不存在的分支"
    },
    {
      title: "git merge 分支",
      content: "合并某分支到当前分支"
    },
    {
      title: "git merge --no-ff -m \"\" 分支",
      content: "普通模式合并某分支到当前分支，推荐使用此方法合并分支"
    },
    {
      title: "git stash",
      content: "将所有未提交的修改内容（包括工作区和暂存区）储藏起来，并将本地库回退到上个版本"
    },
    {
      title: "git stash list",
      content: "查看储藏的stash列表"
    },
    {
      title: "git stash apply",
      content: "恢复储藏的stash"
    },
    {
      title: "git stash drop",
      content: "删除储藏的stash"
    },
    {
      title: "git stash pop",
      content: "恢复并删除储藏的stash"
    },
    {
      title: "git branch --set-upstream-to 分支 origin/分支",
      content: "创建本地分支和远程分支的链接关系"
    },
    {
      title: "git tag 标签 [commit_id]",
      content: "创建新的标签，默认打在最新提交的commit上"
    },
    {
      title: "git tag",
      content: "查看所有标签"
    },
    {
      title: "git show 标签",
      content: "查看标签信息"
    },
    {
      title: "git tag -a 标签 -m \"\" [commit_id]",
      content: "创建带有说明的标签"
    },
    {
      title: "git tag -d 标签",
      content: "删除标签"
    },
    {
      title: "git push origin 标签",
      content: "推送标签到远程库"
    },
    {
      title: "git push origin --tags",
      content: "推送全部未推送过的标签到远程库"
    },
    {
      title: "git push origin :refs/tags/标签",
      content: "删除远程标签"
    },
    {
      title: "git branch -m 旧分支 新分支",
      content: "重命名分支名"
    },
    {
      title: "git rebase -i (,]",
      content: "编辑commit，前开后闭"
    }
  ]
}

export const git = (state = initialState, action) => {
  switch (action.type) {
    default: 
      return state
  }
}