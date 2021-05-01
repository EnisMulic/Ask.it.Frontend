import React, { useCallback, useEffect } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import { Bell } from "react-feather";
import { connect } from "../../websocket";

import style from "./Notifications.module.css";

const Notifications = () => {
    const dispatch = useDispatch();

    const loggedInUser = useSelector((state) => state.loggedInUser.user);
    var notifications = [];

    if (loggedInUser) {
        notifications = loggedInUser.AnswerNotifications;
    }

    const addNotification = useCallback(
        (notification) => dispatch(actions.addNotification(notification)),
        [dispatch]
    );

    useEffect(() => {
        connect((msg) => {
            var temp = JSON.parse(msg.data);
            var data = JSON.parse(temp.body);
            addNotification(data);
        });
    }, []);

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
                    <NavDropdown.Item href="#" key={notification.ID}>
                        {notification.Content}
                    </NavDropdown.Item>
                );
            })}
        </NavDropdown>
    );
};

export default Notifications;
