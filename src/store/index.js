import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

import authReducer from "./reducers/auth";
import loggedInUserReducer from "./reducers/loggedInUser";
import latestQuestionsReducer from "./reducers/latestQuestions";
import hotQuestionsReducer from "./reducers/hotQuestions";
import topUsersReducer from "./reducers/topUsers";
import usersQuestionsReducer from "./reducers/usersQuestions";

import { saveState, loadState } from "./localStorage";

const rootReducer = combineReducers({
    auth: authReducer,
    loggedInUser: loggedInUserReducer,
    latestQuestions: latestQuestionsReducer,
    hotQuestions: hotQuestionsReducer,
    topUsers: topUsersReducer,
    usersQuestions: usersQuestionsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

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
        loggedInUser: store.getState().loggedInUser,
    });
});

export { store };
