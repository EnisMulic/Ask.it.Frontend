import http from "../../../http";
import * as endpointConstants from "../../../constants/endpoints";

import * as filters from "../filters";

export const FETCH_HOT_QUESTIONS_START = "FETCH_HOT_QUESTIONS_START";
export const FETCH_HOT_QUESTIONS_SUCCESS = "FETCH_HOT_QUESTIONS_SUCCESS";
export const FETCH_HOT_QUESTIONS_FAIL = "FETCH_HOT_QUESTIONS_FAIL";

export const fetchHotQuestionsActionStart = () => {
    return {
        type: FETCH_HOT_QUESTIONS_START,
    };
};

export const fetchHotQuestionsActionSuccess = (payload) => {
    return {
        type: FETCH_HOT_QUESTIONS_SUCCESS,
        payload: payload,
        filter: filters.HOT,
    };
};

export const fetchHotQuestionsActionFail = (error) => {
    return {
        type: FETCH_HOT_QUESTIONS_FAIL,
        error: error,
    };
};

export const fetchHotQuestions = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(fetchHotQuestionsActionStart());

        let searchParams = new URLSearchParams({
            pageNumber: pageNumber,
            pageSize: pageSize,
        });

        http.get(
            endpointConstants.GET_HOT_QUESTIONS_ENDPOINT +
                "?" +
                searchParams.toString()
        )
            .then((response) => {
                dispatch(fetchHotQuestionsActionSuccess(response.data));
            })
            .catch((err) => {
                dispatch(fetchHotQuestionsActionFail(err));
            });
    };
};
