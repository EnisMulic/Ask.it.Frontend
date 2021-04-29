import * as actionTypes from "./actionTypes";
import http from "../../http";
import * as endpointConstants from "../../constants/endpoints";

export const fetchLoggedInUserStart = () => {
    return {
        type: actionTypes.FETCH_LOGGED_IN_USER_START,
    };
};

export const fetchLoggedInUserSuccess = (user) => {
    return {
        type: actionTypes.FETCH_LOGGED_IN_USER_SUCCESS,
        user: user,
    };
};

export const fetchLoggedInUserFail = (error) => {
    return {
        type: actionTypes.FETCH_LOGGED_IN_USER_FAIL,
        error: error,
    };
};

export const fetchLoggedInUserReset = () => {
    return {
        type: actionTypes.FETCH_LOGGED_IN_USER_RESET,
    };
};

export const fetchLoggedInUser = () => {
    return (dispatch) => {
        dispatch(fetchLoggedInUserStart());

        http.get(endpointConstants.GET_ME_ENDPOINT)
            .then((response) => {
                dispatch(fetchLoggedInUserSuccess(response.data.Data));
            })
            .catch((err) => {
                dispatch(fetchLoggedInUserFail(err));
            });
    };
};

export const likeQuestionSuccess = (questionID) => {
    return {
        type: actionTypes.LIKE_QUESTION_SUCCESS,
        questionID: questionID,
    };
};

export const likeQuestionFail = (error) => {
    return {
        type: actionTypes.LIKE_QUESTION_FAIL,
        error: error,
    };
};

export const likeQuestion = (questionID) => {
    return (dispatch) => {
        http.post(
            endpointConstants.LIKE_QUESTION_ENDPOINT.replace("{id}", questionID)
        )
            .then(() => {
                dispatch(likeQuestionSuccess(questionID));
            })
            .catch((err) => {
                dispatch(likeQuestionFail(err));
            });
    };
};

export const likeQuestionUndoSuccess = (questionID) => {
    return {
        type: actionTypes.LIKE_QUESTION_UNDO_SUCCESS,
        questionID: questionID,
    };
};

export const likeQuestionUndoFail = (error) => {
    return {
        type: actionTypes.LIKE_QUESTION_UNDO_FAIL,
        error: error,
    };
};

export const likeQuestionUndo = (questionID) => {
    return (dispatch) => {
        http.post(
            endpointConstants.LIKE_QUESTION_UNDO_ENDPOINT.replace(
                "{id}",
                questionID
            )
        )
            .then(() => {
                dispatch(likeQuestionUndoSuccess(questionID));
            })
            .catch((err) => {
                dispatch(likeQuestionUndoFail(err));
            });
    };
};

export const dislikeQuestionSuccess = (questionID) => {
    return {
        type: actionTypes.DISLIKE_QUESTION_SUCCESS,
        questionID: questionID,
    };
};

export const dislikeQuestionFail = (error) => {
    return {
        type: actionTypes.DISLIKE_QUESTION_FAIL,
        error: error,
    };
};

export const dislikeQuestion = (questionID) => {
    return (dispatch) => {
        http.post(
            endpointConstants.DISLIKE_QUESTION_ENDPOINT.replace(
                "{id}",
                questionID
            )
        )
            .then(() => {
                dispatch(dislikeQuestionSuccess(questionID));
            })
            .catch((err) => {
                dispatch(dislikeQuestionFail(err));
            });
    };
};

export const dislikeQuestionUndoSuccess = (questionID) => {
    return {
        type: actionTypes.DISLIKE_QUESTION_UNDO_SUCCESS,
        questionID: questionID,
    };
};

export const dislikeQuestionUndoFail = (error) => {
    return {
        type: actionTypes.DISLIKE_QUESTION_UNDO_FAIL,
        error: error,
    };
};

export const dislikeQuestionUndo = (questionID) => {
    return (dispatch) => {
        http.post(
            endpointConstants.DISLIKE_QUESTION_UNDO_ENDPOINT.replace(
                "{id}",
                questionID
            )
        )
            .then(() => {
                dispatch(dislikeQuestionUndoSuccess(questionID));
            })
            .catch((err) => {
                dispatch(dislikeQuestionUndoFail(err));
            });
    };
};
