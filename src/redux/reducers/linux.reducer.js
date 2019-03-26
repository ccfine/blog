const initialState = {
  instructionList: [
    {
      title: "cd",
      content: "切换目录"
    },
    {
      title: "cd ~",
      content: "切换到用户目录"
    },
    {
      title: "cd ..",
      content: "切换到上级目录"
    },
    {
      title: "cd -",
      content: "切换到之前的目录"
    },
    {
      title: "mkdir 目录",
      content: "创建目录"
    },
    {
      title: "mkdir -p 目录/目录",
      content: "递归创建目录"
    },
    {
      title: "touch 文件",
      content: "创建文件"
    },
    {
      title: "rm 文件",
      content: "删除文件"
    },
    {
      title: "rm -r 目录",
      content: "删除目录"
    },
    {
      title: "rm -rf 文件|目录",
      content: "强制删除文件或目录"
    },
    {
      title: "ls",
      content: "列出该目录下的内容（文件、目录）"
    },
    {
      title: "ls -a",
      content: "列出该目录下所有的内容（包括以.开头的隐藏内容）"
    },
    {
      title: "ls -l  |  ll",
      content: "列出该目录下的内容的详情（除文件名称外，亦将文件型态、权限、拥有者、文件大小等资讯详细列出）"
    },
    {
      title: "cp 源文件 目标",
      content: "将源文件复制到目标路径下"
    },
    {
      title: "cp -r 源目录 目标",
      content: "将源目录复制到目标路径下"
    },
    {
      title: "mv 源文件/源目录 目标",
      content: "将源文件或源目录移动到目标路径下，可做文件或目录重命名的操作"
    },
    {
      title: "shutdown -h now | poweroff | halt | init 0",
      content: "关机"
    },
    {
      title: "shutdown -r now | reboot | init 6",
      content: "重启"
    },
    {
      title: "shutdown -c",
      content: "取消关机或重启"
    }
  ]
}

export const linux = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}