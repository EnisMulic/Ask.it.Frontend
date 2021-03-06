import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import * as actions from "../../store/user/auth";

import style from "./Login.module.css";

import * as authConstants from "../../constants/auth";

const loginSchema = Yup.object().shape({
    password: Yup.string()
        .min(
            authConstants.PASSWORD_MIN_LENGTH,
            authConstants.PASSWORD_TO_SHORT_ERROR
        )
        .required("Required"),
    email: Yup.string()
        .email(authConstants.EMAIL_INVALID_ERROR)
        .required("Required"),
});

const Login = () => {
    const dispatch = useDispatch();

    const onLogin = useCallback(
        (email, password) => dispatch(actions.login(email, password)),
        [dispatch]
    );

    const authData = useSelector((state) => state.user);

    let authRedirect = null;
    if (authData.token) {
        authRedirect = <Redirect to={authData.authRedirectPath} exact />;
    }

    const handleSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            onLogin(values.email, values.password);
            setSubmitting(false);
        }, 400);
    };

    return (
        <div className={style.Login}>
            {authRedirect}
            {authData.error !== null && (
                <Alert variant="danger">
                    {authData.error.errors.map((error) => {
                        return <p>{error.message}</p>;
                    })}
                </Alert>
            )}
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={loginSchema}
                onSubmit={handleSubmit}
                enableReinitialize
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field
                                className="form-control"
                                type="text"
                                name="email"
                            />
                            <ErrorMessage name="email" component="div" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field
                                className="form-control"
                                type="password"
                                name="password"
                            />
                            <ErrorMessage name="password" component="div" />
                        </div>
                        <Button type="submit" disabled={isSubmitting}>
                            Login
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Login;
