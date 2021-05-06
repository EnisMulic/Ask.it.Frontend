import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "react-loader-spinner";

import http from "../../http";
import * as endpointConstants from "../../constants/endpoints";
import QuestionListItem from "../../components/QuestionListItem";
import Answer from "../../components/Answer";

import CreateAnswer from "../../components/CreateAnswer";

import style from "./QuestionDetails.module.css";

const QuestionDetails = (props) => {
    const { id } = useParams();
    const [question, setQuestion] = useState();

    useEffect(() => {
        http.get(
            endpointConstants.GET_QUESTION_BY_ID_ENDPOINT.replace("{id}", id)
        )
            .then((response) => {
                setQuestion(response.data.data);
            })
            .catch((err) => console.log(err));
        return () => {
            setQuestion({});
        };
    }, [id]);

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
