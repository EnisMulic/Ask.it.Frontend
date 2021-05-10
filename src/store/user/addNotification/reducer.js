import updateObject from "../../../utils/updateObject";

export const addNotification = (state, action) => {
    const newNotifications = [
        ...state.me.answerNotifications,
        action.notification,
    ];

    return updateObject(state, {
        me: updateObject(state.me, {
            answerNotifications: newNotifications,
        }),
        loading: false,
    });
};
