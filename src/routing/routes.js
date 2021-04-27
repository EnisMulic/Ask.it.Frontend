import * as routeConsts from "../constants/routes";

import Home from "../components/Home";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import HotQuestions from "../components/HotQuestions";
import TopUsers from "../components/TopUsers";

const LOGGED_IN_ROUTES = [
    {
        path: routeConsts.HOME_ROUTE,
        exact: true,
        component: Home,
    },
    {
        path: routeConsts.HOT_QUESTIONS_ROUTE,
        exact: false,
        component: HotQuestions,
    },
    {
        path: routeConsts.TOP_USERS_ROUTE,
        exact: false,
        component: TopUsers,
    },
];

const LOGGED_OUT_ROUTES = [
    {
        path: routeConsts.HOME_ROUTE,
        exact: true,
        component: Home,
    },
    {
        path: routeConsts.HOT_QUESTIONS_ROUTE,
        exact: false,
        component: HotQuestions,
    },
    {
        path: routeConsts.TOP_USERS_ROUTE,
        exact: false,
        component: TopUsers,
    },
    {
        path: routeConsts.LOGIN_ROUTE,
        exact: false,
        component: Login,
    },
    {
        path: routeConsts.REGISTER_ROUTE,
        exact: false,
        component: Register,
    },
];

export { LOGGED_IN_ROUTES, LOGGED_OUT_ROUTES };
