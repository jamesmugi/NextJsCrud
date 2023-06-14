import Link from 'next/link'
import React from 'react'

export default async function PostPage() {
    const res=await fetch('http://localhost:3000/api/post',{cache:"no-store"})
    if(!res.ok) throw new Error("Post data not fetched")
    const data=await res.json()
    const content=(data.map((post)=>{
        return(
            <div key={post._id}>
                    <Link href={`/post/${post._id}`} className='hover:uppercase hover:text-red-700'><p>{post.title}</p></Link>
                    <p>{post.body}</p><br/><hr/>
            </div>
        )
    }))
  return content
}
