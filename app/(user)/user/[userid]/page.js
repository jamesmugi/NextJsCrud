import Link from 'next/link'
import React from 'react'

export default async function SingleUser({params}) {
    const {userid}=params
    const res=await fetch(`http://localhost:3000/api/user/${userid}`,{cache:"no-store"})
    if(!res.ok) throw new Error("Single user data not fetched")
    const data=await res.json()

    
  return (
    <div>
        <p>{data._id}</p>
       <Link href={`/edituser/${data._id}`}><p >{data.name}</p></Link> 
        <p>{data.email}</p>
    </div>
  )
}
