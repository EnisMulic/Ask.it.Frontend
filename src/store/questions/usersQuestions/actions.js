import http from "../../../http";
import * as endpointConstants from "../../../constants/endpoints";

import * as filters from "../filters";

export const FETCH_USERS_QUESTIONS_START = "FETCH_USERS_QUESTIONS_START";
export const FETCH_USERS_QUESTIONS_SUCCESS = "FETCH_USERS_QUESTIONS_SUCCESS";
export const FETCH_USERS_QUESTIONS_FAIL = "FETCH_USERS_QUESTIONS_FAIL";

export const fetchUsersQuestionsActionStart = () => {
    return {
        type: FETCH_USERS_QUESTIONS_START,
    };
};

export const fetchUsersQuestionsActionSuccess = (payload) => {
    return {
        type: FETCH_USERS_QUESTIONS_SUCCESS,
        payload: payload,
        filter: filters.USER,
    };
};

export const fetchUsersQuestionsActionFail = (error) => {
    return {
        type: FETCH_USERS_QUESTIONS_FAIL,
        error: error,
    };
};

export const fetchUsersQuestions = (id, pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(fetchUsersQuestionsActionStart());

        let searchParams = new URLSearchParams({
            pageNumber: pageNumber,
            pageSize: pageSize,
        });

        http.get(
            endpointConstants.GET_USERS_QUESTIONS_ENDPOINT.replace("{id}", id) +
                "?" +
                searchParams.toString()
        )
            .then((response) => {
                dispatch(fetchUsersQuestionsActionSuccess(response.data));
            })
            .catch((err) => {
                console.log(err);
                dispatch(fetchUsersQuestionsActionFail(err));
            });
    };
};
