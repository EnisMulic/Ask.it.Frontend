import http from "../../../http";
import * as endpointConstants from "../../../constants/endpoints";

export const FETCH_TOP_USERS_START = "FETCH_TOP_USERS_START";
export const FETCH_TOP_USERS_SUCCESS = "FETCH_TOP_USERS_SUCCESS";
export const FETCH_TOP_USERS_FAIL = "FETCH_TOP_USERS_FAIL";

export const fetchTopUsersActionStart = () => {
    return {
        type: FETCH_TOP_USERS_START,
    };
};

export const fetchTopUsersActionSuccess = (payload) => {
    return {
        type: FETCH_TOP_USERS_SUCCESS,
        payload: payload,
    };
};

export const fetchTopUsersActionFail = (error) => {
    return {
        type: FETCH_TOP_USERS_FAIL,
        error: error,
    };
};

export const fetchTopUsers = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(fetchTopUsersActionStart());

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
                dispatch(fetchTopUsersActionSuccess(response.data));
            })
            .catch((err) => {
                dispatch(fetchTopUsersActionFail(err.response.data));
            });
    };
};
