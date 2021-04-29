import * as actionTypes from "./actionTypes";
import http from "../../http";
import * as endpointConstants from "../../constants/endpoints";

export const fetchHotQuestionsStart = () => {
    return {
        type: actionTypes.FETCH_HOT_QUESTIONS_START,
    };
};

export const fetchHotQuestionsSuccess = (payload) => {
    return {
        type: actionTypes.FETCH_HOT_QUESTIONS_SUCCESS,
        payload: payload,
    };
};

export const fetchHotQuestionsFail = (error) => {
    return {
        type: actionTypes.FETCH_HOT_QUESTIONS_FAIL,
        error: error,
    };
};

export const fetchHotQuestions = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(fetchHotQuestionsStart());

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
                dispatch(fetchHotQuestionsSuccess(response.data));
            })
            .catch((err) => {
                dispatch(fetchHotQuestionsFail(err));
            });
    };
};
