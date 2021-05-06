import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import Button from "react-bootstrap/Button";

import * as actions from "../../store/actions";
import * as queryConstants from "../../constants/query";
import UserListItem from "../../components/UserListItem";

import style from "./TopUsers.module.css";

const TopUsers = () => {
    const dispatch = useDispatch();

    const onUsersFetch = useCallback(
        (pageNumber, pageSize) =>
            dispatch(actions.fetchTopUsers(pageNumber, pageSize)),
        [dispatch]
    );

    const data = useSelector((state) => state.topUsers);

    const getNext = () => {
        onUsersFetch(
            parseInt(data.pageNumber) + 1 || queryConstants.DEFAULT_PAGE_NUMBER,
            data.pageSize || queryConstants.DEFAULT_PAGE_SIZE
        );
    };

    useEffect(() => {
        onUsersFetch(
            queryConstants.DEFAULT_PAGE_NUMBER,
            queryConstants.DEFAULT_PAGE_SIZE
        );
    }, [onUsersFetch]);

    if (!data.users) {
        return (
            <div className={style.Loader}>
                <Loader
                    type="TailSpin"
                    color="#00BFFF"
                    height={180}
                    width={180}
                />
            </div>
        );
    }

    return (
        <div className={style.TopUsers}>
            {data.users.map((user) => {
                return (
                    <UserListItem
                        key={user.id + new Date().getTime()}
                        {...user}
                    />
                );
            })}
            {data.nextPage && (
                <Button variant="dark" onClick={() => getNext()}>
                    Load more
                </Button>
            )}
        </div>
    );
};

export default TopUsers;
