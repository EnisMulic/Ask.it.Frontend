import * as endpointConstants from "../constants/endpoints";
import * as authConstants from "../constants/auth";

var socket = new WebSocket(
    process.env.REACT_APP_ASKIT_API_WS +
        endpointConstants.NOTIFICATIONS_ENDPOINT.replace(
            "{id}",
            localStorage.getItem(authConstants.USER_ID)
        )
);

let connect = (callback) => {
    console.log("Attempting Connection...");

    socket.onopen = () => {
        console.log("Successfully Connected");
    };

    socket.onmessage = (msg) => {
        console.log(msg);
        callback(msg);
    };

    socket.onclose = (event) => {
        console.log("Socket Closed Connection: ", event);
    };

    socket.onerror = (error) => {
        console.log("Socket Error: ", error);
    };
};

let sendMsg = (msg) => {
    console.log("sending msg: ", msg);
    socket.send(msg);
};

export { connect, sendMsg };
