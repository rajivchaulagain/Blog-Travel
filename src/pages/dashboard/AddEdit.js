import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { RichTextEditor } from '@mantine/rte';

import { blogServices } from '../../services/blogServices';
import Layout from './Layout';
import { toast } from 'react-toastify';
import Fallback from '../../components/fallback/Fallback';

const AddEdit = () => {

    const { id } = useParams();

    const isAddMode = !id;

    const queryClient = useQueryClient();

    let navigate = useNavigate();

    const { data: blog, isLoading } = useQuery(['blog'], () => blogServices.getBlog(id))

    const mutation = useMutation(blogServices.createBlog, {
        onSuccess: () => {
            queryClient.invalidateQueries(['blogs'])
            toast.success(`blog added successfully`)
        }
    });

    const onFormSubmit = (values) => {
        console.log({ values });
        mutation.mutate(values, {
            onSuccess: () => {
                navigate('/dashboard')
            }
        })
    };

    if (isLoading) return <Fallback />;

    const registerSchema = Yup.object().shape({

    });

    const initialValues = {
        title: isAddMode ? '' : blog.title,
        description: isAddMode ? '' : blog.description,
        coverImage: isAddMode ? '' : blog.coverImage,
        category: isAddMode ? '' : blog.category
    };


    return (
        <Layout>
            <h5 className='my-4'>{isAddMode ? "Add Blog" : "Edit Blog"}</h5>
            <Card>
                <Card.Body>
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
                                    <Col md={12}>
                                        <div className="my-2">
                                            <label>Description</label>
                                            <Field name='description'>
                                                {({ form, field }) => {
                                                    const { setFieldValue } = form
                                                    const { values } = form
                                                    console.log({ values });
                                                    return (
                                                        <RichTextEditor
                                                            value={values.description}
                                                            onChange={(e) => {
                                                                setFieldValue('description', e);
                                                            }}
                                                        />
                                                    )
                                                }}
                                            </Field>
                                            <div className="text-danger">
                                                <ErrorMessage name="description" />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="my-2">
                                            <label>Category</label>
                                            <Field as='select' name='category' className='form-control' required id="state">
                                                <option value=''>Choose</option>
                                                <option value='Programming'>Programming</option>
                                                <option value='Educational'>Educational</option>
                                                <option value='Javascript'>Javascript</option>
                                                <option value='React'>React</option>
                                                <option value='Php'>Php</option>
                                                <option value='Python'>Python</option>
                                                <option value='Java'>Java</option>
                                            </Field>
                                            <div className="text-danger">
                                                <ErrorMessage name="category" />
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
                                <button className="btn btn-primary my-4" type="submit">Submit</button>
                            </Form>
                        )}
                    </Formik>
                </Card.Body>
            </Card>
        </Layout>
    )
}

export default AddEdit