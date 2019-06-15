const initialState = {
  technologyList: [
    {
      key: "git",
      icon: "&#xe61b;",
      title: "Git",
      path: "/git"
    },
    {
      key: "linux",
      icon: "&#xe765;",
      title: "Linux",
      path: "/linux"
    },
    {
      key: "vim",
      icon: "&#xe63c;",
      title: "Vim",
      path: "/vim"
    },
    {
      key: "nodejs",
      icon: "&#xe79b;",
      title: "Nodejs",
      path: "/nodejs"
    },
    {
      key: "npm",
      icon: "&#xf1fe;",
      title: "Npm",
      path: "/npm"
    },
    {
      key: "html",
      icon: "&#xe8f7;",
      title: "Html",
      path: "/html"
    },
    {
      key: "css",
      icon: "&#xe600;",
      title: "Css",
      path: "/css"
    }
  ] 
}

export const home = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}