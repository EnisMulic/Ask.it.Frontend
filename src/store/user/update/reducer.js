import updateObject from "../../../utils/updateObject";

export const updateUserStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true,
    });
};

export const updateUserSuccess = (state, action) => {
    return updateObject(state, {
        me: updateObject(state.me, {
            firstName: action.firstName,
            lastName: action.lastName,
            email: action.email,
        }),
        error: null,
        loading: false,
    });
};

export const updateUserFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};
