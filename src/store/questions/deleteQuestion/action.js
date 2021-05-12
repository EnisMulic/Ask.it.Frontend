import http from "../../../http";
import * as endpointConstants from "../../../constants/endpoints";

export const DELETE_QUESTION_START = "DELETE_QUESTION_START";
export const DELETE_QUESTION_SUCCESS = "DELETE_QUESTION_SUCCESS";
export const DELETE_QUESTION_FAIL = "DELETE_QUESTION_FAIL";

export const deleteQuestionActionStart = () => {
    return {
        type: DELETE_QUESTION_START,
    };
};

export const deleteQuestionActionSuccess = (questionId) => {
    return {
        type: DELETE_QUESTION_SUCCESS,
        questionId: questionId,
    };
};

export const deleteQuestionActionFail = (error) => {
    return {
        type: DELETE_QUESTION_FAIL,
        error: error,
    };
};

export const deleteQuestion = (questionId) => {
    return (dispatch) => {
        dispatch(deleteQuestionActionStart());

        http.delete(
            endpointConstants.DELETE_QUESTION_ENDPOINT.replace(
                "{id}",
                questionId
            )
        )
            .then((response) => {
                dispatch(deleteQuestionActionSuccess(questionId));
            })
            .catch((err) => {
                dispatch(deleteQuestionActionFail(err.response.data));
            });
    };
};
