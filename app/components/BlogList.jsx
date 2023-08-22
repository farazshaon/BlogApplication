import React from 'react'
import Link from 'next/link'
const BlogList = ({data}) => {
    console.log(data);
  return (
    <div>
      <div>
          <div className="container mx-auto my-16 p-9">
                <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                  data.length > 0 && data.map((item, index) => (
                    <Link href={'/blogDetails/' + item.id}  className="card w-100 glass" key={index} >
                        <img src= {item.img}/>
                        <div className="card-body">
                            <h2 className="card-title">{item.title}</h2>
                            <p>{item.short}</p>
                        </div>
                    </Link> 
                  ))
                }
                </div>
            </div> 
    </div>
    </div>
  )
}

export default BlogList
