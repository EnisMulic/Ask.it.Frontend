import React from "react";
import { Trash2 } from "react-feather";

import http from "../../http";
import * as endpointConstants from "../../constants/endpoints";

const DeleteAnswer = (props) => {
    const deleteAnswer = (id) => {
        console.log("Here");
        http.delete(
            endpointConstants.DELETE_ANSWER_ENDPOINT.replace("{id}", id)
        )
            .then()
            .catch((err) => console.log(err));
    };

    return (
        <div style={{ cursor: "pointer" }}>
            <Trash2 size="21" onClick={() => deleteAnswer(props.id)} />
        </div>
    );
};

export default DeleteAnswer;
