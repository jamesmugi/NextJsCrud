'use client'
import { useState } from 'react'
import Form from '@/components/Form'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function () {
    const router=useRouter();
    const [regno, setRegno] = useState("")
    const [stdname, setStdname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const handleSubmit=async(e)=>{
        const data={regno,stdname,email,phone};
        
        e.preventDefault()
        const res=await fetch('/api/student',{
            method:'POST',
            body:JSON.stringify({
                regno:regno,
                stdname:stdname,
                email:email,
                phone:phone,
            }),
        })
        if(res.ok){
           router.push("/studentrecord")
        }
    }
  return (
    <div>
        <section className='flex flex-col w-full shadow-lg'>
        <h1 className='uppercase underline text-green-700 py-4'>Student Registration Form</h1>
        <form onSubmit={handleSubmit}>
            <div className='w-1/2 flex flex-col'>
                <label for="regno">Registration Number</label>
                <input placeholder='Reg No' onChange={(e)=>setRegno(e.target.value)}/>
            </div>
            <div className='w-1/2 flex flex-col'>
                <label for="stdname">Student Name</label>
                <input placeholder='Student Name' onChange={(e)=>setStdname(e.target.value)}/>
            </div>
            <div className='w-1/2 flex flex-col'>
                <label for="email">Email Address</label>
                <input placeholder='Email Address' onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className='w-1/2 flex flex-col'>
                <label for="regno">Phone Number</label>
                <input placeholder='phone' onChange={(e)=>setPhone(e.target.value)}/>
            </div>
            <div>
                <button className='bg-green-950 px-1 py-1 rounded-lg text-white shadow-2xl mt-4'>Submit Data</button>
            </div>
        </form>
        </section>
    </div>
  )
}
