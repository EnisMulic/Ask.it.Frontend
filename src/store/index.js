import { createStore, applyMiddleware, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import authReducer from "./reducers/auth";
import loggedInUserReducer from "./reducers/loggedInUser";
import latestQuestionsReducer from "./reducers/latestQuestions";
import hotQuestionsReducer from "./reducers/hotQuestions";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["loggedInUser"],
};

const rootReducer = combineReducers({
    auth: authReducer,
    loggedInUser: loggedInUserReducer,
    latestQuestions: latestQuestionsReducer,
    hotQuestions: hotQuestionsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));

let persistor = persistStore(store);

export { store, persistor };
