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

const fetchHotQuestionsStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true,
    });
};

const fetchHotQuestionsSuccess = (state, action) => {
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

const fetchHotQuestionsFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_HOT_QUESTIONS_START:
            return fetchHotQuestionsStart(state, action);
        case actionTypes.FETCH_HOT_QUESTIONS_SUCCESS:
            return fetchHotQuestionsSuccess(state, action);
        case actionTypes.FETCH_HOT_QUESTIONS_FAIL:
            return fetchHotQuestionsFail(state, action);
        default:
            return state;
    }
};

export default reducer;
