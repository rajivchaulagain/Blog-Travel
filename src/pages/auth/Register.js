import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link , useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { initialValues, registerSchema } from '../../validation/RegistrationValidation';
import useAuth from "../../hooks/useAuth";
import { authServices } from "../../services/authServices";
// import SocialMediaLogin from "./SocialMediaLogin";

const Register = () => {

  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const {
    mutate,
    isLoading,
  } = useMutation(authServices.register, {
    onSuccess: (data) => {
      setAuth(data)
      navigate("/dashboard")
      toast.success('User registered successfully')
      document.location.reload();
    },
    onError: (err) => {
      toast.error(`${err}`)
    }
  });

  const onFormSubmit = (values) => {
    console.log(values);
    mutate(values)
  }


  return (
    <div className="register bg-primary text-light vh-100 d-flex justify-content-between align-items-center">
      {/* <Navbar title=".Travel" /> */}
      <Container>
        <Col md={8} className="mx-auto">
          <h2 className="text-center mb-4">Registration</h2>
          <div className="register-wrapper">
            <Formik
              validationSchema={registerSchema}
              initialValues={initialValues}
              onSubmit={onFormSubmit}
            >
              {({ touched, dirty, isValid }) => (
                <Form>
                  <Row>
                    <Col>
                      <div className="my-2">
                        <label>First Name</label>
                        <Field
                          type="text"
                          name="firstName"
                          className="form-control"
                        />
                        <div className="text-danger">
                          <ErrorMessage name="firstName" />
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className="my-2">
                        <label>Last Name</label>
                        <Field
                          type="text"
                          name="lastName"
                          className="form-control"
                        />
                        <div className="text-danger">
                          <ErrorMessage name="lastName" />
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="my-2">
                        <label>Email</label>
                        <Field
                          type="email"
                          name="email"
                          className="form-control"
                        />
                        <div className="text-danger">
                          <ErrorMessage name="email" />
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className="my-2">
                        <label>Password</label>
                        <Field
                          type="password"
                          name="password"
                          className="form-control"
                        />
                        <div className="text-danger">
                          <ErrorMessage name="password" />
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <button className="btn btn-primary my-4 col-12" type="submit">Submit</button>
                </Form>
              )}
            </Formik>
            <div className="text-center">
              <Link to="/user/login" className="text-light text-center">Login In instead</Link>
            </div>
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default Register;