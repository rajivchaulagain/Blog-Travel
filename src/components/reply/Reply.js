import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { initialValues, replySchema } from '../../validation/ReplyValidation'

const Reply = () => {

    const onFormSubmit = (values) => {

    }

    return (
        <div>
            <h4 className='fw-bold'>Leave a reply</h4>
            <hr />
            <Formik
                validationSchema={replySchema}
                initialValues={initialValues}
                onSubmit={onFormSubmit}
            >
                {({ touched, dirty, isValid }) => (
                    <Form>
                        <Col className="py-1">
                            <div className="my-2">
                                <label>Message</label>
                                <Field
                                    type="text"
                                    name="message"
                                    className="form-control"
                                />
                                <div className="text-danger">
                                    <ErrorMessage name="message" />
                                </div>
                            </div>
                        </Col>
                        <Col className="py-1">
                            <div className="my-2">
                                <label>Name</label>
                                <Field
                                    type="text"
                                    name="name"
                                    className="form-control"
                                />
                                <div className="text-danger">
                                    <ErrorMessage name="name" />
                                </div>
                            </div>
                        </Col>
                        <Col className="py-1">
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
                        <button className="btn btn-primary my-4 " type="submit">Send A Comment</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Reply