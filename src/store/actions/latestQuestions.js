import * as actionTypes from "./actionTypes";
import http from "../../http";
import * as endpointConstants from "../../constants/endpoints";

export const fetchLatestQuestionsStart = () => {
    return {
        type: actionTypes.FETCH_LATEST_QUESTIONS_START,
    };
};

export const fetchLatestQuestionsSuccess = (payload) => {
    return {
        type: actionTypes.FETCH_LATEST_QUESTIONS_SUCCESS,
        payload: payload,
    };
};

export const fetchLatestQuestionsFail = (error) => {
    return {
        type: actionTypes.FETCH_LATEST_QUESTIONS_FAIL,
        error: error,
    };
};

export const fetchLatestQuestions = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(fetchLatestQuestionsStart());

        let searchParams = new URLSearchParams({
            pageNumber: pageNumber,
            pageSize: pageSize,
        });

        http.get(
            endpointConstants.GET_QUESTIONS_ENDPOINT +
                "?" +
                searchParams.toString()
        )
            .then((response) => {
                dispatch(fetchLatestQuestionsSuccess(response.data));
            })
            .catch((err) => {
                dispatch(fetchLatestQuestionsFail(err));
            });
    };
};
