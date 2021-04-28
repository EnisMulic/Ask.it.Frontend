import * as actionTypes from "./actionTypes";
import http from "../../http";
import * as endpointConstants from "../../constants/endpoints";

export const fetchLoggedInUserStart = () => {
    return {
        type: actionTypes.FETCH_LOGGED_IN_USER_START,
    };
};

export const fetchLoggedInUserSuccess = (user) => {
    return {
        type: actionTypes.FETCH_LOGGED_IN_USER_SUCCESS,
        user: user,
    };
};

export const fetchLoggedInUserFail = (error) => {
    return {
        type: actionTypes.FETCH_LOGGED_IN_USER_FAIL,
        error: error,
    };
};

export const fetchLoggedInUser = () => {
    return (dispatch) => {
        dispatch(fetchLoggedInUserStart());

        http.get(endpointConstants.GET_ME_ENDPOINT)
            .then((response) => {
                dispatch(fetchLoggedInUserSuccess(response.data.Data));
            })
            .catch((err) => {
                dispatch(fetchLoggedInUserFail(err));
            });
    };
};
