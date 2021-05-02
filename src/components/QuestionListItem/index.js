import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThumbsUp, ThumbsDown } from "react-feather";
import parse from "html-react-parser";

import * as actions from "../../store/actions";

import style from "./QuestionListItem.module.css";

import * as routeConstants from "../../constants/routes";
import DeleteQuestion from "../DeleteQuestion";

const QuestionListItem = (props) => {
    const { ID, Content, Likes, Dislikes, User } = props;
    const user = useSelector((state) => state.loggedInUser.user);
    const dispatch = useDispatch();

    const onLikeQuestion = useCallback(
        (QuestionID) => dispatch(actions.likeQuestion(QuestionID)),
        [dispatch]
    );
    const onLikeQuestionUndo = useCallback(
        (QuestionID) => dispatch(actions.likeQuestionUndo(QuestionID)),
        [dispatch]
    );

    const onDislikeQuestion = useCallback(
        (QuestionID) => dispatch(actions.dislikeQuestion(QuestionID)),
        [dispatch]
    );
    const onDislikeQuestionUndo = useCallback(
        (QuestionID) => dispatch(actions.dislikeQuestionUndo(QuestionID)),
        [dispatch]
    );

    var thumbsUp = <ThumbsUp size="21" />;

    if (user !== null) {
        if (
            user.QuestionRatings.find(
                (item) => item.QuestionID === ID && item.IsLiked === true
            )
        ) {
            thumbsUp = (
                <ThumbsUp
                    size="21"
                    fill={"#828282"}
                    onClick={() => onLikeQuestionUndo(ID)}
                />
            );
        } else {
            thumbsUp = (
                <ThumbsUp size="21" onClick={() => onLikeQuestion(ID)} />
            );
        }
    }

    var thumbsDown = <ThumbsDown size="21" />;

    if (user !== null) {
        if (
            user.QuestionRatings.find(
                (item) => item.QuestionID === ID && item.IsLiked === false
            )
        ) {
            thumbsDown = (
                <ThumbsDown
                    size="21"
                    fill={"#828282"}
                    onClick={() => onDislikeQuestionUndo(ID)}
                />
            );
        } else {
            thumbsDown = (
                <ThumbsDown size="21" onClick={() => onDislikeQuestion(ID)} />
            );
        }
    }

    return (
        <div className={style.Question}>
            <div className={style.Actions}>
                <div className={style.Spacer} />
                {user && user.ID === User.ID ? (
                    <DeleteQuestion id={ID} />
                ) : null}
            </div>
            <a href={routeConstants.QUESTION_DETAILS_ROUTE.replace(":id", ID)}>
                <div className={style.Content}>
                    <div>{parse(Content)}</div>
                </div>
            </a>
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
