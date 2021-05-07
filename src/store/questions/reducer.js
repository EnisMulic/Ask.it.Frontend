import * as latest from "./latestQuestions";
import * as hot from "./hotQuestions";
import * as user from "./usersQuestions";
import * as add from "./addQuestion";

const initialState = {
    questions: [],
    type: null,
    error: null,
    loading: false,
    pageNumber: null,
    pageSize: null,
    nextPage: null,
    previousPage: null,
    firstPage: null,
    lastPage: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case latest.FETCH_LATEST_QUESTIONS_START:
            return latest.fetchLatestQuestionsStart(state, action);
        case latest.FETCH_LATEST_QUESTIONS_SUCCESS:
            return latest.fetchLatestQuestionsSuccess(state, action);
        case latest.FETCH_LATEST_QUESTIONS_FAIL:
            return latest.fetchLatestQuestionsFail(state, action);
        case hot.FETCH_HOT_QUESTIONS_START:
            return hot.fetchHotQuestionsStart(state, action);
        case hot.FETCH_HOT_QUESTIONS_SUCCESS:
            return hot.fetchHotQuestionsSuccess(state, action);
        case hot.FETCH_HOT_QUESTIONS_FAIL:
            return hot.fetchHotQuestionsFail(state, action);
        case user.FETCH_USERS_QUESTIONS_START:
            return user.fetchUsersQuestionsStart(state, action);
        case user.FETCH_USERS_QUESTIONS_SUCCESS:
            return user.fetchUsersQuestionsSuccess(state, action);
        case user.FETCH_USERS_QUESTIONS_FAIL:
            return user.fetchUsersQuestionsFail(state, action);
        case add.ADD_QUESTION_START:
            return add.addQuestionStart(state, action);
        case add.ADD_QUESTION_SUCCESS:
            return add.addQuestionSuccess(state, action);
        case add.ADD_QUESTION_FAIL:
            return add.addQuestionFail(state, action);
        default:
            return state;
    }
};

export default reducer;
