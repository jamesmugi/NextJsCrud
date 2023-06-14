import React from 'react'

export default async function SingleStudent({params}) {
    const {studentid}=params
    const res=await fetch(`http://localhost:3000/api/student/${studentid}`)
    if(!res.ok) throw new Error("Student record not found")
    const data=await res.json()
  return (
    <div>
        <p>{data.regno}</p>
        <p>{data.stdname}</p>
        <p>{data.email}</p>
        <p>{data.phone}</p>
    </div>
  )
}
