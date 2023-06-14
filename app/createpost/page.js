'use client'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreatePost() {
const router=useRouter()
 const [title, setTitle] = useState("")
 const [desc, setDesc] = useState("")

 const handleSubmit=async(e)=>{
    e.preventDefault();
    const res=await fetch('/api/post',{
        method:'POST',
        body:JSON.stringify({
            title:title,
            body:desc
        }),
    });
   if(res.ok){
        router.push('/post')
   }
 }
  return (
    <div>
        <section className='flex flex-col w-full'>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col w-full'>
                    <label for="title">Title</label>
                    <input  onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div className='flex flex-col w-full'>
                    <label for="title">Description</label>
                    <textarea  onChange={(e)=>setDesc(e.target.value)}/>
                </div>
                <button className='bg-green-700 rounded-lg px-1 py-1 shadow-lg mt-4'>Submit Post</button>
            </form>
        </section>
    </div>
  )
}
