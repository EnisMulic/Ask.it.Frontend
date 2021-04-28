import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

import authReducer from "./store/reducers/auth";
import loggedInUserReducer from "./store/reducers/loggedInUser";

const rootReducer = combineReducers({
    auth: authReducer,
    loggedInUser: loggedInUserReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
