import jwt_decode from "jwt-decode";

import http from "../../../http";
import * as routeConstants from "../../../constants/routes";
import * as endpointConstants from "../../../constants/endpoints";
import * as authConstants from "../../../constants/auth";
import { fetchMe, fetchMeActionReset } from "../me";

export const AUTH_START = "AUTH_START";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAIL = "AUTH_FAIL";

export const LOGOUT = "LOGOUT";

export const SET_AUTH_REDIRECT_PATH = "SET_AUTH_REDIRECT_PATH";

export const authActionStart = () => {
    return {
        type: AUTH_START,
    };
};

export const authActionSuccess = (token, refreshToken) => {
    return {
        type: AUTH_SUCCESS,
        token: token,
        refreshToken: refreshToken,
    };
};

export const authActionFail = (error) => {
    return {
        type: AUTH_FAIL,
        error: error,
    };
};

export const logoutAction = () => {
    localStorage.removeItem(authConstants.TOKEN);
    localStorage.removeItem(authConstants.EXPIRATION_TIME);
    localStorage.removeItem(authConstants.REFRESH_TOKEN);
    localStorage.removeItem(authConstants.USER_ID);
    return {
        type: LOGOUT,
    };
};

export const forceLogout = () => {
    return (dispatch) => {
        dispatch(logoutAction());
        dispatch(fetchMeActionReset());
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(logoutAction());
            dispatch(fetchMeActionReset());
        }, expirationTime * 1000);
    };
};

export const setAuthRedirectPathAction = (path) => {
    return {
        type: SET_AUTH_REDIRECT_PATH,
        path: path,
    };
};

const processToken = (dispatch, data) => {
    var token = data.token;
    var refreshToken = data.refreshToken;
    var decoded = jwt_decode(token);

    const expirationDate = new Date(
        new Date().getTime() + (decoded.exp - decoded.iat) * 1000
    );

    localStorage.setItem(authConstants.TOKEN, token);
    localStorage.setItem(authConstants.REFRESH_TOKEN, refreshToken);
    localStorage.setItem(authConstants.EXPIRATION_TIME, expirationDate);
    localStorage.setItem(authConstants.USER_ID, decoded.sub);

    dispatch(authActionSuccess(token, refreshToken));
    dispatch(setAuthRedirectPathAction(routeConstants.HOME_ROUTE));
    dispatch(
        checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
        )
    );
};

export const register = (email, password, firstName, lastName) => {
    return (dispatch) => {
        dispatch(authActionStart());
        const authData = {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
        };

        http.post(endpointConstants.REGISTER_ENDPOINT, authData)
            .then((response) => {
                processToken(dispatch, response.data.data);
                dispatch(fetchMe());
            })
            .catch((err) => {
                dispatch(authActionFail(err));
            });
    };
};

export const login = (email, password) => {
    return (dispatch) => {
        dispatch(authActionStart());
        const authData = {
            email: email,
            password: password,
        };

        http.post(endpointConstants.LOGIN_ENDPOINT, authData)
            .then((response) => {
                processToken(dispatch, response.data.data);
                dispatch(fetchMe());
            })
            .catch((err) => {
                dispatch(authActionFail(err));
            });
    };
};

export const authCheckState = () => {
    return (dispatch) => {
        const token = localStorage.getItem(authConstants.TOKEN);
        const refreshToken = localStorage.getItem(authConstants.REFRESH_TOKEN);
        if (!token && !refreshToken) {
            dispatch(logoutAction());
        } else {
            const expirationDate = new Date(
                localStorage.getItem(authConstants.EXPIRATION_TIME)
            );
            if (expirationDate <= new Date()) {
                dispatch(logoutAction());
            } else {
                dispatch(authActionSuccess(token));
                dispatch(
                    checkAuthTimeout(
                        (expirationDate.getTime() - new Date().getTime()) / 1000
                    )
                );
            }
        }
    };
};
