import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";
import { Provider } from "react-redux";
import store from "./store/store";
import "./index.scss"

render (<BrowserRouter>
    <Provider store={store}>
        <App/>
    </Provider>
</BrowserRouter>
    , document.getElementById("root"));