import { useRouter } from 'next/navigation'
import React from 'react'
import { useState } from 'react'

export default function Form(request) {
  const router=useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit=async(e)=>{
      e.preventDefault()
      const res=await fetch('api/contact',{
        method:'POST',
        body:JSON.stringify({
            name,
            email,
            message,
        }),
      })
      if(res.ok){
          router.push("/contactrecord")
      }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-2'>
          <label>Full Name</label>
          <input type='text' placeholder='James Karanja' value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className='flex flex-col gap-2'>
          <label>Email Adress</label>
          <input type='email' placeholder='James@gmail.com' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='flex flex-col gap-2'>
          <label>Message</label>
          <textarea className='h-32' placeholder='Message....' value={message} onChange={(e)=>setMessage(e.target.value)}/>
        </div>
        <button  type='submit' className='bg-green-950 text-white mt-4 w-full py-4 px-4'>Submit</button>
      </form>
    </div>
  )
}

