"use client"
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'

export default async function SingleMessage({params}) {
    const router=useRouter()
    const {contactid}=params
    const res=await fetch(`/api/contact/${contactid}`)
    if(!res.ok) throw new Error("Message not fetched")
    const data=await res.json()

    const handleDelete=async()=>{
       const contactid= data._id
       const res=await fetch(`/api/contact/${contactid}`,{
        method:'DELETE'
       });
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
