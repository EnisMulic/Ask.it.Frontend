export const ADD_NOTIFICATION = "ADD_NOTIFICATION";

export const addNotification = (notification) => {
    return {
        type: ADD_NOTIFICATION,
        notification: notification,
    };
};
