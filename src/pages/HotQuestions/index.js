import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-loader-spinner";

import * as actions from "../../store/questions/hotQuestions";
import * as queryConstants from "../../constants/query";
import QuestionList from "../../components/QuestionList";

import style from "./HotQuestions.module.css";
import NewQuestion from "../../components/NewQuestion";

const HotQuestions = () => {
    const dispatch = useDispatch();

    const onQuestionsFetch = useCallback(
        (pageNumber, pageSize) =>
            dispatch(actions.fetchHotQuestions(pageNumber, pageSize)),
        [dispatch]
    );

    const data = useSelector((state) => state.questions);
    const auth = useSelector((state) => state.user);

    const getNext = () => {
        onQuestionsFetch(
            parseInt(data.pageNumber) + 1 || queryConstants.DEFAULT_PAGE_NUMBER,
            data.pageSize || queryConstants.DEFAULT_PAGE_SIZE
        );
    };

    useEffect(() => {
        onQuestionsFetch(
            queryConstants.DEFAULT_PAGE_NUMBER,
            queryConstants.DEFAULT_PAGE_SIZE
        );
    }, [onQuestionsFetch]);

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
            <div className={style.HotQuestions}>
                {auth.token && <NewQuestion />}
            </div>
            <QuestionList {...data} getNext={getNext} />
        </>
    );
};

export default HotQuestions;
