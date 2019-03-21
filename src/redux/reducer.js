import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { combineReducers } from "redux"
import { home } from "reducers/home.reducer"
import { git } from "reducers/git.reducer"

export default persistReducer({
  key: "root",
  storage
}, combineReducers({
  home,
  git
}))