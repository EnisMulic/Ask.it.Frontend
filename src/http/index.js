import axios from "axios";

const intance = axios.create({
    baseURL: process.env.REACT_APP_ASKIT_API,
});

export default intance;
