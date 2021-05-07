import updateObject from "../../../utils/updateObject";

export const fetchMeStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true,
    });
};

export const fetchMeSuccess = (state, action) => {
    return updateObject(state, {
        me: action.user,
        error: null,
        loading: false,
    });
};

export const fetchMeFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};

export const fetchMeReset = (state, action) => {
    return {
        me: null,
        token: null,
        refreshToken: null,
        error: null,
        loading: false,
        authRedirectPath: null,
    };
};
