import * as actionTypes from "./actionTypes";
import http from "../../http";
import * as endpointConstants from "../../constants/endpoints";

export const likeQuestionSuccess = (questionId) => {
    return {
        type: actionTypes.LIKE_QUESTION_SUCCESS,
        questionId: questionId,
    };
};

export const likeQuestionFail = (error) => {
    return {
        type: actionTypes.LIKE_QUESTION_FAIL,
        error: error,
    };
};

export const likeQuestion = (questionId) => {
    return (dispatch) => {
        http.post(
            endpointConstants.LIKE_QUESTION_ENDPOINT.replace("{id}", questionId)
        )
            .then(() => {
                dispatch(likeQuestionSuccess(questionId));
            })
            .catch((err) => {
                dispatch(likeQuestionFail(err));
            });
    };
};

export const likeQuestionUndoSuccess = (questionId) => {
    return {
        type: actionTypes.LIKE_QUESTION_UNDO_SUCCESS,
        questionId: questionId,
    };
};

export const likeQuestionUndoFail = (error) => {
    return {
        type: actionTypes.LIKE_QUESTION_UNDO_FAIL,
        error: error,
    };
};

export const likeQuestionUndo = (questionId) => {
    return (dispatch) => {
        http.post(
            endpointConstants.LIKE_QUESTION_UNDO_ENDPOINT.replace(
                "{id}",
                questionId
            )
        )
            .then(() => {
                dispatch(likeQuestionUndoSuccess(questionId));
            })
            .catch((err) => {
                dispatch(likeQuestionUndoFail(err));
            });
    };
};

export const dislikeQuestionSuccess = (questionId) => {
    return {
        type: actionTypes.DISLIKE_QUESTION_SUCCESS,
        questionId: questionId,
    };
};

export const dislikeQuestionFail = (error) => {
    return {
        type: actionTypes.DISLIKE_QUESTION_FAIL,
        error: error,
    };
};

export const dislikeQuestion = (questionId) => {
    return (dispatch) => {
        http.post(
            endpointConstants.DISLIKE_QUESTION_ENDPOINT.replace(
                "{id}",
                questionId
            )
        )
            .then(() => {
                dispatch(dislikeQuestionSuccess(questionId));
            })
            .catch((err) => {
                dispatch(dislikeQuestionFail(err));
            });
    };
};

export const dislikeQuestionUndoSuccess = (questionId) => {
    return {
        type: actionTypes.DISLIKE_QUESTION_UNDO_SUCCESS,
        questionId: questionId,
    };
};

export const dislikeQuestionUndoFail = (error) => {
    return {
        type: actionTypes.DISLIKE_QUESTION_UNDO_FAIL,
        error: error,
    };
};

export const dislikeQuestionUndo = (questionId) => {
    return (dispatch) => {
        http.post(
            endpointConstants.DISLIKE_QUESTION_UNDO_ENDPOINT.replace(
                "{id}",
                questionId
            )
        )
            .then(() => {
                dispatch(dislikeQuestionUndoSuccess(questionId));
            })
            .catch((err) => {
                dispatch(dislikeQuestionUndoFail(err));
            });
    };
};

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
