import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThumbsUp, ThumbsDown, User, Edit } from "react-feather";
import parse from "html-react-parser";

import * as actions from "../../store/actions";

import style from "./Answer.module.css";
import DeleteAnswer from "../DeleteAnswer";
import EditAnswer from "../EditAnswer";

const Answer = (props) => {
    const { ID, Content, Likes, Dislikes, CreatedAt } = props;

    const [editMode, setEditMode] = useState(false);

    const user = useSelector((state) => state.loggedInUser.user);
    const dispatch = useDispatch();

    const onLikeAnswer = useCallback(
        (answerId) => dispatch(actions.likeAnswer(answerId)),
        [dispatch]
    );
    const onLikeAnswerUndo = useCallback(
        (answerId) => dispatch(actions.likeAnswerUndo(answerId)),
        [dispatch]
    );

    const onDislikeAnswer = useCallback(
        (answerId) => dispatch(actions.dislikeAnswer(answerId)),
        [dispatch]
    );
    const onDislikeAnswerUndo = useCallback(
        (answerId) => dispatch(actions.dislikeAnswerUndo(answerId)),
        [dispatch]
    );

    var thumbsUp = <ThumbsUp size="21" />;

    if (user !== null) {
        if (
            user.AnswerRatings &&
            user.AnswerRatings.find(
                (item) => item.answerId === ID && item.isLiked === true
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
                (item) => item.answerId === ID && item.isLiked === false
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
                    <>
                        <EditAnswer {...props} />
                        <DeleteAnswer id={ID} />
                    </>
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
