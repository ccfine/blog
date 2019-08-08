import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/lib/integration/react"
import { store, persistor } from "./redux/store"
import App from "./App"
import "css/global.css"

ReactDOM.render(
  <Provider store={ store }> 
    <PersistGate persistor={ persistor } loading={ null }>
      <App />
    </PersistGate>
  </Provider>
  ,
  document.getElementById("root")
)