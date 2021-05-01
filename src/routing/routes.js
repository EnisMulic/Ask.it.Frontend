import * as routeConsts from "../constants/routes";

import Home from "../components/Home";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import HotQuestions from "../components/HotQuestions";
import TopUsers from "../components/TopUsers";
import ChangePassword from "../components/User/ChangePassword";
import Questions from "../components/User/Questions";
import EditUserInfo from "../components/User/EditUserInfo";
import QuestionDetails from "../components/QuestionDetails";

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
    {
        path: routeConsts.CHANGE_PASSWORD_ROUTE,
        exact: false,
        component: ChangePassword,
    },
    {
        path: routeConsts.YOUR_QUESTIONS_ROUTE,
        exact: true,
        component: Questions,
    },
    {
        path: routeConsts.EDIT_USER_INFO_ROUTE,
        exact: false,
        component: EditUserInfo,
    },
    {
        path: routeConsts.QUESTION_DETAILS_ROUTE,
        exact: false,
        component: QuestionDetails,
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
    {
        path: routeConsts.QUESTION_DETAILS_ROUTE,
        exact: false,
        component: QuestionDetails,
    },
];

export { LOGGED_IN_ROUTES, LOGGED_OUT_ROUTES };
