import * as actionTypes from "./actionTypes";
import http from "../../http";
import * as endpointConstants from "../../constants/endpoints";

export const fetchUsersQuestionsStart = () => {
    return {
        type: actionTypes.FETCH_USERS_QUESTIONS_START,
    };
};

export const fetchUsersQuestionsSuccess = (payload) => {
    return {
        type: actionTypes.FETCH_USERS_QUESTIONS_SUCCESS,
        payload: payload,
    };
};

export const fetchUsersQuestionsFail = (error) => {
    return {
        type: actionTypes.FETCH_USERS_QUESTIONS_FAIL,
        error: error,
    };
};

export const fetchUsersQuestions = (id, pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(fetchUsersQuestionsStart());

        let searchParams = new URLSearchParams({
            pageNumber: pageNumber,
            pageSize: pageSize,
        });

        http.get(
            endpointConstants.GET_USERS_QUESTIONS_ENDPOINT.replace("{id}", id) +
                "?" +
                searchParams.toString()
        )
            .then((response) => {
                dispatch(fetchUsersQuestionsSuccess(response.data));
            })
            .catch((err) => {
                dispatch(fetchUsersQuestionsFail(err));
            });
    };
};

export const addQuestionStart = () => {
    return {
        type: actionTypes.ADD_QUESTION_START,
    };
};

export const addQuestionSuccess = (question) => {
    return {
        type: actionTypes.ADD_QUESTION_SUCCESS,
        question: question,
    };
};

export const addQuestionFail = (error) => {
    return {
        type: actionTypes.ADD_QUESTION_FAIL,
        error: error,
    };
};

export const addQuestion = (content) => {
    return (dispatch) => {
        dispatch(fetchUsersQuestionsStart());

        var question = {
            content: content,
        };

        http.post(endpointConstants.CREATE_QUESTION_ENDPOINT, question)
            .then((response) => {
                dispatch(addQuestionSuccess(response.data));
            })
            .catch((err) => {
                dispatch(addQuestionFail(err));
            });
    };
};
