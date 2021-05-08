import updateObject from "../../../utils/updateObject";

export const likeAnswerSuccess = (state, action) => {
    const ratings = state.me.questionRatings;

    if (ratings) {
        const i = ratings.findIndex(
            (item) => item.answerId === action.answerId
        );

        if (i === -1) {
            ratings.push({
                answerId: action.answerId,
                isLiked: true,
            });
        } else {
            ratings[i].isLiked = true;
        }
    }

    return updateObject(state, {
        me: updateObject(state.me, {
            answerRatings: ratings,
        }),
        error: null,
        loading: false,
    });
};

export const likeAnswerFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};

export const likeAnswerUndoSuccess = (state, action) => {
    var ratings = state.me.answerRatings;

    if (ratings) {
        ratings = ratings.filter((item) => {
            return item.answerId !== action.answerId && item.isLiked !== true;
        });
    }

    return updateObject(state, {
        me: updateObject(state.me, {
            answerRatings: ratings,
        }),
        error: null,
        loading: false,
    });
};

export const likeAnswerUndoFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};

export const dislikeAnswerSuccess = (state, action) => {
    const ratings = state.me.answerRatings;

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
        me: updateObject(state.me, {
            answerRatings: ratings,
        }),
        error: null,
        loading: false,
    });
};

export const dislikeAnswerFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};

export const dislikeAnswerUndoSuccess = (state, action) => {
    var ratings = state.me.answerRatings;

    if (ratings) {
        ratings = ratings.filter(
            (item) =>
                item.answerId !== action.answerId && item.isLiked !== false
        );
    }

    return updateObject(state, {
        me: updateObject(state.me, {
            answerRatings: ratings,
        }),
        error: null,
        loading: false,
    });
};

export const dislikeAnswerUndoFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};
