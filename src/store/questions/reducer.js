import * as latest from "./latestQuestions";
import * as hot from "./hotQuestions";
import * as user from "./usersQuestions";
import * as add from "./addQuestion";
import * as rateQuestionActions from "../common/rateQuestion";
import * as rateQuestion from "./rateQuestion/reducer";
import * as rateAnswerActions from "../common/rateAnswer";
import * as rateAnswer from "./rateAnswer/reducer";
import * as question from "./question";
import * as deleteQuestion from "./deleteQuestion";

const initialState = {
    questions: [],
    question: null,
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
        case deleteQuestion.DELETE_QUESTION_START:
            return deleteQuestion.deleteQuestionStart(state, action);
        case deleteQuestion.DELETE_QUESTION_SUCCESS:
            return deleteQuestion.deleteQuestionSuccess(state, action);
        case deleteQuestion.DELETE_QUESTION_FAIL:
            return deleteQuestion.deleteQuestionFail(state, action);
        case rateQuestionActions.LIKE_QUESTION_SUCCESS:
            return rateQuestion.likeQuestionSuccess(state, action);
        case rateQuestionActions.LIKE_QUESTION_FAIL:
            return rateQuestion.likeQuestionFail(state, action);
        case rateQuestionActions.LIKE_QUESTION_UNDO_SUCCESS:
            return rateQuestion.likeQuestionUndoSuccess(state, action);
        case rateQuestionActions.LIKE_QUESTION_UNDO_FAIL:
            return rateQuestion.likeQuestionUndoFail(state, action);
        case rateQuestionActions.DISLIKE_QUESTION_SUCCESS:
            return rateQuestion.dislikeQuestionSuccess(state, action);
        case rateQuestionActions.DISLIKE_QUESTION_FAIL:
            return rateQuestion.dislikeQuestionFail(state, action);
        case rateQuestionActions.DISLIKE_QUESTION_UNDO_SUCCESS:
            return rateQuestion.dislikeQuestionUndoSuccess(state, action);
        case rateQuestionActions.DISLIKE_QUESTION_UNDO_FAIL:
            return rateQuestion.dislikeQuestionUndoFail(state, action);
        case rateAnswerActions.LIKE_ANSWER_SUCCESS:
            return rateAnswer.likeAnswerSuccess(state, action);
        case rateAnswerActions.LIKE_ANSWER_FAIL:
            return rateAnswer.likeAnswerFail(state, action);
        case rateAnswerActions.LIKE_ANSWER_UNDO_SUCCESS:
            return rateAnswer.likeAnswerUndoSuccess(state, action);
        case rateAnswerActions.LIKE_ANSWER_UNDO_FAIL:
            return rateAnswer.likeAnswerUndoFail(state, action);
        case rateAnswerActions.DISLIKE_ANSWER_SUCCESS:
            return rateAnswer.dislikeAnswerSuccess(state, action);
        case rateAnswerActions.DISLIKE_ANSWER_FAIL:
            return rateAnswer.dislikeAnswerFail(state, action);
        case rateAnswerActions.DISLIKE_ANSWER_UNDO_SUCCESS:
            return rateAnswer.dislikeAnswerUndoSuccess(state, action);
        case rateAnswerActions.DISLIKE_ANSWER_UNDO_FAIL:
            return rateAnswer.dislikeAnswerUndoFail(state, action);
        case question.FETCH_QUESTION_START:
            return question.fetchQuestionStart(state, action);
        case question.FETCH_QUESTION_SUCCESS:
            return question.fetchQuestionSuccess(state, action);
        case question.FETCH_QUESTION_FAIL:
            return question.fetchQuestionFail(state, action);
        default:
            return state;
    }
};

export default reducer;
