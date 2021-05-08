import * as actionTypes from "../actions/actionTypes";
import updateObject from "../../utils/updateObject";

const initialState = {
    user: null,
    error: null,
    loading: false,
};

const addNotification = (state, action) => {
    const newNotifications = [
        ...state.user.answerNotifications,
        action.notification,
    ];

    return updateObject(state, {
        user: updateObject(state.user, {
            answerNotifications: newNotifications,
        }),
        loading: false,
    });
};

const likeAnswerSuccess = (state, action) => {
    const ratings = state.user.questionRatings;

    if (ratings) {
        const i = ratings.findIndex(
            (item) => item.questionId === action.questionId
        );

        if (i === -1) {
            ratings.push({
                questionId: action.questionId,
                isLiked: true,
            });
        } else {
            ratings[i].IsLiked = true;
        }
    }

    return updateObject(state, {
        user: updateObject(state.user, {
            questionRatings: ratings,
        }),
        error: null,
        loading: false,
    });
};

const likeAnswerFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};

const likeAnswerUndoSuccess = (state, action) => {
    var ratings = state.user.answerRatings;

    if (ratings) {
        ratings = ratings.filter((item) => {
            return item.answerId !== action.answerId && item.isLiked !== true;
        });
    }

    return updateObject(state, {
        user: updateObject(state.user, {
            answerRatings: ratings,
        }),
        error: null,
        loading: false,
    });
};

const likeAnswerUndoFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};

const dislikeAnswerSuccess = (state, action) => {
    const ratings = state.user.answerRatings;

    if (ratings) {
        const i = ratings.findIndex(
            (item) => item.answerId === action.answerId
        );

        if (i === -1) {
            ratings.push({
                answerId: action.answerId,
                isLiked: false,
            });
        } else {
            ratings[i].isLiked = false;
        }
    }

    return updateObject(state, {
        user: updateObject(state.user, {
            answerRatings: ratings,
        }),
        error: null,
        loading: false,
    });
};

const dislikeAnswerFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};

const dislikeAnswerUndoSuccess = (state, action) => {
    var ratings = state.user.answerRatings;

    if (ratings) {
        ratings = ratings.filter(
            (item) =>
                item.answerId !== action.answerId && item.isLiked !== false
        );
    }

    return updateObject(state, {
        user: updateObject(state.user, {
            answerRatings: ratings,
        }),
        error: null,
        loading: false,
    });
};

const dislikeAnswerUndoFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LIKE_QUESTION_SUCCESS:
            return likeQuestionSuccess(state, action);
        case actionTypes.LIKE_QUESTION_FAIL:
            return likeQuestionFail(state, action);
        case actionTypes.LIKE_QUESTION_UNDO_SUCCESS:
            return likeQuestionUndoSuccess(state, action);
        case actionTypes.LIKE_QUESTION_UNDO_FAIL:
            return likeQuestionUndoFail(state, action);
        case actionTypes.DISLIKE_QUESTION_SUCCESS:
            return dislikeQuestionSuccess(state, action);
        case actionTypes.DISLIKE_QUESTION_FAIL:
            return dislikeQuestionFail(state, action);
        case actionTypes.DISLIKE_QUESTION_UNDO_SUCCESS:
            return dislikeQuestionUndoSuccess(state, action);
        case actionTypes.DISLIKE_QUESTION_UNDO_FAIL:
            return dislikeQuestionUndoFail(state, action);
        case actionTypes.ADD_NOTIFICATION:
            return addNotification(state, action);
        case actionTypes.LIKE_ANSWER_SUCCESS:
            return likeAnswerSuccess(state, action);
        case actionTypes.LIKE_ANSWER_FAIL:
            return likeAnswerFail(state, action);
        case actionTypes.LIKE_ANSWER_UNDO_SUCCESS:
            return likeAnswerUndoSuccess(state, action);
        case actionTypes.LIKE_ANSWER_UNDO_FAIL:
            return likeAnswerUndoFail(state, action);
        case actionTypes.DISLIKE_ANSWER_SUCCESS:
            return dislikeAnswerSuccess(state, action);
        case actionTypes.DISLIKE_ANSWER_FAIL:
            return dislikeAnswerFail(state, action);
        case actionTypes.DISLIKE_ANSWER_UNDO_SUCCESS:
            return dislikeAnswerUndoSuccess(state, action);
        case actionTypes.DISLIKE_ANSWER_UNDO_FAIL:
            return dislikeAnswerUndoFail(state, action);
        default:
            return state;
    }
};

export default reducer;
