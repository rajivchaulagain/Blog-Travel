import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavbarSimple } from '../../components/dashboard/Navbar/Navbar'
import Footer from '../../components/footer/Footer'
import CustomNavbar from '../../components/navbar/CustomNavbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { StatsGrid } from '../../components/stats/Stats'

const Layout = ({ isStatsGrid = false, children }) => {
    return (
        <div className='dashboard bg-light'>
            <div className='d-flex'>
                <NavbarSimple />
                <Container>
                    <CustomNavbar />
                    {
                        isStatsGrid && (
                            <StatsGrid />
                        )
                    }
                    <Col md={11} className="mx-auto">
                        <div>
                            {children}
                        </div>
                    </Col>
                </Container>
            </div >
            <Footer />
        </div >
    )
}

export default Layout