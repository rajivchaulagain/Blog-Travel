import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { Link } from 'react-router-dom';
import { blogServices } from '../../../services/blogServices';
import Fallback from '../../fallback/Fallback';
import ProductTable from './ProductTable';

const ProductList = () => {
    const { data: blogs, isLoading } = useQuery(['blogs'], blogServices.getBlogs)
    if (isLoading) return <Fallback />
    return (
        <>
            <div className='d-flex justify-content-between align-items-center mb-4'>
                <h5 className='fw-bold'>Posts</h5>
                <Link to="/dashboard/blog/add" className='btn btn-primary d-flex px-5'>Add</Link>
            </div>
            <ProductTable data={blogs} />
        </>
    )
}

export default ProductList