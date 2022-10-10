import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Fallback = () => {
    return (
        <div className='d-flex justify-content-center align-items-center vh-100 w-100'>
            <Spinner animation="grow" />
        </div>
    )
}

export default Fallback