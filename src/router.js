import Loadable from "react-loadable"
import { Loading } from "components"

const Home = Loadable({
  loader: () => import("pages/home/Home"),
  loading: Loading
})

const Git = Loadable({
  loader: () => import("pages/git/Git"),
  loading: Loading
})

const Linux = Loadable({
  loader: () => import("pages/linux/Linux"),
  loading: Loading
})

const Vim = Loadable({
  loader: () => import("pages/vim/Vim"),
  loading: Loading
})

const Nodejs = Loadable({
  loader: () => import("pages/nodejs/Nodejs"),
  loading: Loading
})

const Npm = Loadable({
  loader: () => import("pages/npm/Npm"),
  loading: Loading
})

const Html = Loadable({
  loader: () => import("pages/html/Html"),
  loading: Loading
})

const Css = Loadable({
  loader: () => import("pages/css/Css"),
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