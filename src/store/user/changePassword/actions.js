import http from "../../../http";
import * as endpointConstants from "../../../constants/endpoints";

export const CHANGE_PASSWORD_START = "CHANGE_PASSWORD_START";
export const CHANGE_PASSWORD_SUCCESS = "CHANGE_PASSWORD_SUCCESS";
export const CHANGE_PASSWORD_FAIL = "CHANGE_PASSWORD_FAIL";

export const changePasswordActionStart = () => {
    return {
        type: CHANGE_PASSWORD_START,
    };
};

export const changePasswordActionSuccess = () => {
    return {
        type: CHANGE_PASSWORD_SUCCESS,
    };
};

export const changePasswordActionFail = (error) => {
    return {
        type: CHANGE_PASSWORD_FAIL,
        error: error,
    };
};

export const changePasswordAction = (password, newPassword) => {
    return (dispatch) => {
        dispatch(changePasswordActionStart());

        const authData = {
            password: password,
            newPassword: newPassword,
        };

        http.post(endpointConstants.CHANGE_PASSWORD_ENDPOINT, authData)
            .then((response) => {
                dispatch(changePasswordActionSuccess());
            })
            .catch((err) => {
                dispatch(changePasswordActionFail(err));
            });
    };
};
