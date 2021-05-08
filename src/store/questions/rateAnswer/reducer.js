import updateObject from "../../../utils/updateObject";

export const likeAnswerSuccess = (state, action) => {
    var answers = state.question.answers.map((answer) => {
        if (answer.id === action.answerId) {
            answer.likes += 1;

            if (action.isDisliked) {
                answer.dislikes -= 1;
            }
        }

        return answer;
    });

    return updateObject(state, {
        question: updateObject(state.question, {
            answers: answers,
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
    var answers = state.question.answers.map((answer) => {
        if (answer.id === action.answerId) {
            answer.likes -= 1;
        }

        return answer;
    });

    return updateObject(state, {
        question: updateObject(state.question, {
            answers: answers,
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
    var answers = state.question.answers.map((answer) => {
        if (answer.id === action.answerId) {
            answer.dislikes += 1;

            if (action.isLiked) {
                answer.likes -= 1;
            }
        }

        return answer;
    });

    return updateObject(state, {
        question: updateObject(state.question, {
            answers: answers,
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
    var answers = state.question.answers.map((answer) => {
        if (answer.id === action.answerId) {
            answer.dislikes -= 1;
        }

        return answer;
    });

    return updateObject(state, {
        question: updateObject(state.question, {
            answers: answers,
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
