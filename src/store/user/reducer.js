import * as auth from "./auth";
import * as me from "./me";
import * as pw from "./changePassword";
import * as update from "./update";

const initialState = {
    me: null,
    token: null,
    refreshToken: null,
    error: null,
    loading: false,
    authRedirectPath: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case auth.AUTH_START:
            return auth.authStart(state, action);
        case auth.AUTH_SUCCESS:
            return auth.authSuccess(state, action);
        case auth.AUTH_FAIL:
            return auth.authFail(state, action);
        case auth.LOGOUT:
            return auth.logout(state, action);
        case auth.SET_AUTH_REDIRECT_PATH:
            return auth.setAuthRedirectPath(state, action);
        case me.FETCH_ME_START:
            return me.fetchMeStart(state, action);
        case me.FETCH_ME_SUCCESS:
            return me.fetchMeSuccess(state, action);
        case me.FETCH_ME_FAIL:
            return me.fetchMeFail(state, action);
        case me.FETCH_ME_RESET:
            return me.fetchMeReset(state, action);
        case pw.CHANGE_PASSWORD_START:
            return pw.changePasswordStart(state, action);
        case pw.CHANGE_PASSWORD_SUCCESS:
            return pw.changePasswordSuccess(state, action);
        case pw.CHANGE_PASSWORD_FAIL:
            return pw.changePasswordFail(state, action);
        case update.UPDATE_USER_START:
            return update.updateUserStart(state, action);
        case update.UPDATE_USER_SUCCESS:
            return update.updateUserSuccess(state, action);
        case update.UPDATE_USER_FAIL:
            return update.updateUserFail(state, action);
        default:
            return state;
    }
};

export default reducer;
