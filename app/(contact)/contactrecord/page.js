import Link from 'next/link'
import React from 'react'

export default async function Homepage() {
  const res=await fetch('http://localhost:3000/api/contact',{cache:'no-store'})
  if(!res.ok) throw new Error("Message not loaded")
  const data=await res.json()
  const content=(data.map((messages)=>{
    return (
      <div key={messages._id} className='shadow-2xl border border-slate-700 '>
        <Link href={`/contact/${messages._id}`} className='cursor-pointer uppercase hover:text-ellipsis hover:text-blue-700'><p>{messages.name}</p></Link>
        <p>{messages.email}</p>
        <p>{messages.message}</p><br/><hr/>
      </div>
    )
  }))
  return content
}
