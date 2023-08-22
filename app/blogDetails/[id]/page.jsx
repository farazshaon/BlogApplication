'use client'
import BlogDetails from '@/app/components/BlogDetails'
import React, { useEffect } from 'react'

async function getData(id) {
    const res = await fetch(`https://basic-blog.teamrabbil.com/api/post-details/${id}`)
    
    if (!res.ok) {
     
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

const page = async ({params}) => {
    // const {id} = params;
    // const []
    // const getSinglePost = async (postId) => {
    //     const res = await fetch(`https://basic-blog.teamrabbil.com/api/post-details/${postId}`);
    //     const data = await res.json();
    //     console.log(data.postDetails);
    // }

    // useEffect(() => {
    //     getSinglePost(id);
    // }, [id]);
    
    const data = await getData(params.id)
    // console.log(data)
  return (
    <div>
      <BlogDetails data={data.postDetails}/>
    </div>
  )
}

export default page
