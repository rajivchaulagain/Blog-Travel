import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Col, Container } from 'react-bootstrap'
import { publicServices } from '../../services/publicServices'
import Fallback from '../fallback/Fallback'
import LatestPostCard from './LatestPostCard'

const LatestPosts = () => {
  const { data, isLoading } = useQuery(['recent-blogs'], publicServices.recentBlogs);
  if (isLoading) return <Fallback />
  return (
    <section className='latest-posts'>
      <h4 className='fw-bold mb-4'>Latest Posts</h4>
      <Container>
        {
          data.map((item) => (
            <>
              <LatestPostCard item={item} />
              <hr />
            </>
          ))
        }
      </Container>
    </section>
  )
}

export default LatestPosts