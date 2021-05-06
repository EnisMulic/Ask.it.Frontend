import * as actionTypes from "../actions/actionTypes";
import updateObject from "../../utils/updateObject";

const initialState = {
    questions: [],
    error: null,
    loading: false,
    pageNumber: null,
    pageSize: null,
    nextPage: null,
    previousPage: null,
    firstPage: null,
    lastPage: null,
};

const fetchLatestQuestionsStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true,
    });
};

const fetchLatestQuestionsSuccess = (state, action) => {
    var questions = [...state.questions];

    if (action.payload.PageNumber !== state.pageNumber) {
        questions = [...questions, ...action.payload.data];
    } else {
        questions = [...action.payload.data];
    }

    return updateObject(state, {
        questions: questions,
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

const fetchLatestQuestionsFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_LATEST_QUESTIONS_START:
            return fetchLatestQuestionsStart(state, action);
        case actionTypes.FETCH_LATEST_QUESTIONS_SUCCESS:
            return fetchLatestQuestionsSuccess(state, action);
        case actionTypes.FETCH_LATEST_QUESTIONS_FAIL:
            return fetchLatestQuestionsFail(state, action);
        default:
            return state;
    }
};

export default reducer;
