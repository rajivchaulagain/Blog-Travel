import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup'
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { blogServices } from '../../services/blogServices';
import Layout from './Layout';
import { toast } from 'react-toastify';

const AddEdit = () => {

    const { id } = useParams();

    const isAddMode = !id;

    const queryClient = useQueryClient()

    let navigate = useNavigate();

    const mutation = useMutation(blogServices.createBlog, {
        onSuccess: () => {
            queryClient.invalidateQueries(['blogs'])
            toast.success(`blog added successfully`)
        }
    });

    const onFormSubmit = (values) => {
        mutation.mutate(values, {
            onSuccess: () => {
                navigate('/dashboard')
            }
        })
    };

    const registerSchema = Yup.object().shape({

    });

    const initialValues = {
        title: '',
        description: '',
        coverImage: ''
    };

    return (
        <Layout>
            <h3 className='mb-4'>{isAddMode ? "Add Blog" : "Edit Blog"}</h3>
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
                                    <label>Title</label>
                                    <Field
                                        type="text"
                                        name="title"
                                        className="form-control"
                                        required
                                    />
                                    <div className="text-danger">
                                        <ErrorMessage name="title" />
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="my-2">
                                    <label>Description</label>
                                    <Field
                                        type="text"
                                        name="description"
                                        className="form-control"
                                        required
                                    />
                                    <div className="text-danger">
                                        <ErrorMessage name="description" />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="my-2">
                                    <label>Image</label>
                                    <Field name='coverImage'>
                                        {({ form, field }) => {
                                            const { setFieldValue } = form
                                            return (
                                                <input
                                                    type="file"
                                                    className='form-control'
                                                    required
                                                    onChange={(e) => {
                                                        setFieldValue('coverImage', e.currentTarget.files[0]);
                                                    }}
                                                />
                                            )
                                        }}
                                    </Field>
                                    <div className="text-danger">
                                        <ErrorMessage name="coverImage" />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <button className="btn btn-primary my-4 col-12" type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </Layout>
    )
}

export default AddEdit