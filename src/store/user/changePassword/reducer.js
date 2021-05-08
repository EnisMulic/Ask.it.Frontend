import updateObject from "../../../utils/updateObject";

export const changePasswordStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true,
    });
};

export const changePasswordSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: false,
    });
};

export const changePasswordFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};
