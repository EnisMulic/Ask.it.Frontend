import updateObject from "../../../utils/updateObject";

export const fetchTopUsersStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true,
    });
};

export const fetchTopUsersSuccess = (state, action) => {
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

export const fetchTopUsersFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};
