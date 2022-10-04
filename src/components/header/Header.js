import React from 'react'
import Container from 'react-bootstrap/esm/Container'

import '../../assets/css/header.css'
import Hero from '../hero/Hero'
import CustomNavbar from '../navbar/CustomNavbar'

const Header = () => {
    return (
        <div className='header'>
            <CustomNavbar />
            <Container>
                <Hero />
            </Container>
        </div>
    )
}

export default Header