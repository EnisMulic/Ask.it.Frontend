import updateObject from "../../../utils/updateObject";

export const likeQuestionSuccess = (state, action) => {

    var questions = state.questions.map((question) => {
        if (question.id === action.questionId) {
            question.likes += 1;

            if (action.isDisliked) {
                question.dislikes -= 1;
            }
        }

        return question;
    });

    return updateObject(state, {
        questions: questions,
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
    var questions = state.questions.map((question) => {
        if (question.id === action.questionId) {
            question.likes -= 1;
        }

        return question;
    });

    return updateObject(state, {
        questions: questions,
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
    var questions = state.questions.map((question) => {
        if (question.id === action.questionId) {
            question.dislikes += 1;

            if (action.isLiked) {
                question.likes -= 1;
            }
        }

        return question;
    });

    return updateObject(state, {
        questions: questions,
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

    var questions = state.questions.map((question) => {
        if (question.id === action.questionId) {
            question.dislikes -= 1;
        }

        return question;
    });

    return updateObject(state, {
        questions: questions,
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
