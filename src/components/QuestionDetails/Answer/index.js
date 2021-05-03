import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThumbsUp, ThumbsDown, User } from "react-feather";
import parse from "html-react-parser";

import * as actions from "../../../store/actions";

import style from "./Answer.module.css";
import DeleteAnswer from "../../DeleteAnswer";

const Answer = (props) => {
    const { ID, Content, Likes, Dislikes, CreatedAt } = props;

    const user = useSelector((state) => state.loggedInUser.user);
    const dispatch = useDispatch();

    const onLikeAnswer = useCallback(
        (AnswerID) => dispatch(actions.likeAnswer(AnswerID)),
        [dispatch]
    );
    const onLikeAnswerUndo = useCallback(
        (AnswerID) => dispatch(actions.likeAnswerUndo(AnswerID)),
        [dispatch]
    );

    const onDislikeAnswer = useCallback(
        (AnswerID) => dispatch(actions.dislikeAnswer(AnswerID)),
        [dispatch]
    );
    const onDislikeAnswerUndo = useCallback(
        (AnswerID) => dispatch(actions.dislikeAnswerUndo(AnswerID)),
        [dispatch]
    );

    var thumbsUp = <ThumbsUp size="21" />;

    if (user !== null) {
        if (
            user.AnswerRatings &&
            user.AnswerRatings.find(
                (item) => item.AnswerID === ID && item.IsLiked === true
            )
        ) {
            thumbsUp = (
                <ThumbsUp
                    size="21"
                    fill={"#828282"}
                    onClick={() => onLikeAnswerUndo(ID)}
                />
            );
        } else {
            thumbsUp = <ThumbsUp size="21" onClick={() => onLikeAnswer(ID)} />;
        }
    }

    var thumbsDown = <ThumbsDown size="21" />;

    if (user !== null) {
        if (
            user.AnswerRatings &&
            user.AnswerRatings.find(
                (item) => item.AnswerID === ID && item.IsLiked === false
            )
        ) {
            thumbsDown = (
                <ThumbsDown
                    size="21"
                    fill={"#828282"}
                    onClick={() => onDislikeAnswerUndo(ID)}
                />
            );
        } else {
            thumbsDown = (
                <ThumbsDown size="21" onClick={() => onDislikeAnswer(ID)} />
            );
        }
    }

    return (
        <div className={style.Answer}>
            <div className={style.Actions}>
                <div className={style.Spacer} />
                {user && user.ID === props.User.ID ? (
                    <DeleteAnswer id={ID} />
                ) : null}
            </div>
            <div className={style.Wrapper}>
                <div className={style.Content}>{parse(Content)}</div>
            </div>
            <div className={style.Info}>
                <User className={style.Icon} />
                <span className={style.Text}>{props.User.Email}</span>
                <div className={style.Spacer}></div>
                <div>{new Date(CreatedAt).toLocaleDateString("en-GB")}</div>
            </div>
            <div className={style.Data}>
                <div className={style.DataWrapper}>
                    {thumbsUp}
                    <span className={style.Number}>{Likes}</span>
                </div>
                <div className={style.DataWrapper}>
                    {thumbsDown}
                    <span className={style.Number}>{Dislikes}</span>
                </div>
            </div>
        </div>
    );
};

export default Answer;
