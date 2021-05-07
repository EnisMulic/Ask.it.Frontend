import updateObject from "../../../utils/updateObject";
import * as routeConstants from "../../../constants/routes";

export const authStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true,
        authRedirectPath: routeConstants.HOME_ROUTE,
    });
};

export const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.token,
        refreshToken: action.refreshToken,
        error: null,
        loading: false,
        authRedirectPath: routeConstants.HOME_ROUTE,
    });
};

export const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};

export const logout = (state, action) => {
    return updateObject(state, { token: null });
};

export const setAuthRedirectPath = (state, action) => {
    return updateObject(state, { authRedirectPath: action.path });
};
