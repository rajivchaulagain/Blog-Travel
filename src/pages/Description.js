import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import LatestPosts from '../components/latestPosts/LatestPosts'
import Reply from '../components/reply/Reply'
import Tags from '../components/tags/Tags'

const Description = () => {
    return (
        <div className='dashboard'>
            <Header />
            <Container className="my-5">
                <Row>
                    <Col md={9}>
                        <div className='description mb-5'>
                            <img src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/11/2016/11/1-1024x777.jpg" className='w-100' style={{ height: '500px' }} />
                            <div className='pt-5'>
                                <h3 className='fw-bold'>Trip that you'll never ever forget</h3>
                                <p className='text-muted small'>by rajivchg <span>Nivember 23,2016</span></p>
                                <hr />
                                <p className='text-muted small'>
                                    List of climbing trails and spots curated for voyagers who need to induce dynamic and finished for the day. These climbs final greatest a day and least and few hours.Sundarijal Found 17 km northeast of Kathmandu, Sundarijal may be a little town where a assortment of greenery and creatures may be seen along the Sundarijal Day Climb track, which traverses Shivapuri Nagarjun National Stop. A Hindu goddess sanctuary called Sundarimai Sanctuary is additionally adjacent, at the Bagmati river's intersection with the Nagmati tributary.Additionally, power is created from Sundarijal Hydropower Station. You'll witness the dazzling see of both the Kathmandu valley and Mulkhara, a Tamang settlement, inside few hours of climbing. Sundarijal could be a well known goal for inhabitants to go biking, picnicking, and day trekking.Distance: 18 km Height: 1,345m Length: half a day / 5-6 hrs Season: March-May/ September-November Kathmandu-Chisapani Chisapani, a small slope stat
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