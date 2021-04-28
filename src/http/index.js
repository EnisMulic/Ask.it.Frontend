import axios from "axios";
import * as authConstants from "../constants/auth";

const instance = axios.create({
    baseURL: process.env.REACT_APP_ASKIT_API,
});

instance.interceptors.request.use(
    (config) => {
        config.headers.Authorization =
            "Bearer " + localStorage.getItem(authConstants.TOKEN);

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            localStorage.removeItem(authConstants.TOKEN);
        }
        return Promise.reject(error);
    }
);

export default instance;
