import * as actionTypes from "./actionTypes";
import http from "../../http";
import * as endpointConstants from "../../constants/endpoints";

export const fetchLoggedInUserStart = () => {
    return {
        type: actionTypes.FETCH_LOGGED_IN_USER_START,
    };
};

export const fetchLoggedInUserSuccess = (user) => {
    return {
        type: actionTypes.FETCH_LOGGED_IN_USER_SUCCESS,
        user: user,
    };
};

export const fetchLoggedInUserFail = (error) => {
    return {
        type: actionTypes.FETCH_LOGGED_IN_USER_FAIL,
        error: error,
    };
};

export const fetchLoggedInUserReset = () => {
    return {
        type: actionTypes.FETCH_LOGGED_IN_USER_RESET,
    };
};

export const fetchLoggedInUser = () => {
    return (dispatch) => {
        dispatch(fetchLoggedInUserStart());

        http.get(endpointConstants.GET_ME_ENDPOINT)
            .then((response) => {
                dispatch(fetchLoggedInUserSuccess(response.data.Data));
            })
            .catch((err) => {
                dispatch(fetchLoggedInUserFail(err));
            });
    };
};

export const likeQuestionSuccess = (questionID) => {
    return {
        type: actionTypes.LIKE_QUESTION_SUCCESS,
        questionID: questionID,
    };
};

export const likeQuestionFail = (error) => {
    return {
        type: actionTypes.LIKE_QUESTION_FAIL,
        error: error,
    };
};

export const likeQuestion = (questionID) => {
    return (dispatch) => {
        http.post(
            endpointConstants.LIKE_QUESTION_ENDPOINT.replace("{id}", questionID)
        )
            .then(() => {
                dispatch(likeQuestionSuccess(questionID));
            })
            .catch((err) => {
                dispatch(likeQuestionFail(err));
            });
    };
};

export const likeQuestionUndoSuccess = (questionID) => {
    return {
        type: actionTypes.LIKE_QUESTION_UNDO_SUCCESS,
        questionID: questionID,
    };
};

export const likeQuestionUndoFail = (error) => {
    return {
        type: actionTypes.LIKE_QUESTION_UNDO_FAIL,
        error: error,
    };
};

export const likeQuestionUndo = (questionID) => {
    return (dispatch) => {
        http.post(
            endpointConstants.LIKE_QUESTION_UNDO_ENDPOINT.replace(
                "{id}",
                questionID
            )
        )
            .then(() => {
                dispatch(likeQuestionUndoSuccess(questionID));
            })
            .catch((err) => {
                dispatch(likeQuestionUndoFail(err));
            });
    };
};

export const dislikeQuestionSuccess = (questionID) => {
    return {
        type: actionTypes.DISLIKE_QUESTION_SUCCESS,
        questionID: questionID,
    };
};

export const dislikeQuestionFail = (error) => {
    return {
        type: actionTypes.DISLIKE_QUESTION_FAIL,
        error: error,
    };
};

export const dislikeQuestion = (questionID) => {
    return (dispatch) => {
        http.post(
            endpointConstants.DISLIKE_QUESTION_ENDPOINT.replace(
                "{id}",
                questionID
            )
        )
            .then(() => {
                dispatch(dislikeQuestionSuccess(questionID));
            })
            .catch((err) => {
                dispatch(dislikeQuestionFail(err));
            });
    };
};

export const dislikeQuestionUndoSuccess = (questionID) => {
    return {
        type: actionTypes.DISLIKE_QUESTION_UNDO_SUCCESS,
        questionID: questionID,
    };
};

export const dislikeQuestionUndoFail = (error) => {
    return {
        type: actionTypes.DISLIKE_QUESTION_UNDO_FAIL,
        error: error,
    };
};

export const dislikeQuestionUndo = (questionID) => {
    return (dispatch) => {
        http.post(
            endpointConstants.DISLIKE_QUESTION_UNDO_ENDPOINT.replace(
                "{id}",
                questionID
            )
        )
            .then(() => {
                dispatch(dislikeQuestionUndoSuccess(questionID));
            })
            .catch((err) => {
                dispatch(dislikeQuestionUndoFail(err));
            });
    };
};

export const updateUserStart = () => {
    return {
        type: actionTypes.UPDATE_USER_START,
    };
};

export const updateUserSuccess = (FirstName, LastName, Email) => {
    return {
        type: actionTypes.UPDATE_USER_SUCCESS,
        FirstName: FirstName,
        LastName: LastName,
        Email: Email,
    };
};

export const updateUserFail = (error) => {
    return {
        type: actionTypes.UPDATE_USER_FAIL,
        error: error,
    };
};

export const updateUser = (firstName, lastName, email) => {
    return (dispatch) => {
        dispatch(updateUserStart());

        const authData = {
            email: email,
            firstName: firstName,
            lastName: lastName,
        };

        http.post(endpointConstants.UPDATE_USER_ENDPOINT, authData)
            .then((response) => {
                const { FirstName, LastName, Email } = response.data.Data;
                dispatch(updateUserSuccess(FirstName, LastName, Email));
            })
            .catch((err) => {
                dispatch(updateUserFail(err));
            });
    };
};

export const changePasswordStart = () => {
    return {
        type: actionTypes.CHANGE_PASSWORD_START,
    };
};

export const changePasswordSuccess = () => {
    return {
        type: actionTypes.CHANGE_PASSWORD_SUCCESS,
    };
};

export const changePasswordFail = (error) => {
    return {
        type: actionTypes.CHANGE_PASSWORD_FAIL,
        error: error,
    };
};

export const changePassword = (password, newPassword) => {
    return (dispatch) => {
        dispatch(updateUserStart());

        const authData = {
            password: password,
            newPassword: newPassword,
        };

        http.post(endpointConstants.CHANGE_PASSWORD_ENDPOINT, authData)
            .then((response) => {
                dispatch(updateUserSuccess());
            })
            .catch((err) => {
                dispatch(updateUserFail(err));
            });
    };
};

export const addNotification = (notification) => {
    return {
        type: actionTypes.ADD_NOTIFICATION,
        notification: notification,
    };
};
