import http from "../../../http";
import * as endpointConstants from "../../../constants/endpoints";

export const DELETE_ANSWER_START = "DELETE_ANSWER_START";
export const DELETE_ANSWER_SUCCESS = "DELETE_ANSWER_SUCCESS";
export const DELETE_ANSWER_FAIL = "DELETE_ANSWER_FAIL";

export const deleteAnswerActionStart = () => {
    return {
        type: DELETE_ANSWER_START,
    };
};

export const deleteAnswerActionSuccess = (answerId) => {
    return {
        type: DELETE_ANSWER_SUCCESS,
        answerId: answerId,
    };
};

export const deleteAnswerActionFail = (error) => {
    return {
        type: DELETE_ANSWER_FAIL,
        error: error,
    };
};

export const deleteAnswer = (answerId) => {
    return (dispatch) => {
        dispatch(deleteAnswerActionStart());

        http.delete(
            endpointConstants.DELETE_ANSWER_ENDPOINT.replace("{id}", answerId)
        )
            .then(() => {
                dispatch(deleteAnswerActionSuccess(answerId));
            })
            .catch((err) => {
                dispatch(deleteAnswerActionFail(err));
            });
    };
};
