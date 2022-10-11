import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Fallback from '../components/fallback/Fallback'
import moment from 'moment'

import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import LatestPosts from '../components/latestPosts/LatestPosts'
import Reply from '../components/reply/Reply'
import Tags from '../components/tags/Tags'
import { publicServices } from '../services/publicServices'

const Description = () => {
    const { id } = useParams();
    const { data, isLoading, isError } = useQuery(['blog'], () => publicServices.getBlog(id));
    if (isLoading) return <Fallback />;
    return (
        <div className='dashboard'>
            <Header />
            <Container className="my-5">
                <Row>
                    <Col md={9}>
                        <div className='description mb-5'>
                            <img src={`http://localhost:8000/${data.coverImage}`} className='w-100' style={{ height: '500px' }} />
                            <div className='pt-5'>
                                <h3 className='fw-bold'>{data.title}</h3>
                                <p className='text-muted small'>by rajivchg <span className='ms-5'>created at :{moment(data.createdAt).format('YYYY-MM-DD')}</span></p>
                                <hr />
                                <p className='text-muted small'>
                                    {data.description}
                                </p>
                            </div>
                        </div>
                        <Reply />
                    </Col>
                    <Col md={3}>
                        <LatestPosts />
                        <hr />
                        <Tags />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Description