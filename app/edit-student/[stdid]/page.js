'use client'
import { useState,useEffect } from 'react'
import Form from '@/components/Form'
import React from 'react'
import { useRouter } from 'next/navigation'

export default  function StudentEdit({params}) {
    const {stdid}=params
    const router=useRouter();
    const [data, setData] = useState([])
    const [regno, setRegno] = useState("")
    const [stdname, setStdname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    useEffect(() => {
        const GetEdit=async()=>{
            const response=await fetch(`http://localhost:3000/api/student/${stdid}`)
            if(!response.ok) throw new Error("Student details not found")
            const data=await response.json()
            
              setData(data)
              setRegno(data.regno)
              setStdname(data.stdname)
              setEmail(data.email)
              setPhone(data.phone)
        }
     GetEdit()
    }, [stdid])
    


    const handleEdit=async(e)=>{
        e.preventDefault()
        const data={regno,stdname,email,phone};
 
        const res=await fetch(`/api/student/${stdid}`,{
            method:'PATCH',
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
        <h1 className='uppercase underline text-green-700 py-4'>Student Edit Form</h1>
        <form onSubmit={handleEdit}>
            <div className='w-1/2 flex flex-col'>
                <label for="regno">Registration Number</label>
                <input value={data.regno} onL onChange={(e)=>setRegno(e.target.value)}/>
            </div>
            <div className='w-1/2 flex flex-col'>
                <label for="stdname">Student Name</label>
                <input placeholder={data.stdname} onChange={(e)=>setStdname(e.target.value)}/>
            </div>
            <div className='w-1/2 flex flex-col'>
                <label for="email">Email Address</label>
                <input placeholder={data.email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className='w-1/2 flex flex-col'>
                <label for="phone">Phone Number</label>
                <input placeholder={data.phone} onChange={(e)=>setPhone(e.target.value)}/>
            </div>
            <div>
                <button className='bg-green-950 px-1 py-1 rounded-lg text-white shadow-2xl mt-4'>Submit Data</button>
            </div>
        </form>
        </section>
    </div>
  )
}
