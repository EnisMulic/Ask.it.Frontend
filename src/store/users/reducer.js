import * as top from "./topUsers";

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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case top.FETCH_TOP_USERS_START:
            return top.fetchTopUsersStart(state, action);
        case top.FETCH_TOP_USERS_SUCCESS:
            return top.fetchTopUsersSuccess(state, action);
        case top.FETCH_TOP_USERS_FAIL:
            return top.fetchTopUsersFail(state, action);
        default:
            return state;
    }
};

export default reducer;
