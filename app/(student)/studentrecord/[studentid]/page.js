"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

export default async function SingleStudent({params}) {
  const router=useRouter()
    const {studentid}=params
    const res=await fetch(`/api/student/${studentid}`)
    if(!res.ok) throw new Error("Student record not found")
    const data=await res.json()

    const handleDelete=async()=>{
      const stdid=data._id
      const res=await fetch(`/api/student/${stdid}`,{
        method:'DELETE'
      })
      if(res.ok){
        router.push('/studentrecord')
      }
    }
    const handleEdit=async()=>{
      const stdid=data._id
      router.push(`/edit-student/${stdid}`)
    }
  return (
    <div>
        <div className='flex flex-row gap-4' >
        <p>{data.regno}</p>
          <p onClick={()=>handleDelete(data._id)} className='bg-red-800  px-1 rounded-lg text-white cursor-pointer'>Delete</p>
          <p onClick={()=>handleEdit(data._id)} className='bg-red-800  px-1 rounded-lg text-white cursor-pointer'>Edit</p>
                
         </div>
        
        <p>{data.stdname}</p>
        <p>{data.email}</p>
        <p>{data.phone}</p>
    </div>
  )
}
