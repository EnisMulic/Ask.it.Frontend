import * as actionTypes from "../actions/actionTypes";
import updateObject from "../../utils/updateObject";

const initialState = {
    user: null,
    error: null,
    loading: false,
};

const addNotification = (state, action) => {
    const newNotifications = [
        ...state.user.answerNotifications,
        action.notification,
    ];

    return updateObject(state, {
        user: updateObject(state.user, {
            answerNotifications: newNotifications,
        }),
        loading: false,
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_NOTIFICATION:
            return addNotification(state, action);
        default:
            return state;
    }
};

export default reducer;
