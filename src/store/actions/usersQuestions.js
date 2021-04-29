import * as actionTypes from "./actionTypes";
import http from "../../http";
import * as endpointConstants from "../../constants/endpoints";

export const fetchUsersQuestionsStart = () => {
    return {
        type: actionTypes.FETCH_USERS_QUESTIONS_START,
    };
};

export const fetchUsersQuestionsSuccess = (payload) => {
    return {
        type: actionTypes.FETCH_USERS_QUESTIONS_SUCCESS,
        payload: payload,
    };
};

export const fetchUsersQuestionsFail = (error) => {
    return {
        type: actionTypes.FETCH_USERS_QUESTIONS_FAIL,
        error: error,
    };
};

export const fetchUsersQuestions = (id, pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(fetchUsersQuestionsStart());

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
                dispatch(fetchUsersQuestionsSuccess(response.data));
            })
            .catch((err) => {
                dispatch(fetchUsersQuestionsFail(err));
            });
    };
};
