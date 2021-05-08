import http from "../../../http";
import * as endpointConstants from "../../../constants/endpoints";

export const UPDATE_USER_START = "UPDATE_USER_START";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAIL = "UPDATE_USER_FAIL";

export const updateUserActionStart = () => {
    return {
        type: UPDATE_USER_START,
    };
};

export const updateUserActionSuccess = (firstName, lastName, email) => {
    return {
        type: UPDATE_USER_SUCCESS,
        firstName: firstName,
        lastName: lastName,
        email: email,
    };
};

export const updateUserActionFail = (error) => {
    return {
        type: UPDATE_USER_FAIL,
        error: error,
    };
};

export const updateUserAction = (firstName, lastName, email) => {
    return (dispatch) => {
        dispatch(updateUserActionStart());

        const authData = {
            email: email,
            firstName: firstName,
            lastName: lastName,
        };

        http.post(endpointConstants.UPDATE_USER_ENDPOINT, authData)
            .then((response) => {
                const { firstName, lastName, email } = response.data.data;
                dispatch(updateUserActionSuccess(firstName, lastName, email));
            })
            .catch((err) => {
                dispatch(updateUserActionFail(err));
            });
    };
};
