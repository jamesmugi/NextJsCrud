'use client'
import Image from 'next/image'
import { useState,useEffect } from 'react'
import { Redirect } from 'next'
import { redirect, useRouter } from 'next/navigation'

export default function Home() {
  const route=useRouter()
 
const [username, setUsername] = useState("")
const [email, setEmail] = useState("")
 

  const handleSubmit=async(e)=>{
    e.preventDefault()
  
    const res=await fetch('/api/user',{
      method:'POST',
      body:JSON.stringify({
          name:username,
          email:email,
      }),
    }
    
    )
  if(res.ok){
    route.push("/user")
  }

  }

  return (
    <div className='flex flex-col max-w-md'>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col '>
        <label>Username</label>
       <input type='text' onChange={(e)=>setUsername(e.target.value)} className='hover:border-x-black rounded-full px-4'/>
       
        </div>
        <div className='flex flex-col '>
        <label>Email</label>
       <input type='text'  onChange={(e)=>setEmail(e.target.value)} className='hover:border-slate-900 rounded-full px-4'/>
        
        </div>
        <button type='submit' className='bg-blue-700 mt-4 text-center rounded-lg px-1 py-2 shadow-lg'>Submit</button>
      </form>
    </div>
  )
}
