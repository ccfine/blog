import { persistCombineReducers } from "redux-persist"
import storage from "redux-persist/es/storage"
import { combineReducers } from "redux"

export default persistCombineReducers({
  key: "root",
  storage
}, combineReducers({
  
}))