import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import * as actions from "../../store/user/auth";

import style from "./Register.module.css";

import * as authConstants from "../../constants/auth";

const registerSchema = Yup.object().shape({
    password: Yup.string()
        .min(
            authConstants.PASSWORD_MIN_LENGTH,
            authConstants.PASSWORD_TO_SHORT_ERROR
        )
        .required("Required"),
    confirmPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        authConstants.PASSWORDS_MUST_MATCH_ERROR
    ),
    email: Yup.string()
        .email(authConstants.EMAIL_INVALID_ERROR)
        .required("Required"),
});

const Register = () => {
    const dispatch = useDispatch();

    const onRegister = useCallback(
        (email, password, firstName, lastName) =>
            dispatch(actions.register(email, password, firstName, lastName)),
        [dispatch]
    );

    const authData = useSelector((state) => state.user);

    let authRedirect = null;
    if (authData.token) {
        authRedirect = <Redirect to={authData.authRedirectPath} exact />;
    }

    const handleSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            onRegister(
                values.email,
                values.password,
                values.firstName,
                values.lastName
            );
            setSubmitting(false);
        }, 400);
    };

    return (
        <div className={style.Register}>
            {authRedirect}
            {authData.error !== null && (
                <Alert variant="danger">
                    {authData.error.errors.map((error) => {
                        return <p>{error.message}</p>;
                    })}
                </Alert>
            )}
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                }}
                validationSchema={registerSchema}
                onSubmit={handleSubmit}
                enableReinitialize
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <Field
                                className="form-control"
                                type="text"
                                name="firstName"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <Field
                                className="form-control"
                                type="text"
                                name="lastName"
                            />
                        </div>
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
                        <div className="form-group">
                            <label htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <Field
                                className="form-control"
                                type="password"
                                name="confirmPassword"
                            />
                            <ErrorMessage
                                name="confirmPassword"
                                component="div"
                            />
                        </div>
                        <Button type="submit" disabled={isSubmitting}>
                            Register
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Register;
