import Link from 'next/link'
import React from 'react'

async function getData() {
    const res = await fetch('https://basic-blog.teamrabbil.com/api/post-categories')
    const data = await res.json()
    return data
}

const NavBar = async () => {

    const data = await getData()

  return (
    <div className="navbar bg-base-100 shadow-lg">
        <div className="flex-1">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="flex-1 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                
                {data.map((item, index) => (
                    <li key={index}><Link href={'/byCategory/'+item.id}>{item.name}</Link></li>
                ))}
             
                
               
            </ul>
            </div>
            <Link href={'/'} className="btn btn-ghost normal-case text-xl">Coding Avenger</Link>
        </div>
        <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            <li ><Link href={'/'}>Home</Link></li>
            <li ><Link href={'/about'}>About Us</Link></li>
            {data.map((item, index) => (
                    <li key={index}><Link href={'/byCategory/'+item.id}>{item.name}</Link></li>
                ))}

                <li ><Link href={'/contact'}>Contact</Link></li>
            </ul>
        </div>
        
        </div>
  )
}

export default NavBar
