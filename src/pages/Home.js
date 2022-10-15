import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

import LatestPosts from '../components/latestPosts/LatestPosts'
import CustomCard from '../components/card/CustomCard'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { useQuery } from '@tanstack/react-query'
import { publicServices } from '../services/publicServices'
import Fallback from '../components/fallback/Fallback'
import { EmailBanner } from '../components/suscribe/Suscribe'
import Faq from '../components/faq/Faq'
import { ContactUs } from '../components/contactUs/ContactUs'

const Home = () => {

    const { data, isLoading } = useQuery(['blogs'], publicServices.getBlogs);

    if (isLoading) return <Fallback />

    return (
        <div className='bg-light'>
            <Header />
            <Container className='py-5'>
                <Row>
                    <Col md={9}>
                        <Row>
                            {
                                data?.map((item) => (
                                    <Col md={6} className="pb-4" key={item._id}>
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
            <Faq />
            <section className='bg-light'>
                <Container>
                    <EmailBanner />
                </Container>
            </section>
            <Footer />
        </div>

    )
}

export default Home