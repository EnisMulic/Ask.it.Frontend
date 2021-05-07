import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-loader-spinner";

import * as actions from "../../store/users/topUsers";
import * as queryConstants from "../../constants/query";
import UserList from "../../components/UserList";

import style from "./TopUsers.module.css";

const TopUsers = () => {
    const dispatch = useDispatch();

    const onUsersFetch = useCallback(
        (pageNumber, pageSize) =>
            dispatch(actions.fetchTopUsers(pageNumber, pageSize)),
        [dispatch]
    );

    const data = useSelector((state) => state.users);

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
            <UserList {...data} getNext={getNext} />
        </div>
    );
};

export default TopUsers;
