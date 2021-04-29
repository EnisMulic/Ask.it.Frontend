import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThumbsUp, ThumbsDown } from "react-feather";

import style from "./QuestionListItem.module.css";

const QuestionListItem = (props) => {
    const { ID, Content, Likes, Dislikes } = props;
    const user = useSelector((state) => state.loggedInUser.user);

    var thumbsUp = null;
    if (
        user !== null &&
        user.QuestionRatings.find(
            (item) => item.QuestionID === ID && item.IsLiked === true
        )
    ) {
        thumbsUp = <ThumbsUp size="21" fill={"#828282"} />;
    } else {
        thumbsUp = <ThumbsUp size="21" />;
    }

    var thumbsDown = null;
    if (
        user !== null &&
        user.QuestionRatings.find(
            (item) => item.QuestionID === ID && item.IsLiked === false
        )
    ) {
        thumbsDown = <ThumbsDown size="21" fill={"#828282"} />;
    } else {
        thumbsDown = <ThumbsDown size="21" />;
    }

    return (
        <div className={style.Question}>
            <div className={style.Content}>
                <p>{Content}</p>
            </div>
            <div className={style.Info}>
                <div className={style.Wrapper}>
                    {thumbsUp}
                    <span className={style.Number}>{Likes}</span>
                </div>
                <div className={style.Wrapper}>
                    {thumbsDown}
                    <span className={style.Number}>{Dislikes}</span>
                </div>
            </div>
        </div>
    );
};

export default QuestionListItem;
