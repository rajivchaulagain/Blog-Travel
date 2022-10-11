import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

import useAuth from "../../hooks/useAuth";

// import { useAuth } from '../../../hooks/useAuth';

import { initialValues, loginSchema } from "../../validation/AuthValidation";
import { authServices } from "../../services/authServices";
import { Col, Container } from "react-bootstrap";
// import SocialMediaLogin from "./SocialMediaLogin";
// import Navbar from '../../molecules/Navbar';

// import "../../../assets/styles/login.css";

const Login = () => {

    const navigate = useNavigate();

    const { setAuth } = useAuth();

    const {
        mutate,
        isLoading,
    } = useMutation(authServices.login);

    const formik = useFormik({
        initialValues,
        validationSchema: loginSchema,
        onSubmit: (values, { setStatus, setSubmitting }) => {
            mutate({ ...values }, {
                onSuccess: (data) => {
                    setAuth(data)
                    toast.success('User logged in successfully')
                    document.location.reload();
                    navigate("/dashboard");
                },
                onError: (err) => {
                    toast.error(`${err || "Please try again later."}`)
                }
            });
        },
    });

    return (
        <div className="login bg-primary text-light vh-100 d-flex justify-content-between align-items-center">
            <Container>
                <Col md={6} className="mx-auto">
                    <h2 className="text-center mb-4">Login</h2>
                    <div className="login-wrapper">
                        <form
                            className="form"
                            onSubmit={formik.handleSubmit}
                            noValidate
                        >
                            <div className="user-form">
                                <input
                                    placeholder="Email"
                                    {...formik.getFieldProps("email")}
                                    className={"form-control"}
                                    type="email"
                                    name="email"
                                    autoComplete="false"
                                />
                            </div>
                            {formik.touched.email && formik.errors.email && (
                                <div className="fv-plugins-message-container">
                                    <span role="alert" className="text-danger">
                                        {formik.errors.email}
                                    </span>
                                </div>
                            )}
                            <div className="my-4 password-wrapper">
                                <div className="user-form">
                                    <input
                                        placeholder="Password"
                                        {...formik.getFieldProps("password")}
                                        className={"form-control"}

                                        type="password"
                                        name="password"
                                        autoComplete="off"
                                    />
                                </div>
                                {formik.touched.password && formik.errors.password && (
                                    <div className="fv-plugins-message-container">
                                        <div className="fv-help-block">
                                            <span role="alert" className="text-danger">
                                                {formik.errors.password}
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="form-check">
                                <div className="float-right">
                                    <Link to="/forget-password" className="text-white">
                                        Forget Password
                                    </Link>
                                </div>
                            </div>
                            <button
                                type="submit"
                                id="kt_sign_in_submit"
                                className="btn btn-md p-2 btn-primary w-100 my-3"
                                disabled={isLoading}
                            >
                                {!isLoading && <span className="indicator-label">Continue</span>}
                                {isLoading && (
                                    <span className="indicator-progress" style={{ display: "block" }}>
                                        Please wait...
                                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                    </span>
                                )}
                            </button>
                        </form>
                        <div className="text-white text-center my-4">
                            <span>Don't have an account?</span>
                            <Link to="/user/register" className="text-primary ml-2">
                                Sign up
                            </Link>
                        </div>
                    </div>
                </Col>
            </Container>
        </div>
    );
};

export default Login;