import React from 'react'
import SidebarFilters from '../components/sidebarFilter/SidebarFilters'
import Blogs from '../components/blogs/Blogs'

const Home = () => {
  return (
    <section className="wrapper">
      <SidebarFilters />
      {/*  posts container */}
      <Blogs />
      {/* posts container ends */}
    </section>
  )
}

export default Home
