import React from "react";
import { connect, sendMsg } from "../../websocket";

const Notifications = () => {
    connect();

    const send = () => {
        console.log("hello");
        sendMsg("hello");
    };

    return (
        <div>
            <button onClick={() => send()}>Hit</button>
        </div>
    );
};

export default Notifications;
