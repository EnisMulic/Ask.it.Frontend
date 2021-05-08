import http from "../../../http";
import * as endpointConstants from "../../../constants/endpoints";

export const LIKE_ANSWER_SUCCESS = "LIKE_ANSWER_SUCCESS";
export const LIKE_ANSWER_FAIL = "LIKE_ANSWER_FAIL";

export const LIKE_ANSWER_UNDO_SUCCESS = "LIKE_ANSWER_UNDO_SUCCESS";
export const LIKE_ANSWER_UNDO_FAIL = "LIKE_ANSWER_UNDO_FAIL";

export const DISLIKE_ANSWER_SUCCESS = "DISLIKE_ANSWER_SUCCESS";
export const DISLIKE_ANSWER_FAIL = "DISLIKE_ANSWER_FAIL";

export const DISLIKE_ANSWER_UNDO_SUCCESS = "DISLIKE_ANSWER_UNDO_SUCCESS";
export const DISLIKE_ANSWER_UNDO_FAIL = "DISLIKE_ANSWER_UNDO_FAIL";

export const likeAnswerActionSuccess = (answerId, isDisliked) => {
    return {
        type: LIKE_ANSWER_SUCCESS,
        answerId: answerId,
        isDisliked: isDisliked,
    };
};

export const likeAnswerActionFail = (error) => {
    return {
        type: LIKE_ANSWER_FAIL,
        error: error,
    };
};

export const likeAnswerAction = (answerId, isDisliked) => {
    return (dispatch) => {
        http.post(
            endpointConstants.LIKE_ANSWER_ENDPOINT.replace("{id}", answerId)
        )
            .then(() => {
                dispatch(likeAnswerActionSuccess(answerId, isDisliked));
            })
            .catch((err) => {
                dispatch(likeAnswerActionFail(err));
            });
    };
};

export const likeAnswerUndoActionSuccess = (answerId) => {
    return {
        type: LIKE_ANSWER_UNDO_SUCCESS,
        answerId: answerId,
    };
};

export const likeAnswerUndoActionFail = (error) => {
    return {
        type: LIKE_ANSWER_UNDO_FAIL,
        error: error,
    };
};

export const likeAnswerUndoAction = (answerId) => {
    return (dispatch) => {
        http.post(
            endpointConstants.LIKE_ANSWER_UNDO_ENDPOINT.replace(
                "{id}",
                answerId
            )
        )
            .then(() => {
                dispatch(likeAnswerUndoActionSuccess(answerId));
            })
            .catch((err) => {
                dispatch(likeAnswerUndoActionFail(err));
            });
    };
};

export const dislikeAnswerActionSuccess = (answerId, isLiked) => {
    return {
        type: DISLIKE_ANSWER_SUCCESS,
        answerId: answerId,
        isLiked: isLiked,
    };
};

export const dislikeAnswerActionFail = (error) => {
    return {
        type: DISLIKE_ANSWER_FAIL,
        error: error,
    };
};

export const dislikeAnswerAction = (answerId, isLiked) => {
    return (dispatch) => {
        http.post(
            endpointConstants.DISLIKE_ANSWER_ENDPOINT.replace("{id}", answerId)
        )
            .then(() => {
                dispatch(dislikeAnswerActionSuccess(answerId, isLiked));
            })
            .catch((err) => {
                dispatch(dislikeAnswerActionFail(err));
            });
    };
};

export const dislikeAnswerUndoActionSuccess = (answerId) => {
    return {
        type: DISLIKE_ANSWER_UNDO_SUCCESS,
        answerId: answerId,
    };
};

export const dislikeAnswerUndoActionFail = (error) => {
    return {
        type: DISLIKE_ANSWER_UNDO_FAIL,
        error: error,
    };
};

export const dislikeAnswerUndoAction = (answerId) => {
    return (dispatch) => {
        http.post(
            endpointConstants.DISLIKE_ANSWER_UNDO_ENDPOINT.replace(
                "{id}",
                answerId
            )
        )
            .then(() => {
                dispatch(dislikeAnswerUndoActionSuccess(answerId));
            })
            .catch((err) => {
                dispatch(dislikeAnswerUndoActionFail(err));
            });
    };
};
