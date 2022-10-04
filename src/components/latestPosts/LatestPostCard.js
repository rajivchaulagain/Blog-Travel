import React from 'react'

const LatestPostCard = () => {
    return (
        <div className="d-flex align-items-center py-3">
            <div>
                <img src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/11/2016/11/1-1024x777.jpg" className='latest-posts-img' />
            </div>
            <div className='ps-3'>
                <p className='mb-0'>
                    PEOPLE, TRAVEL
                </p>
                <h6 className='fw-bold'>Trip that you'll never ever forget</h6>
            </div>
        </div>
    )
}

export default LatestPostCard