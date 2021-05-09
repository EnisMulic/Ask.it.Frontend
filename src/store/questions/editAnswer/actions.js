import http from "../../../http";
import * as endpointConstants from "../../../constants/endpoints";

export const EDIT_ANSWER_START = "EDIT_ANSWER_START";
export const EDIT_ANSWER_SUCCESS = "EDIT_ANSWER_SUCCESS";
export const EDIT_ANSWER_FAIL = "EDIT_ANSWER_FAIL";

export const editAnswerActionStart = () => {
    return {
        type: EDIT_ANSWER_START,
    };
};

export const editAnswerActionSuccess = (answer) => {
    return {
        type: EDIT_ANSWER_SUCCESS,
        answer: answer,
    };
};

export const editAnswerActionFail = (error) => {
    return {
        type: EDIT_ANSWER_FAIL,
        error: error,
    };
};

export const editAnswer = (answerId, content) => {
    return (dispatch) => {
        dispatch(editAnswerActionStart());

        var answer = {
            content: content,
        };

        http.put(
            endpointConstants.UPDATE_ANSWER_ENDPOINT.replace("{id}", answerId),
            answer
        )
            .then((response) => {
                dispatch(editAnswerActionSuccess(response.data.data));
            })
            .catch((err) => {
                dispatch(editAnswerActionFail(err));
            });
    };
};
