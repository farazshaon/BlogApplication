import React from 'react'
import BlogList from '@/app/components/BlogList'
async function getData(id) {
    const res = await fetch(`https://basic-blog.teamrabbil.com/api/post-list/${id}`)
    
    if (!res.ok) {
     
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

const Page = async ({params}) => {
    const data = await getData(params.id)
    console.log("DATA", data);
  return (      
    <BlogList data={data}/>
  )
}

export default Page
