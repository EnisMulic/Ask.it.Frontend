import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThumbsUp, ThumbsDown, User } from "react-feather";
import parse from "html-react-parser";

import * as actions from "../../store/common/rateAnswer";

import style from "./Answer.module.css";
import DeleteAnswer from "../DeleteAnswer";
import EditAnswer from "../EditAnswer";

const Answer = (props) => {
    const { id, content, likes, dislikes, createdAt } = props;

    const user = useSelector((state) => state.user.me);
    const dispatch = useDispatch();

    const onLikeAnswer = useCallback(
        (answerId, isDisliked) =>
            dispatch(actions.likeAnswerAction(answerId, isDisliked)),
        [dispatch]
    );
    const onLikeAnswerUndo = useCallback(
        (answerId) => dispatch(actions.likeAnswerUndoAction(answerId)),
        [dispatch]
    );

    const onDislikeAnswer = useCallback(
        (answerId, isLiked) =>
            dispatch(actions.dislikeAnswerAction(answerId, isLiked)),
        [dispatch]
    );
    const onDislikeAnswerUndo = useCallback(
        (answerId) => dispatch(actions.dislikeAnswerUndoAction(answerId)),
        [dispatch]
    );

    let thumbsUp = <ThumbsUp size="21" />;
    let thumbsDown = <ThumbsDown size="21" />;

    if (user !== null) {
        let isLiked = user.answerRatings.find(
            (item) => item.answerId === id && item.isLiked === true
        );

        let isDisliked = user.answerRatings.find(
            (item) => item.answerId === id && item.isLiked === false
        );

        if (isLiked) {
            thumbsUp = (
                <ThumbsUp
                    size="21"
                    fill={"#828282"}
                    onClick={() => onLikeAnswerUndo(id)}
                />
            );
        } else {
            thumbsUp = (
                <ThumbsUp
                    size="21"
                    onClick={() =>
                        onLikeAnswer(id, !(isDisliked === undefined))
                    }
                />
            );
        }

        if (isDisliked) {
            thumbsDown = (
                <ThumbsDown
                    size="21"
                    fill={"#828282"}
                    onClick={() => onDislikeAnswerUndo(id)}
                />
            );
        } else {
            thumbsDown = (
                <ThumbsDown
                    size="21"
                    onClick={() =>
                        onDislikeAnswer(id, !(isLiked === undefined))
                    }
                />
            );
        }
    }

    return (
        <div className={style.Answer}>
            <div className={style.Actions}>
                <div className={style.Spacer} />
                {user && user.id === props.user.id ? (
                    <>
                        <EditAnswer {...props} />
                        <DeleteAnswer id={id} />
                    </>
                ) : null}
            </div>
            <div className={style.Wrapper}>
                <div className={style.content}>{parse(content)}</div>
            </div>
            <div className={style.Info}>
                <User className={style.Icon} />
                <span className={style.Text}>{props.user.email}</span>
                <div className={style.Spacer}></div>
                <div>{new Date(createdAt).toLocaleDateString("en-GB")}</div>
            </div>
            <div className={style.Data}>
                <div className={style.DataWrapper}>
                    {thumbsUp}
                    <span className={style.Number}>{likes}</span>
                </div>
                <div className={style.DataWrapper}>
                    {thumbsDown}
                    <span className={style.Number}>{dislikes}</span>
                </div>
            </div>
        </div>
    );
};

export default Answer;
