import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-loader-spinner";

import * as actions from "../../store/questions/usersQuestions";
import * as queryConstants from "../../constants/query";
import QuestionList from "../../components/QuestionList";

import style from "./YourQuestions.module.css";
import NewQuestion from "../../components/NewQuestion";

const YourQuestions = () => {
    const dispatch = useDispatch();

    const userId = useSelector((state) => state.loggedInUser.user.id);

    const onQuestionsFetch = useCallback(
        (userId, pageNumber, pageSize) =>
            dispatch(actions.fetchUsersQuestions(userId, pageNumber, pageSize)),
        [dispatch]
    );

    const data = useSelector((state) => state.questions);
    const auth = useSelector((state) => state.auth);

    const getNext = () => {
        onQuestionsFetch(
            userId,
            parseInt(data.pageNumber) + 1 || queryConstants.DEFAULT_PAGE_NUMBER,
            data.pageSize || queryConstants.DEFAULT_PAGE_SIZE
        );
    };

    useEffect(() => {
        onQuestionsFetch(
            userId,
            queryConstants.DEFAULT_PAGE_NUMBER,
            queryConstants.DEFAULT_PAGE_SIZE
        );
    }, [onQuestionsFetch, userId]);

    if (!data.questions) {
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
        <>
            <div className={style.YourQuestions}>
                {auth.token && <NewQuestion />}
            </div>
            <QuestionList {...data} getNext={getNext} />
        </>
    );
};

export default YourQuestions;
