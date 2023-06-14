import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function NavBar() {
  return (
    <div className='flex flex-row justify-between text-start w-full bg-slate-600 text-white px-4 py-4'>
      <div className='flex flex-row gap-6'>
        <div className='flex gap-1'>
          <span className='rounded-full contain'><Image src={'/nextlogo.png'} alt='Logo' width={30} height={30} /> </span>
          <p className='uppercase'>
            User System
          </p>
        </div>
        <div>
        <nav className=' flex flex-row gap-4  '>
          <Link href={'/'}>HomePage</Link>
          <Link href={'/post'}>Posts Page</Link>
          <Link href={'/createuser'}>Add User</Link>
          <Link href={'/user'}>Users Page</Link>
          <Link href={'/createpost'}>Create Post</Link>
          <Link href={'/student'}>Student Form</Link>
          <Link href={'/studentrecord'}>View Students</Link>
          <Link href={'/contact'}>Contact Form</Link>
          <Link href={'/contactrecord'}>View Messages</Link>
          
        </nav>
        </div>
      </div>
      <div className='flex gap-2 cursor-pointer'>
        <p className='bg-yellow-500 rounded-lg px-2 py-1 l justify-start hover:bg-red-800 hover:shadow-2xl'>Login</p>
        <p className='bg-yellow-500 rounded-lg px-2 py-1 l justify-start hover:bg-red-700 hover:shadow:2xl'>Logout</p>
      </div>
    </div>
  )
}
