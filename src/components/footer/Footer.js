import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import LatestPosts from '../latestPosts/LatestPosts'
import Tags from '../tags/Tags'

const Footer = () => {
    return (
        <>
            <section className='footer py-5'>
                <Container>
                    <Row>
                        <Col md={4}>
                            <h1>Blog</h1>
                            <p className='pt-4'>

                                Pellentesque placerat tincidunt urna,
                                vitae feugiat magna vestibulum non. Mauris ut sagittis est.
                                Pellentesque a felis est. Duis in risus metus. Cras felis ante, sodales eget pretium eu, hendrerit at metus. Maecenas aliquam dictum sapien id ornare.
                            </p>
                        </Col>
                        <Col md={4}>
                            <Container>
                                <LatestPosts />
                            </Container>
                        </Col>
                        <Col md={3}>
                            <h4 className='fw-bold'>Tags</h4>
                            <Tags />
                        </Col>
                    </Row>
                </Container>
            </section>
            <div className='bottom-footer py-4'>
                <h4 className='text-center text-white'>
                    A blog theme by Rajiv
                </h4>
            </div>
        </>
    )
}

export default Footer