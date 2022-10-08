import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import axios from 'axios'

import LatestPosts from '../components/latestPosts/LatestPosts'
import CustomCard from '../components/card/CustomCard'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { useQuery } from '@tanstack/react-query'
import { blogServices } from '../services/blogServices'

const Home = () => {

    const { data, isLoading } = useQuery(['blogs'], blogServices.getBlogs);

    if (isLoading) return "loading..."

    console.log(data);

    return (
        <>
            <Header />
            <Container className='py-5'>
                <Row>
                    <Col md={9}>
                        <Row>
                            {
                                data?.map((item) => (
                                    <Col md={6} className="pb-4">
                                        <CustomCard item={item} />
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col>
                    <Col md={3}>
                        <LatestPosts />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>

    )
}

export default Home