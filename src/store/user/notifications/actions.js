export const ADD_NOTIFICATION = "ADD_NOTIFICATION";

export const addNotificationAction = (notification) => {
    return {
        type: ADD_NOTIFICATION,
        notification: notification,
    };
};
