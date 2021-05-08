import updateObject from "../../../utils/updateObject";

export const fetchQuestionStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true,
    });
};

export const fetchQuestionSuccess = (state, action) => {
    return updateObject(state, {
        question: action.question,
    });
};

export const fetchQuestionFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};
