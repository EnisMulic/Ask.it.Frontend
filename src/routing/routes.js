import * as routeConsts from "../constants/routes";

import Login from "../components/Auth/Login";

const LOGGED_IN_ROUTES = [
    {
        path: routeConsts.HOME_ROUTE,
        exact: true,
        component: Login,
    },
];

const LOGGED_OUT_ROUTES = [
    {
        path: routeConsts.LOGIN_ROUTE,
        exact: false,
        component: Login,
    },
];

export { LOGGED_IN_ROUTES, LOGGED_OUT_ROUTES };
