import React, { useEffect } from 'react'
import { Banner } from '../../Components/blog/banner/Banner'
import { Blogs } from '../../Components/blog/blogs/Blogs'
import { BoostProductivity } from '../../Components/blog/boost-productivity/BoostProductivity'

export const Blog = () => {
  useEffect(()=>{
    document.title = "Blog"
  },[])
  return (
    <>
        <Banner />
        <Blogs />
        <BoostProductivity />
    </>
  )
}
