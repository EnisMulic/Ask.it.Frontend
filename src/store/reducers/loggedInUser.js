import * as actionTypes from "../actions/actionTypes";
import updateObject from "../../utils/updateObject";

const initialState = {
    user: null,
    error: null,
    loading: false,
};

const likeQuestionSuccess = (state, action) => {
    const ratings = state.user.questionRatings;

    if (ratings) {
        const i = ratings.findIndex(
            (item) => item.questionId === action.questionId
        );

        if (i === -1) {
            ratings.push({
                questionId: action.questionId,
                IsLiked: true,
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

const likeQuestionFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};

const likeQuestionUndoSuccess = (state, action) => {
    var ratings = state.user.questionRatings;

    if (ratings) {
        ratings = ratings.filter((item) => {
            return (
                item.questionId !== action.questionId && item.isLiked !== true
            );
        });
    }

    return updateObject(state, {
        user: updateObject(state.user, {
            questionRatings: ratings,
        }),
        error: null,
        loading: false,
    });
};

const likeQuestionUndoFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};

const dislikeQuestionSuccess = (state, action) => {
    const ratings = state.user.questionRatings;

    if (ratings) {
        const i = ratings.findIndex(
            (item) => item.questionId === action.questionId
        );

        if (i === -1) {
            ratings.push({
                questionId: action.questionId,
                isLiked: false,
            });
        } else {
            ratings[i].isLiked = false;
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

const dislikeQuestionFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};

const dislikeQuestionUndoSuccess = (state, action) => {
    var ratings = state.user.questionRatings;

    if (ratings) {
        ratings = ratings.filter(
            (item) =>
                item.questionId !== action.questionId && item.isLiked !== false
        );
    }

    return updateObject(state, {
        user: updateObject(state.user, {
            questionRatings: ratings,
        }),
        error: null,
        loading: false,
    });
};

const dislikeQuestionUndoFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};

const updateUserStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true,
    });
};

const updateUserSuccess = (state, action) => {
    return updateObject(state, {
        user: updateObject(state.user, {
            firstName: action.firstName,
            lastName: action.lastName,
            email: action.email,
        }),
        error: null,
        loading: false,
    });
};

const updateUserFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};

const changePasswordStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true,
    });
};

const changePasswordSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: false,
    });
};

const changePasswordFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
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
        case actionTypes.UPDATE_USER_START:
            return updateUserStart(state, action);
        case actionTypes.UPDATE_USER_SUCCESS:
            return updateUserSuccess(state, action);
        case actionTypes.UPDATE_USER_FAIL:
            return updateUserFail(state, action);
        case actionTypes.CHANGE_PASSWORD_START:
            return changePasswordStart(state, action);
        case actionTypes.CHANGE_PASSWORD_SUCCESS:
            return changePasswordSuccess(state, action);
        case actionTypes.CHANGE_PASSWORD_FAIL:
            return changePasswordFail(state, action);
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
