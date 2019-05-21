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
    },
    {
      title: "命令 > 文件",
      content: "以覆盖的方式，把命令的正确输出输出到指定的文件或设备当中"
    },
    {
      title: "命令 >> 文件",
      content: "以追加的方式，把命令的正确输出输出到指定的文件或设备当中"
    },
    {
      title: "错误命令 2> 文件",
      content: "以覆盖的方式，把命令的错误输出输出到指定的文件或设备当中"
    },
    {
      title: "错误命令 2>> 文件",
      content: "以追加的方式，把命令的错误输出输出到指定的文件或设备当中"
    },
    {
      title: "命令 > 文件 2>&1",
      content: "以覆盖的方式，把正确输出和错误输出都保存到同一个文件当中"
    },
    {
      title: "命令 >> 文件 2>&1",
      content: "以追加的方式，把正确输出和错误输出都保存到同一个文件当中"
    },
    {
      title: "命令 &> 文件",
      content: "以覆盖的方式，把正确输出和错误输出都保存到同一个文件当中"
    },
    {
      title: "命令 &>> 文件",
      content: "以追加的方式，把正确输出和错误输出都保存到同一个文件当中"
    },
    {
      title: "命令>>文件1 2>>文件2",
      content: "把正确的输出追加到文件1，把错误的输出追加到文件2"
    },
    {
      title: "zip 压缩文件名 源文件",
      content: ".zip格式压缩文件"
    },
    {
      title: "zip -r 压缩文件名 源目录",
      content: ".zip格式压缩目录"
    },
    {
      title: "unzip 压缩文件",
      content: "解压缩.zip文件"
    },
    {
      title: "tar -zcvf 压缩包名.tar.gz 源文件",
      content: "压缩为.tar.gz格式"
    },
    {
      title: "tar -zxvf 压缩包名.tar.gz",
      content: "解压缩.tar.gz格式"
    },
    {
      title: "tar -jcvf 压缩包名.tar.bz2 源文件",
      content: "压缩为.tar.bz2格式"
    },
    {
      title: "tar -jxvf 压缩包名.tar.bz2",
      content: "解压缩.tar.bz2格式"
    },
    {
      title: "df -h",
      content: "查看硬盘情况"
    },
    {
      title: "locate 文件名",
      content: "在后台数据库中按文件名搜索"
    },
    {
      title: "updatedb",
      content: "更新数据库"
    },
    {
      title: "grep [-i] [-v] 字符串 文件名",
      content: "在文件当中匹配符合条件的字符串，-i：忽略大小写，-v：排除指定字符串"
    },
    {
      title: "history",
      content: "查看历史命令，可使用\"!n\"重复执行第n条命令"
    },
    {
      title: "history -c",
      content: "清空历史命令"
    },
    {
      title: "history -w",
      content: "把缓存中的历史命令写入历史命令保存文件~/.bash_history"
    },
    {
      title: "ps -ef | grep",
      content: "查询进程"
    },
    {
      title: "kill -9 [进程号]",
      content: "结束进程"
    },
    {
      title: "cat 文件",
      content: "查看文件内容"
    },
    {
      title: "man 指令",
      content: "查看指令的使用说明"
    },
    {
      title: "指令 --help",
      content: "查看指令的使用说明"
    },
    {
      title: "help 指令",
      content: "查看指令的使用说明"
    },
    {
      title: "date",
      content: "显示系统的日期与时间"
    },
    {
      title: "pwd",
      content: "查看当前工作目录"
    },
    {
      title: "who [-H]",
      content: "查看当前登录系统的用户，-H：显示标题栏"
    },
    {
      title: "last",
      content: "查看用户历史登录信息"
    },
    {
      title: "lastlog",
      content: "查看所有用户登录的情况"
    },
    {
      title: "chmod (421)(421)(421) 文件",
      content: "设置文件的权限"
    },
    {
      title: "logout",
      content: "退出登录的系统"
    },
    {
      title: "wc 文件",
      content: "计算文件的行数、字数、字节数"
    },
    {
      title: "scp local_file remote_username@remote_ip:remote_folder",
      content: "将本地文件上传到远程服务器指定目录"
    },
    {
      title: "scp local_file remote_username@remote_ip:remote_file",
      content: "将本地文件上传到远程服务器指定目录，并另取文件名"
    },
    {
      title: "scp -r local_folder remote_username@remote_ip:remote_folder",
      content: "将本地文件夹上传到远程服务器指定目录"
    }
  ]
}

export const linux = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}