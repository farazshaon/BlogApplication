import React from 'react'

const BlogDetails = ({data}) => {
    // console.log("Data", data);
  return (
    <div>
        {data !== null ? (
            <div className="container mx-auto my-16 p-9">
            <div className="grid p-x-9 grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-1">
                <div className="card w-100 glass">
                    <figure><img src={data.img} alt="car!"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">{data.title}</h2>
                        <p>{data.content}</p>
                    </div>
                </div>
              </div>    
        </div>
        ) : (
<div className="container mx-auto my-16 p-9">
            <div className="grid p-x-9 grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-1">
                <div className="card w-100 glass">
                    <h2>Data not found!</h2>
                </div>
              </div>    
        </div>
        )}
       
    </div>
  )
}

export default BlogDetails
