'use client'
import Image from 'next/image'
import { useState,useEffect } from 'react'
import { Redirect } from 'next'
import { redirect, useRouter } from 'next/navigation'

export default function EditUser({params}) {
const {userid}=params
const route=useRouter()
const [data, setData] = useState([])
const [username, setUsername] = useState("")
const [email, setEmail] = useState("")
 
    useEffect(() => {
        const EditUser=async()=>{
            const res=await fetch(`/api/user/${userid}`,{cache:'no-store'})
            if(!res.ok)throw new Error("Data not fetched")
            const data=await res.json()
            setData(data)
            setEmail(data.email)
            setUsername(data.name)
        }
        EditUser()
    }, [userid])


  const handleEdit=async(e)=>{
    e.preventDefault()
    console.log(username,email)
    const res=await fetch(`/api/user/${userid}`,{
      method:'PATCH',
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
      <form onSubmit={handleEdit}>
        <div className='flex flex-col '>
        <label>Username</label>
       <input type='text' placeholder={data.name} onChange={(e)=>setUsername(e.target.value)} className='hover:border-x-black rounded-full px-4'/>
       
        </div>
        <div className='flex flex-col '>
        <label>Email</label>
       <input type='text' placeholder={data.email} onChange={(e)=>setEmail(e.target.value)} className='hover:border-slate-900 rounded-full px-4'/>
        
        </div>
        <button type='submit' className='bg-blue-700 mt-4 text-center rounded-lg px-1 py-2 shadow-lg'>Edit User</button>
      </form>
    </div>
  )
}
