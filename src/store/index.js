import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

import user from "./user/reducer";
import users from "./users/reducer";
import questions from "./questions/reducer";

import { saveState, loadState } from "./localStorage";

const rootReducer = combineReducers({
    questions,
    user,
    users,
});

const composeEnhancers = process.env.NODE_ENV === "development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const initialState = {
    user: null,
    error: null,
    loading: false,
};

const persistedState = loadState(initialState);

const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
    saveState({
        user: store.getState().user,
    });
});

export { store };
