import updateObject from "../../../utils/updateObject";

export const deleteAnswerStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true,
    });
};

export const deleteAnswerSuccess = (state, action) => {
    var answers = state.question.answers.filter(
        (answer) => answer.id !== action.answerId
    );

    return updateObject(state, {
        question: updateObject(state.question, {
            answers: answers,
        }),
        error: null,
        loading: false,
    });
};

export const deleteAnswerFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};
