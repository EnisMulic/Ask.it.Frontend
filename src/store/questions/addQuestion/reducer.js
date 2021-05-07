import updateObject from "../../../utils/updateObject";
import * as filters from "../filters";

export const addQuestionStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true,
    });
};

export const addQuestionSuccess = (state, action) => {
    if (state.filter === filters.USER || state.filter === filters.LATEST) {
        var questions = [action.question, ...state.questions];

        return updateObject(state, {
            questions: questions,
            error: null,
            loading: false,
        });
    }

    return updateObject(state, {
        error: null,
        loading: false,
    });
};

export const addQuestionFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};
