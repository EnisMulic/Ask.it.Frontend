import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Trash2 } from "react-feather";

import * as actions from "../../store/questions/deleteAnswer";

const DeleteAnswer = (props) => {
    const dispatch = useDispatch();
    const onAnswerDelete = useCallback(
        (answerId) => dispatch(actions.deleteAnswer(answerId)),
        [dispatch]
    );

    return (
        <div style={{ cursor: "pointer" }}>
            <Trash2 size="21" onClick={() => onAnswerDelete(props.id)} />
        </div>
    );
};

export default DeleteAnswer;
