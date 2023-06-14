import React from 'react'

export default async function SinglePost({params}) {
    const {postid}=params
    const res=await fetch(`http://localhost:3000/api/post/${postid}`,{cache:"no-store"})
    if(!res.ok) throw new Error("Single user data not fetched")
    const data=await res.json()

    
  return (
    <div>
        <p>{data._id}</p>
        <p>{data.title}</p>
        <p>{data.body}</p>
    </div>
  )
}
