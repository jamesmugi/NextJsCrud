import Link from 'next/link'
import React from 'react'

export default async function StudentDetails() {
    const res=await fetch('/api/student',{cache:'no-store'})
    if(!res.ok)throw new Error("Student Record not found")
    const data=await res.json()
    const content=(data.map((student)=>{
        return(
            <div key={student._id}>
                <Link href={`/studentrecord/${student._id}`} className='cursor-pointer text-start text-blue-800 uppercase'><p>{student.regno}</p></Link>
                <p>{student.stdname}</p>
                <p>{student.email}</p>
                <p>{student.phone}</p><br/><hr/>
            </div>
        )
    }))
  return content
}
