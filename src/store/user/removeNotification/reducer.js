import updateObject from "../../../utils/updateObject";

export const removeNotificationStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true,
    });
};

export const removeNotificationSuccess = (state, action) => {
    var answerNotifications = state.me.answerNotifications.filter((notification) => {
        return notification.id !== action.notificationId;
    });

    return updateObject(state, {
        me: updateObject(state.me, {
            answerNotifications: answerNotifications,
        }),
        error: null,
        loading: false,
    });
};

export const removeNotificationFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};
