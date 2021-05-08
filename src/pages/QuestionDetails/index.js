import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "react-loader-spinner";

import * as actions from "../../store/questions/question";

import QuestionListItem from "../../components/QuestionListItem";
import Answer from "../../components/Answer";
import CreateAnswer from "../../components/CreateAnswer";

import style from "./QuestionDetails.module.css";

const QuestionDetails = (props) => {
    const { id } = useParams();

    const dispatch = useDispatch();

    const onQuestionFetch = useCallback(
        (id) => dispatch(actions.fetchQuestionAction(id)),
        [dispatch]
    );

    const question = useSelector((state) => state.questions.question);

    useEffect(() => {
        onQuestionFetch(id);
    }, [onQuestionFetch, id]);

    return (
        <div>
            {question ? (
                <>
                    <div className={style.Question}>
                        <QuestionListItem {...question} />
                        <CreateAnswer questionId={id} />
                        {question.answers &&
                            question.answers.map((answer) => {
                                return (
                                    <Answer
                                        {...answer}
                                        key={new Date().getTime() + answer.id}
                                    />
                                );
                            })}
                    </div>
                </>
            ) : (
                <div className={style.Loader}>
                    <Loader
                        type="TailSpin"
                        color="#00BFFF"
                        height={180}
                        width={180}
                    />
                </div>
            )}
        </div>
    );
};

export default QuestionDetails;
