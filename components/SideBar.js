import Link from 'next/link'
import React from 'react'

export default function SideBar() {
  return (
    <div className='min-h-screen bg-slate-900 text-white'>
      <aside>
        <nav className=' flex flex-col gap-4 w-36 px-4'>
          <Link href={'/'}>HomePage</Link>
          <Link href={'/post'}>Posts Page</Link>
          <Link href={'/createuser'}>Add User</Link>
          <Link href={'/user'}>Users Page</Link>
          <Link href={'/createpost'}>Create Post</Link>
          <Link href={'/student'}>Student Form</Link>
          <Link href={'/studentrecord'}>View Students</Link>
        </nav>
      </aside>
    </div>
  )
}
