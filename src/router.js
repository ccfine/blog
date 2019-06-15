import Loadable from "react-loadable"
import { Loading } from "components"

const Home = Loadable({
  loader: () => import("pages/home/Home.jsx"),
  loading: Loading
})

const Git = Loadable({
  loader: () => import("pages/git/Git.jsx"),
  loading: Loading
})

const Linux = Loadable({
  loader: () => import("pages/linux/Linux.jsx"),
  loading: Loading
})

const Vim = Loadable({
  loader: () => import("pages/vim/Vim.jsx"),
  loading: Loading
})

const Nodejs = Loadable({
  loader: () => import("pages/nodejs/Nodejs.jsx"),
  loading: Loading
})

const Npm = Loadable({
  loader: () => import("pages/npm/Npm.jsx"),
  loading: Loading
})

const Html = Loadable({
  loader: () => import("pages/html/Html.jsx"),
  loading: Loading
})

const Css = Loadable({
  loader: () => import("pages/css/Css.jsx"),
  loading: Loading
})

export {
  Home,
  Git,
  Linux,
  Vim,
  Nodejs,
  Npm,
  Html,
  Css
}