import { connectDb } from "@/utils/db";
import usermodel from "@/models/User";
import { NextResponse } from "next/server";

export const GET=async (request)=>{
  try {
    await connectDb()
    const users=await usermodel.find()
    return new NextResponse(JSON.stringify(users),{status:200})
  } catch (error) {
    return new NextResponse("Error fetching users data",{status:500})
  }
    
}

export const POST=async(request)=>{
  const {name,email}=await request.json()
  
  try {
    await connectDb();
    const createUser=new usermodel({name,email})
   await createUser.save()
   return new NextResponse(JSON.stringify(createUser),{status:201})
  } catch (error) {
    return new NextResponse("User not added",{status:500})
  }

}