const initialState = {
  technologyList: [
    {
      key: "git",
      icon: "&#xe61b;",
      title: "git",
      path: "/git"
    },
    {
      key: "linux",
      icon: "&#xe765;",
      title: "linux",
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