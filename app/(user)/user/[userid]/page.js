import React from 'react'

export default async function SingleUser({params}) {
    const {userid}=params
    const res=await fetch(`http://localhost:3000/api/user/${userid}`,{cache:"no-store"})
    if(!res.ok) throw new Error("Single user data not fetched")
    const data=await res.json()

    
  return (
    <div>
        <p>{data._id}</p>
        <p>{data.name}</p>
        <p>{data.email}</p>
    </div>
  )
}
