import * as routeConsts from "../constants/routes";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages//Register";
import HotQuestions from "../pages/HotQuestions";
import TopUsers from "../pages/TopUsers";
import ChangePassword from "../pages/ChangePassword";
import YourQuestions from "../pages/YourQuestions";
import EditUserInfo from "../pages/EditUserInfo";
import QuestionDetails from "../pages/QuestionDetails";

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
        component: YourQuestions,
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
