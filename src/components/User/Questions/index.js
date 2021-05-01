import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import Button from "react-bootstrap/Button";

import * as actions from "../../../store/actions";
import * as queryConstants from "../../../constants/query";
import QuestionListItem from "../../QuestionListItem";

import style from "./Questions.module.css";
import NewQuestion from "../../NewQuestion";

const Questions = () => {
    const dispatch = useDispatch();

    const userID = useSelector((state) => state.loggedInUser.user.ID);

    const onQuestionsFetch = useCallback(
        (userID, pageNumber, pageSize) =>
            dispatch(actions.fetchUsersQuestions(userID, pageNumber, pageSize)),
        [dispatch]
    );

    const data = useSelector((state) => state.usersQuestions);
    const auth = useSelector((state) => state.auth);

    const getNext = () => {
        onQuestionsFetch(
            userID,
            parseInt(data.pageNumber) + 1 || queryConstants.DEFAULT_PAGE_NUMBER,
            data.pageSize || queryConstants.DEFAULT_PAGE_SIZE
        );
    };

    useEffect(() => {
        onQuestionsFetch(
            userID,
            queryConstants.DEFAULT_PAGE_NUMBER,
            queryConstants.DEFAULT_PAGE_SIZE
        );
    }, [onQuestionsFetch, userID]);

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
        <div className={style.Questions}>
            {auth.token && <NewQuestion />}
            {data.questions.map((question) => {
                return (
                    <QuestionListItem
                        key={question.ID + new Date().getTime()}
                        {...question}
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

export default Questions;
