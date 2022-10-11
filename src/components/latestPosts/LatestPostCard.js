import React from 'react'
import { Link } from 'react-router-dom'

const LatestPostCard = ({ item }) => {
    return (
        <Link to={`/blog/${item._id}`}>
            <div className="d-flex align-items-center py-3">
                <div>
                    <img src={`http://localhost:8000/${item.coverImage}`} style={{ height: '100px' , width:'100px' , borderRadius:'50%' , objectFit:'cover' }} alt={item.coverImage} />
                </div>
                <div className='ps-3'>
                    <p className='mb-0'>
                        PEOPLE, TRAVEL
                    </p>
                    <h6 className='fw-bold'>{item.title}</h6>
                </div>
            </div>
        </Link>
    )
}

export default LatestPostCard