import * as actionTypes from "./actionTypes";
import http from "../../http";
import * as endpointConstants from "../../constants/endpoints";

export const fetchTopUsersStart = () => {
    return {
        type: actionTypes.FETCH_TOP_USERS_START,
    };
};

export const fetchTopUsersSuccess = (payload) => {
    return {
        type: actionTypes.FETCH_TOP_USERS_SUCCESS,
        payload: payload,
    };
};

export const fetchTopUsersFail = (error) => {
    return {
        type: actionTypes.FETCH_TOP_USERS_FAIL,
        error: error,
    };
};

export const fetchTopUsers = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(fetchTopUsersStart());

        let searchParams = new URLSearchParams({
            pageNumber: pageNumber,
            pageSize: pageSize,
        });

        http.get(
            endpointConstants.GET_TOP_USERS_ENDPOINT +
                "?" +
                searchParams.toString()
        )
            .then((response) => {
                dispatch(fetchTopUsersSuccess(response.data));
            })
            .catch((err) => {
                dispatch(fetchTopUsersFail(err));
            });
    };
};
