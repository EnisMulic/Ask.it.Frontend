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

const fetchUsersQuestionsStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true,
    });
};

const fetchUsersQuestionsSuccess = (state, action) => {
    var questions = [...state.questions];

    if (action.payload.PageNumber !== state.pageNumber) {
        questions = [...questions, ...action.payload.Data];
    } else {
        questions = [...action.payload.Data];
    }

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

const fetchUsersQuestionsFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};

const addQuestionStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true,
    });
};

const addQuestionSuccess = (state, action) => {
    var questions = [action.question, ...state.questions];

    return updateObject(state, {
        questions: questions,
        error: null,
        loading: false,
    });
};

const addQuestionFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USERS_QUESTIONS_START:
            return fetchUsersQuestionsStart(state, action);
        case actionTypes.FETCH_USERS_QUESTIONS_SUCCESS:
            return fetchUsersQuestionsSuccess(state, action);
        case actionTypes.FETCH_USERS_QUESTIONS_FAIL:
            return fetchUsersQuestionsFail(state, action);
        case actionTypes.ADD_QUESTION_START:
            return addQuestionStart(state, action);
        case actionTypes.ADD_QUESTION_SUCCESS:
            return addQuestionSuccess(state, action);
        case actionTypes.ADD_QUESTION_FAIL:
            return addQuestionFail(state, action);
        default:
            return state;
    }
};

export default reducer;
