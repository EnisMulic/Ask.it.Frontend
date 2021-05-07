import * as auth from "./auth";
import * as me from "./me";

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
        default:
            return state;
    }
};

export default reducer;
