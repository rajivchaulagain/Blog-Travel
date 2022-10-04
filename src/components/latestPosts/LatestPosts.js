import React from 'react'
import { Col, Container } from 'react-bootstrap'
import LatestPostCard from './LatestPostCard'

const LatestPosts = () => {
  return (
    <section className='latest-posts'>
        <h4 className='fw-bold mb-4'>Latest Posts</h4>
        <Container>
        <LatestPostCard />
        <hr />
        <LatestPostCard />
        <hr />
        <LatestPostCard />
        </Container>
    </section>
  )
}

export default LatestPosts