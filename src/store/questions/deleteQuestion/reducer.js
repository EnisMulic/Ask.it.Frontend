import updateObject from "../../../utils/updateObject";

export const deleteQuestionStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true,
    });
};

export const deleteQuestionSuccess = (state, action) => {
    var questions = state.questions.filter((question) => {
        return question.id !== action.questionId;
    });

    return updateObject(state, {
        questions: questions,
        error: null,
        loading: false,
    });
};

export const deleteQuestionFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};
