import Link from "next/link"


export default async function UserPage() {

    const res=await fetch('http://localhost:3000/api/user',{cache:"no-store"})
    if(!res.ok) throw new Error("Error fetching users data")

    const data=await res.json()

  return (
    <div>
    {data.map((users)=>(
    
    <div key={users._id}>
        <Link href={`/user/${users._id}`} className="hover:text-red-800 hover:uppercase cursor-pointer"><p>{users.name}</p></Link>
        <p>{users.email}</p>
        <br/><hr/>
    </div>

))}
    </div>
  )
  

}
