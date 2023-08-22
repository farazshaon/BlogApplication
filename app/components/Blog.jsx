import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

async function getData() {
    const res = await fetch('https://basic-blog.teamrabbil.com/api/post-newest')
    
    if (!res.ok) {
     
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

const Blog = async () => {

    const data = await getData()
  return (
    <div>

    
<div className="container mx-auto">
                <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-6">


                {data.length > 0 && data.map((item, index) => (
                    <Link href={'/blogDetails/' + item.id}  className="card w-100 glass" key={index} >
                    <img src= {item.img}/>
                    <div className="card-body">
                        <h2 className="card-title">{item.title}</h2>
                        <p>{item.short}</p>
                    </div>
                </Link>
      ))}

                </div>                
            </div> 
    </div>
  )
}

export default Blog