import http from "../../../http";
import * as endpointConstants from "../../../constants/endpoints";

export const REMOVE_NOTIFICATION_START = "REMOVE_NOTIFICATION_START";
export const REMOVE_NOTIFICATION_SUCCESS = "REMOVE_NOTIFICATION_SUCCESS";
export const REMOVE_NOTIFICATION_FAIL = "REMOVE_NOTIFICATION_FAIL";

export const removeNotificationActionStart = () => {
    return {
        type: REMOVE_NOTIFICATION_START,
    };
};

export const removeNotificationActionSuccess = (notificationId) => {
    return {
        type: REMOVE_NOTIFICATION_SUCCESS,
        notificationId: notificationId,
    };
};

export const removeNotificationActionFail = (error) => {
    return {
        type: REMOVE_NOTIFICATION_FAIL,
        error: error
    };
};

export const removeNotification = (notificationId) => {
    return (dispatch) => {
        dispatch(removeNotificationActionStart());

        http.post(endpointConstants.MARK_NOTIFICATION_AS_READ.replace("{id}", notificationId))
            .then((response) => {
                dispatch(removeNotificationActionSuccess(notificationId));
            })
            .catch((err) => {
                dispatch(removeNotificationActionFail(err));
            });
    };
}