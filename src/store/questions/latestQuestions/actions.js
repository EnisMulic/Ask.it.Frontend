import http from "../../../http";
import * as endpointConstants from "../../../constants/endpoints";

import * as filters from "../filters";

export const FETCH_LATEST_QUESTIONS_START = "FETCH_LATEST_QUESTIONS_START";
export const FETCH_LATEST_QUESTIONS_SUCCESS = "FETCH_LATEST_QUESTIONS_SUCCESS";
export const FETCH_LATEST_QUESTIONS_FAIL = "FETCH_LATEST_QUESTIONS_FAIL";

export const fetchLatestQuestionsActionStart = () => {
    return {
        type: FETCH_LATEST_QUESTIONS_START,
    };
};

export const fetchLatestQuestionsActionSuccess = (payload) => {
    return {
        type: FETCH_LATEST_QUESTIONS_SUCCESS,
        payload: payload,
        filter: filters.LATEST,
    };
};

export const fetchLatestQuestionsActionFail = (error) => {
    return {
        type: FETCH_LATEST_QUESTIONS_FAIL,
        error: error,
    };
};

export const fetchLatestQuestions = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(fetchLatestQuestionsActionStart());

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
                dispatch(fetchLatestQuestionsActionSuccess(response.data));
            })
            .catch((err) => {
                dispatch(fetchLatestQuestionsActionFail(err.response.data));
            });
    };
};
