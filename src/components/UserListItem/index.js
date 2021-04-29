import React from "react";
import { MessageSquare, User } from "react-feather";

import style from "./UserListItem.module.css";

const UserListItem = (props) => {
    console.log(props);
    return (
        <div className={style.User}>
            <div className={style.Wrapper}>
                <User size="3rem" strokeWidth="1.5px" />
                <div>
                    <span className={style.Info}>{props.Email}</span>
                </div>
            </div>
            <div className={style.Wrapper}>
                <div>
                    <MessageSquare className={style.MessageIcon} />
                    <span className={style.Text}>
                        Answers: {props.AnswerCount}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default UserListItem;
