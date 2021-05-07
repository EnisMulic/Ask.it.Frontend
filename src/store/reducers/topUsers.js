import * as actionTypes from "../actions/actionTypes";
import updateObject from "../../utils/updateObject";

const initialState = {
    users: [],
    error: null,
    loading: false,
    pageNumber: null,
    pageSize: null,
    nextPage: null,
    previousPage: null,
    firstPage: null,
    lastPage: null,
};

const fetchTopUsersStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true,
    });
};

const fetchTopUsersSuccess = (state, action) => {
    var users = [...state.users];

    if (action.payload.pageNumber !== state.pageNumber) {
        users = [...users, ...action.payload.data];
    } else {
        users = [...action.payload.Data];
    }

    return updateObject(state, {
        users: users,
        pageNumber: action.payload.pageNumber,
        pageSize: action.payload.pageSize,
        nextPage: action.payload.nextPage,
        previousPage: action.payload.previousPage,
        firstPage: action.payload.firstPage,
        lastPage: action.payload.lastPage,
        error: null,
        loading: false,
    });
};

const fetchTopUsersFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TOP_USERS_START:
            return fetchTopUsersStart(state, action);
        case actionTypes.FETCH_TOP_USERS_SUCCESS:
            return fetchTopUsersSuccess(state, action);
        case actionTypes.FETCH_TOP_USERS_FAIL:
            return fetchTopUsersFail(state, action);
        default:
            return state;
    }
};

export default reducer;
