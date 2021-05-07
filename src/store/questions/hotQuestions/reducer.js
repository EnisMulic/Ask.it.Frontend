import updateObject from "../../../utils/updateObject";

export const fetchHotQuestionsStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true,
    });
};

export const fetchHotQuestionsSuccess = (state, action) => {
    var questions = [...state.questions];

    if (
        action.filter === state.filter &&
        action.payload.pageNumber !== state.pageNumber
    ) {
        questions = [...questions, ...action.payload.data];
    } else {
        questions = [...action.payload.data];
    }

    return updateObject(state, {
        questions: questions,
        filter: action.filter,
        pageNumber: action.payload.pageNumber,
        pageSize: action.payload.pageSize,
        nextPage: action.payload.nextPage,
        previousPage: action.payload.previousPage,
        firstPage: action.payload.firstPage,
        lastPage: action.payload.lastPage,
        error: null,
        loading: false,
    });
};

export const fetchHotQuestionsFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};
