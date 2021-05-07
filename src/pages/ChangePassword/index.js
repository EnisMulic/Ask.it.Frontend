import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";

import * as actions from "../../store/actions";

import style from "./ChangePassword.module.css";

import * as authConstants from "../../constants/auth";

const passwordSchema = Yup.object().shape({
    password: Yup.string()
        .min(
            authConstants.PASSWORD_MIN_LENGTH,
            authConstants.PASSWORD_TO_SHORT_ERROR
        )
        .required("Required"),
    newPassword: Yup.string()
        .min(
            authConstants.PASSWORD_MIN_LENGTH,
            authConstants.PASSWORD_TO_SHORT_ERROR
        )
        .required("Required"),
    confirmPassword: Yup.string().oneOf(
        [Yup.ref("newPassword"), null],
        authConstants.PASSWORDS_MUST_MATCH_ERROR
    ),
});

const ChangePassword = () => {
    const dispatch = useDispatch();

    const onChangePassword = useCallback(
        (password, newPassword) =>
            dispatch(actions.changePassword(password, newPassword)),
        [dispatch]
    );

    const data = useSelector((state) => state.user);

    let errorMessage = null;
    if (data.error) {
        errorMessage = <p>{data.error.message}</p>;
    }

    const handleSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            onChangePassword(values.password, values.newPassword);
            setSubmitting(false);
        }, 400);
    };

    return (
        <div className={style.Form}>
            {errorMessage}
            <Formik
                initialValues={{
                    password: "",
                    newPassword: "",
                    confirmPassword: "",
                }}
                validationSchema={passwordSchema}
                onSubmit={handleSubmit}
                enableReinitialize
            >
                {({ isSubmitting }) => (
                    <Form>
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
                            <label htmlFor="newPassword">New Password</label>
                            <Field
                                className="form-control"
                                type="password"
                                name="newPassword"
                            />
                            <ErrorMessage name="newPassword" component="div" />
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
                            Change Password
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ChangePassword;
