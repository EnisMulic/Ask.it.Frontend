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
    const questions = [...state.questions, ...action.payload.Data];
    // console.log("Test ", questions);
    return updateObject(state, {
        questions: questions,
        pageNumber: action.payload.PageNumber,
        pageSize: action.payload.PageSize,
        nextPage: action.payload.NextPage,
        previousPage: action.payload.PreviousPage,
        firstPage: action.payload.FirstPage,
        lastPage: action.payload.LastPage,
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
