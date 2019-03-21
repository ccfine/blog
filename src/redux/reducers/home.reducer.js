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
    }
  ] 
}

export const home = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}