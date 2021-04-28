import jwt_decode from "jwt-decode";

import * as actionTypes from "./actionTypes";
import http from "../../http";
import * as routeConstants from "../../constants/routes";
import * as endpointConstants from "../../constants/endpoints";
import * as authConstants from "../../constants/auth";
import { fetchLoggedInUser } from "./loggedInUser";

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
    };
};

export const authSuccess = (token, refreshToken) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        refreshToken: refreshToken,
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error,
    };
};

export const logout = () => {
    localStorage.removeItem(authConstants.TOKEN);
    localStorage.removeItem(authConstants.EXPIRATION_TIME);
    localStorage.removeItem(authConstants.REFRESH_TOKEN);
    return {
        type: actionTypes.LOGOUT,
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path,
    };
};

const processToken = (dispatch, data) => {
    var token = data.Token;
    var refreshToken = data.RefreshToken;
    var decoded = jwt_decode(token);

    const expirationDate = new Date(
        new Date().getTime() + (decoded.exp - decoded.iat) * 1000
    );

    localStorage.setItem(authConstants.TOKEN, token);
    localStorage.setItem(authConstants.REFRESH_TOKEN, refreshToken);
    localStorage.setItem(authConstants.EXPIRATION_TIME, expirationDate);

    dispatch(authSuccess(token, refreshToken));
    dispatch(setAuthRedirectPath(routeConstants.HOME_ROUTE));
    dispatch(
        checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
        )
    );
};

export const register = (email, password, firstName, lastName) => {
    return (dispatch) => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
        };

        http.post(endpointConstants.REGISTER_ENDPOINT, authData)
            .then((response) => {
                processToken(dispatch, response.data.Data);
                dispatch(fetchLoggedInUser());
            })
            .catch((err) => {
                dispatch(authFail(err));
            });
    };
};

export const login = (email, password) => {
    return (dispatch) => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
        };

        http.post(endpointConstants.LOGIN_ENDPOINT, authData)
            .then((response) => {
                processToken(dispatch, response.data.Data);
                dispatch(fetchLoggedInUser());
            })
            .catch((err) => {
                dispatch(authFail(err));
            });
    };
};

export const authCheckState = () => {
    return (dispatch) => {
        const token = localStorage.getItem(authConstants.TOKEN);
        const refreshToken = localStorage.getItem(authConstants.REFRESH_TOKEN);
        if (!token && !refreshToken) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(
                localStorage.getItem(authConstants.EXPIRATION_TIME)
            );
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                dispatch(authSuccess(token));
                dispatch(
                    checkAuthTimeout(
                        (expirationDate.getTime() - new Date().getTime()) / 1000
                    )
                );
            }
        }
    };
};
