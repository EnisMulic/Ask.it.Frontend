import http from "../../../http";
import * as endpointConstants from "../../../constants/endpoints";

export const FETCH_QUESTION_START = "FETCH_QUESTION_START";
export const FETCH_QUESTION_SUCCESS = "FETCH_QUESTION_SUCCESS";
export const FETCH_QUESTION_FAIL = "FETCH_QUESTION_FAIL";

export const fetchQuestionActionStart = () => {
    return {
        type: FETCH_QUESTION_START,
    };
};

export const fetchQuestionActionSuccess = (question) => {
    return {
        type: FETCH_QUESTION_SUCCESS,
        question: question,
    };
};

export const fetchQuestionActionFail = (error) => {
    return {
        type: FETCH_QUESTION_FAIL,
        error: error,
    };
};

export const fetchQuestionAction = (id) => {
    return (dispatch) => {
        dispatch(fetchQuestionActionStart());

        http.get(
            endpointConstants.GET_QUESTION_BY_ID_ENDPOINT.replace("{id}", id)
        )
            .then((response) => {
                dispatch(fetchQuestionActionSuccess(response.data.data));
            })
            .catch((err) => {
                dispatch(fetchQuestionActionFail(err.response.data));
            });
    };
};
