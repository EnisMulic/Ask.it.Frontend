import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Trash2 } from "react-feather";

import * as actions from "../../store/questions/deleteQuestion";

const DeleteQuestion = (props) => {
    const dispatch = useDispatch();
    const onQuestionDelete = useCallback(
        (questionId) => dispatch(actions.deleteQuestion(questionId)),
        [dispatch]
    );

    return (
        <div style={{ cursor: "pointer" }}>
            <Trash2 size="21" onClick={() => onQuestionDelete(props.id)} />
        </div>
    );
};

export default DeleteQuestion;
