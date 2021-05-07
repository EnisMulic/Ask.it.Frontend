import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThumbsUp, ThumbsDown } from "react-feather";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

import * as actions from "../../store/actions";

import style from "./QuestionListItem.module.css";

import * as routeConstants from "../../constants/routes";
import DeleteQuestion from "../DeleteQuestion";

const QuestionListItem = (props) => {
    const { id, content, likes, dislikes, user } = props;
    const loggedInUser = useSelector((state) => state.user.me);
    const dispatch = useDispatch();

    const onLikeQuestion = useCallback(
        (questionId) => dispatch(actions.likeQuestion(questionId)),
        [dispatch]
    );
    const onLikeQuestionUndo = useCallback(
        (questionId) => dispatch(actions.likeQuestionUndo(questionId)),
        [dispatch]
    );

    const onDislikeQuestion = useCallback(
        (questionId) => dispatch(actions.dislikeQuestion(questionId)),
        [dispatch]
    );
    const onDislikeQuestionUndo = useCallback(
        (questionId) => dispatch(actions.dislikeQuestionUndo(questionId)),
        [dispatch]
    );

    var thumbsUp = <ThumbsUp size="21" />;

    if (loggedInUser !== null) {
        if (
            loggedInUser.questionRatings.find(
                (item) => item.questionId === id && item.isLiked === true
            )
        ) {
            thumbsUp = (
                <ThumbsUp
                    size="21"
                    fill={"#828282"}
                    onClick={() => onLikeQuestionUndo(id)}
                />
            );
        } else {
            thumbsUp = (
                <ThumbsUp size="21" onClick={() => onLikeQuestion(id)} />
            );
        }
    }

    var thumbsDown = <ThumbsDown size="21" />;

    if (loggedInUser !== null) {
        if (
            loggedInUser.questionRatings.find(
                (item) => item.questionId === id && item.isLiked === false
            )
        ) {
            thumbsDown = (
                <ThumbsDown
                    size="21"
                    fill={"#828282"}
                    onClick={() => onDislikeQuestionUndo(id)}
                />
            );
        } else {
            thumbsDown = (
                <ThumbsDown size="21" onClick={() => onDislikeQuestion(id)} />
            );
        }
    }

    return (
        <div className={style.Question}>
            <div className={style.Actions}>
                <div className={style.Spacer} />
                {loggedInUser && loggedInUser.id === user.id ? (
                    <DeleteQuestion id={id} />
                ) : null}
            </div>
            <Link to={routeConstants.QUESTION_DETAILS_ROUTE.replace(":id", id)}>
                <div className={style.Content}>
                    <div>{parse(content)}</div>
                </div>
            </Link>
            <div className={style.Info}>
                <div className={style.Wrapper}>
                    {thumbsUp}
                    <span className={style.Number}>{likes}</span>
                </div>
                <div className={style.Wrapper}>
                    {thumbsDown}
                    <span className={style.Number}>{dislikes}</span>
                </div>
            </div>
        </div>
    );
};

export default QuestionListItem;
