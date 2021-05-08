import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";

import * as actions from "../../store/user/update";

import style from "./EditUserInfo.module.css";

import * as authConstants from "../../constants/auth";

const infoSchema = Yup.object().shape({
    email: Yup.string()
        .email(authConstants.EMAIL_INVALID_ERROR)
        .required("Required"),
});

const EditUserInfo = () => {
    const dispatch = useDispatch();

    const onUpdateUser = useCallback(
        (firstName, lastName, email) =>
            dispatch(actions.updateUserAction(firstName, lastName, email)),
        [dispatch]
    );

    const data = useSelector((state) => state.user);

    let errorMessage = null;
    if (data.error) {
        errorMessage = <p>{data.error.message}</p>;
    }

    const handleSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            onUpdateUser(values.firstName, values.lastName, values.email);
            setSubmitting(false);
        }, 400);
    };

    return (
        <div className={style.Form}>
            {errorMessage}
            <Formik
                initialValues={{
                    firstName: data.me.firstName,
                    lastName: data.me.lastName,
                    email: data.me.email,
                }}
                validationSchema={infoSchema}
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
                        <Button type="submit" disabled={isSubmitting}>
                            Save
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default EditUserInfo;
