"use client"
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'

export default async function SingleMessage({params}) {
    const router=useRouter()
    const {contactid}=params
    const res=await fetch(`http://localhost:3000/api/contact/${contactid}`)
    if(!res.ok) throw new Error("Message not fetched")
    const data=await res.json()

    const handleDelete=async()=>{
       const res=await fetch('api/contact',{
        method:'DELETE',
        body:JSON.stringify({
            contactid:data._id,
        }),
       })
       if(res.ok){
         router.push('/contactrecord')
       }
    }
const content=(
            <div key={data._id}>
                <div className='flex flex-row gap-4' >
                    <p>{data.name}</p>
                    <p onClick={()=>handleDelete(data._id)} className='bg-red-800  px-1 rounded-lg text-white cursor-pointer'>Delete</p>
                
                </div>
                <p>{data.email}</p>
                <p>{data.message}</p><br/>
            </div>
        )
   
  return content
}
