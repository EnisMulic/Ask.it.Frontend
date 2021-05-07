import React, { useEffect, useCallback } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "./store/user/auth";
import { LOGGED_IN_ROUTES, LOGGED_OUT_ROUTES } from "./routing/routes";
import Navbar from "./components/Navbar";

const App = () => {
    const dispatch = useDispatch();

    const onTryAutoAuth = useCallback(
        () => dispatch(actions.authCheckState()),
        [dispatch]
    );

    useEffect(() => {
        onTryAutoAuth();
    }, [onTryAutoAuth]);

    const defaultLayoutPaths = LOGGED_IN_ROUTES.map((item) => item.path);

    const auth = useSelector((state) => state.user);

    const routes = (auth.token !== null && (
        <Switch>
            <Route path={defaultLayoutPaths} exact>
                {LOGGED_IN_ROUTES.map((item) => {
                    return <Route key={item.path} {...item} />;
                })}
            </Route>
            <Route
                path={["/register", "/login"]}
                component={() => <Redirect to="/" />}
            />
        </Switch>
    )) || (
        <Switch>
            {LOGGED_OUT_ROUTES.map((item) => {
                return <Route key={item.path} {...item} />;
            })}
        </Switch>
    );

    return (
        <div>
            <Navbar />
            {routes}
        </div>
    );
};

export default App;
