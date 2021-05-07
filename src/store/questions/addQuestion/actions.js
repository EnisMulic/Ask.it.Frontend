import http from "../../../http";
import * as endpointConstants from "../../../constants/endpoints";

export const ADD_QUESTION_START = "ADD_QUESTION_START";
export const ADD_QUESTION_SUCCESS = "ADD_QUESTION_SUCCESS";
export const ADD_QUESTION_FAIL = "ADD_QUESTION_FAIL";

export const addQuestionActionStart = () => {
    return {
        type: ADD_QUESTION_START,
    };
};

export const addQuestionActionSuccess = (question) => {
    return {
        type: ADD_QUESTION_SUCCESS,
        question: question,
    };
};

export const addQuestionActionFail = (error) => {
    return {
        type: ADD_QUESTION_FAIL,
        error: error,
    };
};

export const addQuestion = (content) => {
    return (dispatch) => {
        dispatch(addQuestionActionStart());

        var question = {
            content: content,
        };

        http.post(endpointConstants.CREATE_QUESTION_ENDPOINT, question)
            .then((response) => {
                dispatch(addQuestionActionSuccess(response.data.data));
            })
            .catch((err) => {
                dispatch(addQuestionActionFail(err));
            });
    };
};
