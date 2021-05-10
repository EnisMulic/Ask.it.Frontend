import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import NavDropdown from "react-bootstrap/NavDropdown";
import { Bell } from "react-feather";

import * as actions from "../../store/user/addNotification";
import { connect } from "../../websocket";

import NotificationListItem from "../NotificationListItem";

import style from "./NotificationList.module.css";

const NotificationList = () => {
    const dispatch = useDispatch();

    const loggedInUser = useSelector((state) => state.user.me);
    var notifications = [];

    if (loggedInUser) {
        notifications = loggedInUser.answerNotifications;
    }

    const addNotification = useCallback(
        (notification) => dispatch(actions.addNotificationAction(notification)),
        [dispatch]
    );

    useEffect(() => {
        connect((msg) => {
            var temp = JSON.parse(msg.data);
            var data = JSON.parse(temp.body);
            addNotification(data);
        });
    }, [addNotification]);

    const navDropdownTitle = (
        <span className={style.IconSpan}>
            <Bell className={style.Icon}> Dropdown </Bell>
            <div>{notifications.length > 0 ? notifications.length : null}</div>
        </span>
    );

    return (
        <NavDropdown
            id="basic-nav-dropdown"
            className={style.Dropdown}
            title={navDropdownTitle}
        >
            {notifications.map((notification) => {
                return (
                    <NotificationListItem
                        {...notification}
                        key={notification.id}
                    />
                );
            })}
        </NavDropdown>
    );
};

export default NotificationList;
