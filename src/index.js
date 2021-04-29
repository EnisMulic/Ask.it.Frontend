import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

import authReducer from "./store/reducers/auth";
import loggedInUserReducer from "./store/reducers/loggedInUser";
import latestQuestionsReducer from "./store/reducers/latestQuestions";

const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
    auth: authReducer,
    loggedInUser: loggedInUserReducer,
    latestQuestions: latestQuestionsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));

let persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </BrowserRouter>
        </PersistGate>
    </Provider>,
    document.getElementById("root")
);
