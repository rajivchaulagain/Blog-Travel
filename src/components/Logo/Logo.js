import React from 'react'
import logo from '../../assets/images/logo.png'

const Logo = () => {
    return (
        <img src={logo} style={{ width: '100%', height: '50px', objectFit: 'cover' }} />
    )
}

export default Logo