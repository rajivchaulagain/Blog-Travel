import { useQuery } from '@tanstack/react-query';
import React from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { blogServices } from '../../../services/blogServices';
import Fallback from '../../fallback/Fallback';

const ProductList = () => {
    const { data: blogs, isLoading } = useQuery(['blogs'], blogServices.getBlogs)
    if (isLoading) return <Fallback />
    return (
        <>
            <div className='d-flex justify-content-between align-items-center'>
                <h3 className='mb-5'>Products List</h3>
                <Link to="/dashboard/blog/add" className='btn btn-primary d-flex px-5 mb-5'>Add</Link>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((item) => (
                        <tr>
                            <td>1</td>
                            <td>
                                <img src={`http://localhost:8000/${item.coverImage}`} className="me-4" alt={item.coverImage} style={{ height: '50px', width: '50px', objectFit: 'cover' }} />
                                {item.title}
                            </td>
                            <td>{item.description}</td>
                            <td>
                                {/* <Link to="/dashboard/blog/:id">View</Link> */}
                                <Link to={`/dashboard/blog/edit/${item._id}`} className='mx-3'>Edit</Link>
                                <Link>Delete</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default ProductList