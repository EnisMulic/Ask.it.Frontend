import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThumbsUp, ThumbsDown, User } from "react-feather";

import style from "./Answer.module.css";

const Answer = (props) => {
    const { ID, Content, Likes, Dislikes, CreatedAt } = props;

    const user = useSelector((state) => state.loggedInUser.user);
    const dispatch = useDispatch();

    var thumbsUp = <ThumbsUp size="21" />;

    if (user !== null) {
        if (
            user.AnswerRatings &&
            user.AnswerRatings.find(
                (item) => item.QuestionID === ID && item.IsLiked === true
            )
        ) {
            thumbsUp = (
                <ThumbsUp
                    size="21"
                    fill={"#828282"}
                    //onClick={() => onLikeQuestionUndo(ID)}
                />
            );
        } else {
            thumbsUp = (
                <ThumbsUp
                    size="21"
                    //onClick={() => onLikeQuestion(ID)}
                />
            );
        }
    }

    var thumbsDown = <ThumbsDown size="21" />;

    if (user !== null) {
        if (
            user.AnswerRatings &&
            user.AnswerRatings.find(
                (item) => item.QuestionID === ID && item.IsLiked === false
            )
        ) {
            thumbsDown = (
                <ThumbsDown
                    size="21"
                    fill={"#828282"}
                    //onClick={() => onDislikeQuestionUndo(ID)}
                />
            );
        } else {
            thumbsDown = (
                <ThumbsDown
                    size="21"
                    //onClick={() => onDislikeQuestion(ID)}
                />
            );
        }
    }

    return (
        <div className={style.Answer}>
            <div className={style.Wrapper}>
                <div className={style.Content}>{Content}</div>
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
