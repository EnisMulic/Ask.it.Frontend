import http from "../../../http";
import * as endpointConstants from "../../../constants/endpoints";

export const LIKE_QUESTION_SUCCESS = "LIKE_QUESTION_SUCCESS";
export const LIKE_QUESTION_FAIL = "LIKE_QUESTION_FAIL";

export const LIKE_QUESTION_UNDO_SUCCESS = "LIKE_QUESTION_UNDO_SUCCESS";
export const LIKE_QUESTION_UNDO_FAIL = "LIKE_QUESTION_UNDO_FAIL";

export const DISLIKE_QUESTION_SUCCESS = "DISLIKE_QUESTION_SUCCESS";
export const DISLIKE_QUESTION_FAIL = "DISLIKE_QUESTION_FAIL";

export const DISLIKE_QUESTION_UNDO_SUCCESS = "DISLIKE_QUESTION_UNDO_SUCCESS";
export const DISLIKE_QUESTION_UNDO_FAIL = "DISLIKE_QUESTION_UNDO_FAIL";

export const likeQuestionActionSuccess = (questionId, isDisliked) => {
    return {
        type: LIKE_QUESTION_SUCCESS,
        questionId: questionId,
        isDisliked: isDisliked,
    };
};

export const likeQuestionActionFail = (error) => {
    return {
        type: LIKE_QUESTION_FAIL,
        error: error,
    };
};

export const likeQuestionAction = (questionId, isDisliked) => {
    return (dispatch) => {
        http.post(
            endpointConstants.LIKE_QUESTION_ENDPOINT.replace("{id}", questionId)
        )
            .then(() => {
                dispatch(likeQuestionActionSuccess(questionId, isDisliked));
            })
            .catch((err) => {
                dispatch(likeQuestionActionFail(err.response.data));
            });
    };
};

export const likeQuestionUndoActionSuccess = (questionId) => {
    return {
        type: LIKE_QUESTION_UNDO_SUCCESS,
        questionId: questionId,
    };
};

export const likeQuestionUndoActionFail = (error) => {
    return {
        type: LIKE_QUESTION_UNDO_FAIL,
        error: error,
    };
};

export const likeQuestionUndoAction = (questionId) => {
    return (dispatch) => {
        http.post(
            endpointConstants.LIKE_QUESTION_UNDO_ENDPOINT.replace(
                "{id}",
                questionId
            )
        )
            .then(() => {
                dispatch(likeQuestionUndoActionSuccess(questionId));
            })
            .catch((err) => {
                dispatch(likeQuestionUndoActionFail(err.response.data));
            });
    };
};

export const dislikeQuestionActionSuccess = (questionId, isLiked) => {
    return {
        type: DISLIKE_QUESTION_SUCCESS,
        questionId: questionId,
        isLiked: isLiked,
    };
};

export const dislikeQuestionActionFail = (error) => {
    return {
        type: DISLIKE_QUESTION_FAIL,
        error: error,
    };
};

export const dislikeQuestionAction = (questionId, isLiked) => {
    return (dispatch) => {
        http.post(
            endpointConstants.DISLIKE_QUESTION_ENDPOINT.replace(
                "{id}",
                questionId
            )
        )
            .then(() => {
                dispatch(dislikeQuestionActionSuccess(questionId, isLiked));
            })
            .catch((err) => {
                dispatch(dislikeQuestionActionFail(err.response.data));
            });
    };
};

export const dislikeQuestionUndoActionSuccess = (questionId) => {
    return {
        type: DISLIKE_QUESTION_UNDO_SUCCESS,
        questionId: questionId,
    };
};

export const dislikeQuestionUndoActionFail = (error) => {
    return {
        type: DISLIKE_QUESTION_UNDO_FAIL,
        error: error,
    };
};

export const dislikeQuestionUndoAction = (questionId) => {
    return (dispatch) => {
        http.post(
            endpointConstants.DISLIKE_QUESTION_UNDO_ENDPOINT.replace(
                "{id}",
                questionId
            )
        )
            .then(() => {
                dispatch(dislikeQuestionUndoActionSuccess(questionId));
            })
            .catch((err) => {
                dispatch(dislikeQuestionUndoActionFail(err.response.data));
            });
    };
};
