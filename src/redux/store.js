import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { persistStore } from "redux-persist"
import reducer from "./reducer"

export let store

if (process.env.NODE_ENV === "development") {
  store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension? window.devToolsExtension(): f => f
  ))
} else if (process.env.NODE_ENV === "production") {
  store = createStore(reducer, applyMiddleware(thunk))
}

export const persistor = persistStore(store)