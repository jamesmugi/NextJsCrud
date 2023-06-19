"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { useState } from 'react';

export default function Std() {
    const [post, setPost] = useState("")

    const[sum, setSum]=useState(0)

    const router=useRouter();
    const handleClick=()=>{
        
            setSum(sum+1)
            
    }
     
    let arr=[
      {
      reg:'1',
      name:'Susan bet',
      years:25
    },
          {
      reg:'2',
      name:'Mary John',
      years:30
    },
          {
      reg:'3',
      name:'Kibe Tom',
      years:15
    },
    ]
    
    
 
   const pple=(arr.map((std)=>{
    return(
      <div key={std.reg} className='border border-green-500 shadow-lg my-4 mx-auto'>
          <p>{std.reg}</p>
          <p>{std.name}</p>
          <p>{std.years}</p><br/><hr/>
      </div>
    )
   }))

  return  (
    <div>
      {pple}
     <form>
        <input type='text' onChange={(e)=>setPost(e.target.value)}/>
        
    </form>
    <h1 className='mt-4 uppercase text-red-800'>{post} {sum}</h1>
    <button onClick={handleClick}> Add</button>
    </div>
  )
}
