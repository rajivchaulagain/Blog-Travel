import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div>
            <h4>Sidebar</h4>
            <hr />
            <ul>
                <li className='pb-2'>
                    <Link to="/dashboard">
                        Dashboard
                    </Link>
                </li>
                <li className='pb-2'>Product List</li>
                <li className='pb-2'>Home</li>
                <li className='pb-2'>Home</li>
                <li className='pb-2'>Home</li>
                <li className='pb-2'>Home</li>
                <li className='pb-2'>Home</li>
                <li className='pb-2'>Home</li>
                <li className='pb-2'>Home</li>
            </ul>
        </div>
    )
}

export default Sidebar