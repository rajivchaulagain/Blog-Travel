import React from 'react'
import Container from 'react-bootstrap/esm/Container'

import '../../assets/css/header.css'
import Hero, { HeroImageRight } from '../hero/Hero'
import CustomNavbar from '../navbar/CustomNavbar'

const Header = () => {
    return (
        <>
            <CustomNavbar />
            {/* <HeroImageRight /> */}
        </>
    )
}

export default Header