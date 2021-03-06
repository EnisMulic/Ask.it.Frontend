export const API_ROOT = "/api";
export const GET_ME_ENDPOINT = API_ROOT + "/me";

export const AUTH_BASE_ENDPOINT = API_ROOT + "/auth";
export const LOGIN_ENDPOINT = AUTH_BASE_ENDPOINT + "/login";
export const REGISTER_ENDPOINT = AUTH_BASE_ENDPOINT + "/register";

export const USERS_BASE_ENDPOINT = API_ROOT + "/users";
export const USERS_ENDPOINT = USERS_BASE_ENDPOINT;
export const GET_USER_BY_ID_ENDPOINT = USERS_BASE_ENDPOINT + "/{id}";
export const CHANGE_PASSWORD_ENDPOINT =
    USERS_BASE_ENDPOINT + "/change-password";
export const UPDATE_USER_ENDPOINT = USERS_BASE_ENDPOINT;
export const GET_TOP_USERS_ENDPOINT = USERS_BASE_ENDPOINT + "-top";
export const GET_USERS_QUESTIONS_ENDPOINT =
    USERS_BASE_ENDPOINT + "/{id}/questions";

export const QUESTIONS_BASE_ENDPOINT = API_ROOT + "/questions";
export const GET_QUESTIONS_ENDPOINT = QUESTIONS_BASE_ENDPOINT;
export const GET_HOT_QUESTIONS_ENDPOINT = QUESTIONS_BASE_ENDPOINT + "-hot";
export const GET_QUESTION_BY_ID_ENDPOINT = QUESTIONS_BASE_ENDPOINT + "/{id}";
export const CREATE_QUESTION_ENDPOINT = QUESTIONS_BASE_ENDPOINT;
export const DELETE_QUESTION_ENDPOINT = QUESTIONS_BASE_ENDPOINT + "/{id}";
export const LIKE_QUESTION_ENDPOINT = QUESTIONS_BASE_ENDPOINT + "/{id}/like";
export const LIKE_QUESTION_UNDO_ENDPOINT =
    QUESTIONS_BASE_ENDPOINT + "/{id}/like/undo";
export const DISLIKE_QUESTION_ENDPOINT =
    QUESTIONS_BASE_ENDPOINT + "/{id}/dislike";
export const DISLIKE_QUESTION_UNDO_ENDPOINT =
    QUESTIONS_BASE_ENDPOINT + "/{id}/dislike/undo";
export const CREATE_QUESTION_ANSWER_ENDPOINT =
    QUESTIONS_BASE_ENDPOINT + "/{id}/answers";

export const ANSWER_BASE_ENDPOINT = API_ROOT + "/answers";
export const UPDATE_ANSWER_ENDPOINT = ANSWER_BASE_ENDPOINT + "/{id}";
export const DELETE_ANSWER_ENDPOINT = ANSWER_BASE_ENDPOINT + "/{id}";
export const LIKE_ANSWER_ENDPOINT = ANSWER_BASE_ENDPOINT + "/{id}/like";
export const LIKE_ANSWER_UNDO_ENDPOINT =
    ANSWER_BASE_ENDPOINT + "/{id}/like/undo";
export const DISLIKE_ANSWER_ENDPOINT = ANSWER_BASE_ENDPOINT + "/{id}/dislike";
export const DISLIKE_ANSWER_UNDO_ENDPOINT =
    ANSWER_BASE_ENDPOINT + "/{id}/dislike/undo";

export const MARK_NOTIFICATION_AS_READ = API_ROOT + "/answer-notifications/{id}";

export const NOTIFICATIONS_ENDPOINT = "/ws/notifications/{id}";
