import * as auth from "./auth";
import * as me from "./me";
import * as pw from "./changePassword";
import * as update from "./update";
import * as rateQuestionActions from "../common/rateQuestion";
import * as rateQuestion from "./rateQuestion/reducer";
import * as rateAnswerActions from "../common/rateAnswer";
import * as rateAnswer from "./rateAnswer/reducer";
import * as notification from "./notifications";

const initialState = {
    me: null,
    token: null,
    refreshToken: null,
    error: null,
    loading: false,
    authRedirectPath: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case auth.AUTH_START:
            return auth.authStart(state, action);
        case auth.AUTH_SUCCESS:
            return auth.authSuccess(state, action);
        case auth.AUTH_FAIL:
            return auth.authFail(state, action);
        case auth.LOGOUT:
            return auth.logout(state, action);
        case auth.SET_AUTH_REDIRECT_PATH:
            return auth.setAuthRedirectPath(state, action);
        case me.FETCH_ME_START:
            return me.fetchMeStart(state, action);
        case me.FETCH_ME_SUCCESS:
            return me.fetchMeSuccess(state, action);
        case me.FETCH_ME_FAIL:
            return me.fetchMeFail(state, action);
        case me.FETCH_ME_RESET:
            return me.fetchMeReset(state, action);
        case pw.CHANGE_PASSWORD_START:
            return pw.changePasswordStart(state, action);
        case pw.CHANGE_PASSWORD_SUCCESS:
            return pw.changePasswordSuccess(state, action);
        case pw.CHANGE_PASSWORD_FAIL:
            return pw.changePasswordFail(state, action);
        case update.UPDATE_USER_START:
            return update.updateUserStart(state, action);
        case update.UPDATE_USER_SUCCESS:
            return update.updateUserSuccess(state, action);
        case update.UPDATE_USER_FAIL:
            return update.updateUserFail(state, action);
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
        case notification.ADD_NOTIFICATION:
            return notification.addNotification(state, action);
        default:
            return state;
    }
};

export default reducer;
