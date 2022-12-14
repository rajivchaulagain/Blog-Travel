import React from 'react'

import ProductList from '../../components/dashboard/Products/ProductList'
import Layout from './Layout'

const Dashboard = () => {
    return (
        <Layout isStatsGrid={true}>
            <div className='dashboard'>
                <ProductList />
            </div>
        </Layout>
    )
}

export default Dashboard