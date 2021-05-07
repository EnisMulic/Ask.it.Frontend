import http from "../../../http";
import * as endpointConstants from "../../../constants/endpoints";

export const FETCH_ME_START = "FETCH_ME_START";
export const FETCH_ME_SUCCESS = "FETCH_ME_SUCCESS";
export const FETCH_ME_FAIL = "FETCH_ME_FAIL";
export const FETCH_ME_RESET = "FETCH_ME_RESET";

export const fetchMeActionStart = () => {
    return {
        type: FETCH_ME_START,
    };
};

export const fetchMeActionSuccess = (user) => {
    return {
        type: FETCH_ME_SUCCESS,
        user: user,
    };
};

export const fetchMeActionFail = (error) => {
    return {
        type: FETCH_ME_FAIL,
        error: error,
    };
};

export const fetchMeActionReset = () => {
    return {
        type: FETCH_ME_RESET,
    };
};

export const fetchMe = () => {
    return (dispatch) => {
        dispatch(fetchMeActionStart());

        http.get(endpointConstants.GET_ME_ENDPOINT)
            .then((response) => {
                dispatch(fetchMeActionSuccess(response.data.data));
            })
            .catch((err) => {
                dispatch(fetchMeActionFail(err));
            });
    };
};
