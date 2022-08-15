import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import thunk from "redux-thunk";
import App from "./Components/App/App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./services/reduce";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
