import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { persistStore } from "redux-persist"
import reducer from "./reducer"

export let store

if (process.env.NODE_ENV === "development") {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
} else if (process.env.NODE_ENV === "production") {
  store = createStore(reducer, applyMiddleware(thunk))
}

export const persistor = persistStore(store)