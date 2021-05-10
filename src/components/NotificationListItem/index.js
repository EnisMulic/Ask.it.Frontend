import React, {useCallback} from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "react-feather";
import { useDispatch } from "react-redux";

import * as actions from "../../store/user/removeNotification";
import * as routeConstants from "../../constants/routes";

import style from "./NotificationListItem.module.css";

const NotificationListItem = (props) => {
    const { id, questionId, content } = props;


    const dispatch = useDispatch();
    const onNotificationRemove = useCallback(
        (id) => dispatch(actions.removeNotification(id)),
        [dispatch]
    );


    return (
        <div className={style.Wrapper}>
            <Link
                className={style.Item}
                to={routeConstants.QUESTION_DETAILS_ROUTE.replace(
                    ":id",
                    questionId
                )}
            >
                {content}
            </Link>
            <CheckCircle size="15" className={style.Icon} onClick={() => onNotificationRemove(id)}/>
        </div>
    );
};

export default NotificationListItem;
