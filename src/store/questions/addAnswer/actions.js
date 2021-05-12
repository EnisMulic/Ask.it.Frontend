import http from "../../../http";
import * as endpointConstants from "../../../constants/endpoints";

export const ADD_ANSWER_START = "ADD_ANSWER_START";
export const ADD_ANSWER_SUCCESS = "ADD_ANSWER_SUCCESS";
export const ADD_ANSWER_FAIL = "ADD_ANSWER_FAIL";

export const addAnswerActionStart = () => {
    return {
        type: ADD_ANSWER_START,
    };
};

export const addAnswerActionSuccess = (answer) => {
    return {
        type: ADD_ANSWER_SUCCESS,
        answer: answer,
    };
};

export const addAnswerActionFail = (error) => {
    return {
        type: ADD_ANSWER_FAIL,
        error: error,
    };
};

export const addAnswer = (questionId, content) => {
    return (dispatch) => {
        dispatch(addAnswerActionStart());

        var answer = {
            content: content,
        };

        http.post(
            endpointConstants.CREATE_QUESTION_ANSWER_ENDPOINT.replace(
                "{id}",
                questionId
            ),
            answer
        )
            .then((response) => {
                dispatch(addAnswerActionSuccess(response.data.data));
            })
            .catch((err) => {
                dispatch(addAnswerActionFail(err.response.data));
            });
    };
};
