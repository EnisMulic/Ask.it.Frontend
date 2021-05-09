import updateObject from "../../../utils/updateObject";

export const addAnswerStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true,
    });
};

export const addAnswerSuccess = (state, action) => {
    var answers = [...state.question.answers, action.answer];

    return updateObject(state, {
        question: updateObject(state.question, {
            answers: answers,
        }),
        error: null,
        loading: false,
    });
};

export const addAnswerFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};
