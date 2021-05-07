import React from "react";
import Button from "react-bootstrap/Button";

import QuestionListItem from "../QuestionListItem";

import style from "./QuestionList.module.css";

const QuestionList = (props) => {
    return (
        <div className={style.QuestionList}>
            {props.questions.map((question) => {
                return (
                    <QuestionListItem
                        key={question.id + new Date().getTime()}
                        {...question}
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

export default QuestionList;
