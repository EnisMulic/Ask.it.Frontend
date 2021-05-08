import * as actionTypes from "./actionTypes";
import http from "../../http";
import * as endpointConstants from "../../constants/endpoints";

export const addNotification = (notification) => {
    return {
        type: actionTypes.ADD_NOTIFICATION,
        notification: notification,
    };
};

export const likeAnswerSuccess = (answerId) => {
    return {
        type: actionTypes.LIKE_ANSWER_SUCCESS,
        answerId: answerId,
    };
};

export const likeAnswerFail = (error) => {
    return {
        type: actionTypes.LIKE_ANSWER_FAIL,
        error: error,
    };
};

export const likeAnswer = (answerId) => {
    return (dispatch) => {
        http.post(
            endpointConstants.LIKE_ANSWER_ENDPOINT.replace("{id}", answerId)
        )
            .then(() => {
                dispatch(likeAnswerSuccess(answerId));
            })
            .catch((err) => {
                dispatch(likeAnswerFail(err));
            });
    };
};

export const likeAnswerUndoSuccess = (answerId) => {
    return {
        type: actionTypes.LIKE_ANSWER_UNDO_SUCCESS,
        answerId: answerId,
    };
};

export const likeAnswerUndoFail = (error) => {
    return {
        type: actionTypes.LIKE_ANSWER_UNDO_FAIL,
        error: error,
    };
};

export const likeAnswerUndo = (answerId) => {
    return (dispatch) => {
        http.post(
            endpointConstants.LIKE_ANSWER_UNDO_ENDPOINT.replace(
                "{id}",
                answerId
            )
        )
            .then(() => {
                dispatch(likeAnswerUndoSuccess(answerId));
            })
            .catch((err) => {
                dispatch(likeAnswerUndoFail(err));
            });
    };
};

export const dislikeAnswerSuccess = (answerId) => {
    return {
        type: actionTypes.DISLIKE_ANSWER_SUCCESS,
        answerId: answerId,
    };
};

export const dislikeAnswerFail = (error) => {
    return {
        type: actionTypes.DISLIKE_ANSWER_FAIL,
        error: error,
    };
};

export const dislikeAnswer = (answerId) => {
    return (dispatch) => {
        http.post(
            endpointConstants.DISLIKE_ANSWER_ENDPOINT.replace("{id}", answerId)
        )
            .then(() => {
                dispatch(dislikeAnswerSuccess(answerId));
            })
            .catch((err) => {
                dispatch(dislikeAnswerFail(err));
            });
    };
};

export const dislikeAnswerUndoSuccess = (answerId) => {
    return {
        type: actionTypes.DISLIKE_ANSWER_UNDO_SUCCESS,
        answerId: answerId,
    };
};

export const dislikeAnswerUndoFail = (error) => {
    return {
        type: actionTypes.DISLIKE_ANSWER_UNDO_FAIL,
        error: error,
    };
};

export const dislikeAnswerUndo = (answerId) => {
    return (dispatch) => {
        http.post(
            endpointConstants.DISLIKE_ANSWER_UNDO_ENDPOINT.replace(
                "{id}",
                answerId
            )
        )
            .then(() => {
                dispatch(dislikeAnswerUndoSuccess(answerId));
            })
            .catch((err) => {
                dispatch(dislikeAnswerUndoFail(err));
            });
    };
};
