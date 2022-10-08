import { useQuery } from '@tanstack/react-query';
import React from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { blogServices } from '../../../services/blogServices';

const ProductList = () => {
    const { data: blogs, isLoading } = useQuery(['blogs'], blogServices.getBlogs)
    if (isLoading) return "loading..."
    console.log(blogs);
    return (
        <>
            <div className='d-flex justify-content-between align-items-center'>
                <h3 className='mb-5'>Products List</h3>
                <Link to="/blog/add" className='btn btn-primary d-flex px-5 mb-5'>Add</Link>
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
                                <img src={`${item.coverImage}`} alt={item.coverImage} />
                                {item.title}
                            </td>
                            <td>{item.description}</td>
                            <td>@mdo</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default ProductList