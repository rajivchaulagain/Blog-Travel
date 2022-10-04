import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

import LatestPosts from '../components/latestPosts/LatestPosts'
import CustomCard from '../components/card/CustomCard'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const Home = () => {
    return (
        <>
            <Header />
            <Container className='py-5'>
                <Row>
                    <Col md={8}>
                        <Row>
                            <Col md={6}>
                                <CustomCard />
                            </Col>
                            <Col md={6}>
                                <CustomCard />
                            </Col>
                        </Row>
                        <Row className='pt-4'>
                            <Col md={6}>
                                <CustomCard />
                            </Col>
                            <Col md={6}>
                                <CustomCard />
                            </Col>
                        </Row>
                        <Row className="pt-4">
                            <Col md={6}>
                                <CustomCard />
                            </Col>
                            <Col md={6}>
                                <CustomCard />
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <LatestPosts />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>

    )
}

export default Home