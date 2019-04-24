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
      key: "npm",
      icon: "&#xf1fe;",
      title: "Npm",
      path: "/npm"
    }
  ] 
}

export const home = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}