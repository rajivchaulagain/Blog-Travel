import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'

const Layout = ({ children }) => {
    return (
        <div className='dashboard'>
            <Header />
            <Container className='mt-5'>
                <Row>
                    <Col md={2}>
                        <Sidebar />
                    </Col>
                    <Col md={10}>
                        {children}
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Layout