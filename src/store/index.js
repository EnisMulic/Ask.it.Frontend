import { createStore, applyMiddleware, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import authReducer from "./reducers/auth";
import loggedInUserReducer from "./reducers/loggedInUser";
import latestQuestionsReducer from "./reducers/latestQuestions";
import hotQuestionsReducer from "./reducers/hotQuestions";
import topUsersReducer from "./reducers/topUsers";
import usersQuestionsReducer from "./reducers/usersQuestions";

const rootReducer = combineReducers({
    auth: authReducer,
    loggedInUser: loggedInUserReducer,
    latestQuestions: latestQuestionsReducer,
    hotQuestions: hotQuestionsReducer,
    topUsers: topUsersReducer,
    usersQuestions: usersQuestionsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

let persistor = persistStore(store);

export { store, persistor };
