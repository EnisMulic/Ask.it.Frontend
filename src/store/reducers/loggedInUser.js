import * as actionTypes from "../actions/actionTypes";
import updateObject from "../../utils/updateObject";

const initialState = {
    user: null,
    error: null,
    loading: false,
};

const fetchLoggedInUserStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true,
    });
};

const fetchLoggedInUserSuccess = (state, action) => {
    return updateObject(state, {
        user: action.user,
        error: null,
        loading: false,
    });
};

const fetchLoggedInUserFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};

const fetchLoggedInUserReset = (state, action) => {
    return initialState;
};

const likeQuestionSuccess = (state, action) => {
    const ratings = state.user.QuestionRatings;

    if (ratings) {
        const i = ratings.findIndex(
            (item) => item.QuestionID === action.questionID
        );

        if (i === -1) {
            ratings.push({
                QuestionID: action.questionID,
                IsLiked: true,
            });
        } else {
            ratings[i].IsLiked = true;
        }
    }

    return updateObject(state, {
        user: updateObject(state.user, {
            QuestionRatings: ratings,
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
    var ratings = state.user.QuestionRatings;

    if (ratings) {
        ratings = ratings.filter((item) => {
            return (
                item.QuestionID !== action.questionID && item.IsLiked !== true
            );
        });
    }

    return updateObject(state, {
        user: updateObject(state.user, {
            QuestionRatings: ratings,
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
    const ratings = state.user.QuestionRatings;

    if (ratings) {
        const i = ratings.findIndex(
            (item) => item.QuestionID === action.questionID
        );

        if (i === -1) {
            ratings.push({
                QuestionID: action.questionID,
                IsLiked: false,
            });
        } else {
            ratings[i].IsLiked = false;
        }
    }

    return updateObject(state, {
        user: updateObject(state.user, {
            QuestionRatings: ratings,
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
    var ratings = state.user.QuestionRatings;
    console.log(ratings);
    if (ratings) {
        ratings = ratings.filter(
            (item) =>
                item.QuestionID !== action.questionID && item.IsLiked !== false
        );

        console.log(ratings);
    }

    return updateObject(state, {
        user: updateObject(state.user, {
            QuestionRatings: ratings,
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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_LOGGED_IN_USER_START:
            return fetchLoggedInUserStart(state, action);
        case actionTypes.FETCH_LOGGED_IN_USER_SUCCESS:
            return fetchLoggedInUserSuccess(state, action);
        case actionTypes.FETCH_LOGGED_IN_USER_FAIL:
            return fetchLoggedInUserFail(state, action);
        case actionTypes.FETCH_LOGGED_IN_USER_RESET:
            return fetchLoggedInUserReset(state, action);
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
        default:
            return state;
    }
};

export default reducer;
