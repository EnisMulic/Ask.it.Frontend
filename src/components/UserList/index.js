import React from "react";
import Button from "react-bootstrap/Button";

import UserListItem from "../UserListItem";

import style from "./UserList.module.css";

const UserList = (props) => {
    return (
        <div className={style.UserList}>
            {props.users.map((user) => {
                return (
                    <UserListItem
                        key={user.id + new Date().getTime()}
                        {...user}
                    />
                );
            })}
            {props.nextPage && (
                <Button variant="dark" onClick={() => props.getNext()}>
                    Load more
                </Button>
            )}
        </div>
    );
};

export default UserList;