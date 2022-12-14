import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
// import {axiosInstance} from "./config.js";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        // loading={null}
        persistor={persistor}
      >
        <BrowserRouter
          basename=          "/"

          // {axiosInstance.basename || null}
        >
          <App />
        </BrowserRouter>
        {/* <AppFirestore/> */}
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
