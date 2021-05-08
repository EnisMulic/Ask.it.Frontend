import updateObject from "../../../utils/updateObject";

export const likeQuestionSuccess = (state, action) => {
    const ratings = state.me.questionRatings;

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
            ratings[i].isLiked = true;
        }
    }

    return updateObject(state, {
        me: updateObject(state.me, {
            questionRatings: ratings,
        }),
        error: null,
        loading: false,
    });
};

export const likeQuestionFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};

export const likeQuestionUndoSuccess = (state, action) => {
    var ratings = state.me.questionRatings;

    if (ratings) {
        ratings = ratings.filter((item) => {
            return (
                item.questionId !== action.questionId && item.isLiked !== true
            );
        });
    }

    return updateObject(state, {
        me: updateObject(state.me, {
            questionRatings: ratings,
        }),
        error: null,
        loading: false,
    });
};

export const likeQuestionUndoFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};

export const dislikeQuestionSuccess = (state, action) => {
    const ratings = state.me.questionRatings;

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
        me: updateObject(state.me, {
            questionRatings: ratings,
        }),
        error: null,
        loading: false,
    });
};

export const dislikeQuestionFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};

export const dislikeQuestionUndoSuccess = (state, action) => {
    var ratings = state.me.questionRatings;

    if (ratings) {
        ratings = ratings.filter(
            (item) =>
                item.questionId !== action.questionId && item.isLiked !== false
        );
    }

    return updateObject(state, {
        me: updateObject(state.me, {
            questionRatings: ratings,
        }),
        error: null,
        loading: false,
    });
};

export const dislikeQuestionUndoFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};
