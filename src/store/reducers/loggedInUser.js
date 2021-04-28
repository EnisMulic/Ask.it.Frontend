import * as actionTypes from "../actions/actionTypes";
import updateObject from "../../utils/updateObject";

const initialState = {
    user: null,
    error: null,
    loading: false,
};

const fetchLoggedInUserStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true,
    });
};

const fetchLoggedInUserSuccess = (state, action) => {
    return updateObject(state, {
        user: action.user,
        error: null,
        loading: false,
    });
};

const fetchLoggedInUserFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_LOGGED_IN_USER_START:
            return fetchLoggedInUserStart(state, action);
        case actionTypes.FETCH_LOGGED_IN_USER_SUCCESS:
            return fetchLoggedInUserSuccess(state, action);
        case actionTypes.FETCH_LOGGED_IN_USER_FAIL:
            return fetchLoggedInUserFail(state, action);
        default:
            return state;
    }
};

export default reducer;
